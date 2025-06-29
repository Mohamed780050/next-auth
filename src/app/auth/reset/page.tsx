import CardWrapper from "@/components/CardWrapper";
import ResetForm from "@/components/ResetForm";

export default function page() {
  return (
    <CardWrapper
      headerLabel="Change password"
      backButtonLabel="Back to login."
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <ResetForm />
    </CardWrapper>
  );
}
