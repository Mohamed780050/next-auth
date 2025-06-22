import CardWrapper from "@/components/CardWrapper";
import { FaExclamation } from "react-icons/fa";

export default function AuthErrorPage() {
  return (
    <div>
      <CardWrapper
        headerLabel="Opps! Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login page"
        showSocial={false}
      >
        <div className="w-full flex items-center justify-center">
          <FaExclamation />
        </div>
      </CardWrapper>
    </div>
  );
}
