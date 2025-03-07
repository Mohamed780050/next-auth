import CardWrapper from "@/components/CardWrapper";
import LoginFunctionality from "@/components/LoginFunctionality";

function page() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <LoginFunctionality />
    </CardWrapper>
  );
}
export default page;
