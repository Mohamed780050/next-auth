"use client";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/../routes";

function Social() {
  async function onClickHandler(provider: "google" | "github") {
    await signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      {/* 
    // TODO: install react-icons add google and facebook
    */}
      <form
        className=" w-full "
        action={async () => await onClickHandler("google")}
      >
        <Button
          size="icon"
          className="w-full text-xl"
          variant="outline"
          type="submit"
        >
          <FcGoogle className="h-8 w-8" />
        </Button>
      </form>
      <form
        className=" w-full "
        action={async () => await onClickHandler("github")}
      >
        <Button
          size="icon"
          className="w-full text-xl"
          variant="outline"
          type="submit"
        >
          <FaGithub className="h-8 w-8" />
        </Button>
      </form>
    </div>
  );
}
export default Social;
