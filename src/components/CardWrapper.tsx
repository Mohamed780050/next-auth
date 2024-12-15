"use client";
import { CardWrapperProps } from "@/Interfaces/interfaces";
import Header from "./Header";
import Social from "./Social";
import Link from "next/link";
import { Button } from "./ui/button";

function CardWrapper({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <>
      {/* Card */}
      <div className="w-[400px] shadow-md">
        {/* CardHeader */}
        <div>
          <Header label={`${headerLabel}`} />
        </div>
        {/* CardContent */}
        <div>{children}</div>
        {/* CardFooter */}
        {showSocial && (
          <div>
            <Social />
          </div>
        )}
        {/* CardFooter */}
        <div>
          <Button variant="link" asChild className="w-full">
            <Link href={`${backButtonHref}`}>{backButtonLabel}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
export default CardWrapper;
