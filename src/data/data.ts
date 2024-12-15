import { logInInputInterface } from "@/Interfaces/interfaces";

export const logInInputs: logInInputInterface[] = [
  {
    id: "identifier",
    name: "identifier",
    placeholder: "Write your Username or Email",
    type: "text",
    label: "Username Or Email",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Write your password",
    type: "password",
    label: "Password",
  },
];
