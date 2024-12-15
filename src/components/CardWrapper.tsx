"use client";
import { CardWrapperProps } from "@/Interfaces/interfaces";
import Header from "./Header";
import Social from "./Social";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function CardWrapper({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <Header label={`${headerLabel}`} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <Button variant="link" asChild className="w-full">
            <Link href={`${backButtonHref}`}>{backButtonLabel}</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default CardWrapper;
