import * as z from "zod";
export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "don't leave that field empty")
    .or(z.string().email()),
  password: z
    .string()
    .min(1, "don't leave that field empty")
    // .min(8, "password is less than 8 chars"),
});
