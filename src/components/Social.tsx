"use client";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

function Social() {
  function onClickHanler(proiver: "google" | "github") {
    signIn(proiver);
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      {/* 
    // TODO: install react-icons add google and facebook
    */}
      <Button
        size="icon"
        className="w-full text-xl"
        variant="outline"
        onClick={() => onClickHanler("google")}
      >
        <FcGoogle className="h-8 w-8" />
      </Button>
      <Button
        size="icon"
        className="w-full text-xl"
        variant="outline"
        onClick={() => onClickHanler("github")}
      >
        <FaGithub className="h-8 w-8" />
      </Button>
    </div>
  );
}
export default Social;
