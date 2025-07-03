import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "confirm your email",
    html: `<p>click <a href=${confirmLink}>here</a> to conifrm email.</p>`,
  });
}
export async function sendPasswordResetToken(email: string, token: string) {
  const confirmLink = `http://localhost:3000/auth/new-password?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset password",
    html: `<p>click <a href=${confirmLink}>here</a> to reset password.</p>`,
  });
}
