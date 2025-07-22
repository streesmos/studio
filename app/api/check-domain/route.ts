import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json(
      { error: "Missing domain parameter" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.domainsdb.info/v1/domains/search?domain=${encodeURIComponent(domain)}`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    const taken = (data?.domains ?? []).some(
      (d: any) => d.domain.toLowerCase() === domain.toLowerCase()
    );

    return NextResponse.json({ available: !taken });
  } catch (e) {
    return NextResponse.json(
      { error: "Error checking domain" },
      { status: 500 }
    );
  }
}
