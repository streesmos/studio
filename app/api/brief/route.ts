import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user',
      pass: process.env.SMTP_PASS || 'pass',
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER || 'user@example.com',
    to: '7083365@clipsa.net',
    subject: 'New brief submission',
    text: JSON.stringify(data, null, 2),
  });

  return NextResponse.json({ success: true });
}
