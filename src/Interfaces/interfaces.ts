import { ReactNode } from "react";

export interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}
export interface logInInputInterface {
  id: string;
  placeholder: string;
  name: "identifier" | "password";
  type: "text" | "password";
  label: string;
}
