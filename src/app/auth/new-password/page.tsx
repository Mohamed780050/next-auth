import ResetPasswordForm from "@/components/ResetPasswordForm";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
