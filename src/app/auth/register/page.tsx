import CardWrapper from "@/components/CardWrapper";
import RegisterFunctionality from "@/components/RegisterFunctionality";

function page() {
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <RegisterFunctionality />
    </CardWrapper>
  );
}
export default page;
