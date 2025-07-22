import { z } from "zod";

export const subscribeNewsletterSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, введите корректный email" }),
});

export type TSubscribeNewsletterSchema = z.infer<
  typeof subscribeNewsletterSchema
>;
