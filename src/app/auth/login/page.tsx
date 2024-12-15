import CardWrapper from "@/components/CardWrapper";

function page() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Log in
    </CardWrapper>
  );
}
export default page;
