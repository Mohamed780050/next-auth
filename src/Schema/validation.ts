import * as z from "zod";
export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "don't leave that field empty")
    .or(z.string().email()),
  password: z.string().min(1, "don't leave that field empty"),
  code:z.optional(z.string())
});
export const registerSchema = z.object({
  username: z.string().min(1, "don't leave that field empty"),
  email: z.string().email().min(1, "don't leave that field empty"),
  password: z.string().min(1, "don't leave that field empty"),
});
export const resetSchema = z.object({
  email: z.string().email().min(1, "don't leave that field empty"),
});
export const resetPasswordSchema = z.object({
  password: z.string().min(1,"Don't let this field empty").min(8,"password is less than 8 chars"),
  confirmPassword: z.string().min(1,"Don't let this field empty").min(8,"password is less than 8 chars"),
}).superRefine((data,ctx) => {
  if(data.password !== data.confirmPassword) ctx.addIssue({
    code:"custom",
    message:"password are not identical",
    path:["confirmPassword"]
  })
});