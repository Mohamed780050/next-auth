"use client";
import { Button } from "./ui/button";

function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      {/* 
    // TODO: install react-icons add google and facebook
    */}
      <Button className="w-full" variant="outline" onClick={() => {}}>
        Google
      </Button>
      <Button className="w-full" variant="outline" onClick={() => {}}>
        GitHub
      </Button>
    </div>
  );
}
export default Social;
