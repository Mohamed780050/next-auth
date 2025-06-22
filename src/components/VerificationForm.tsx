"use client";
import { redirect, useSearchParams } from "next/navigation";
import CardWrapper from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { verifyEmialToken } from "../../Action/verificationToken";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

async function onSubmit(
  token: string,
  sSetter: (v: string) => void,
  eSetter: (v: string) => void
) {
  const response = await verifyEmialToken(token);
  if (response) eSetter(response.error);
  else sSetter("email confirmed.");
}

export default function VerificatoinForm() {
  const [successMessage, setSucessMessage] = useState<null | string>(null);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  if (token == null) redirect("/auth/login");

  useEffect(() => {
    onSubmit(token, setSucessMessage, setErrorMessage);
  }, [token]);
  return (
    <CardWrapper
      headerLabel="confirming your Email"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      showSocial={false}
    >
      {successMessage === null && errorMessage === null && (
        <div className="flex items-center w-full justify-center">
          <BeatLoader />
        </div>
      )}
      {errorMessage !== null && <FormError message={errorMessage} />}
      {successMessage !== null && <FormSuccess message={successMessage} />}
    </CardWrapper>
  );
}
