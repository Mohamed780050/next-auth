"use client";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      {/* 
    // TODO: install react-icons add google and facebook
    */}
      <Button
        size="icon"
        className="w-full text-xl"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-8 w-8" />
      </Button>
      <Button
        size="icon"
        className="w-full text-xl"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="h-8 w-8" />
      </Button>
    </div>
  );
}
export default Social;
