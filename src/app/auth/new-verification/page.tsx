import VerificatoinForm from "@/components/VerificationForm";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <VerificatoinForm />;
    </Suspense>
  );
}
