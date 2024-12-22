import {
  logInInputInterface,
  RegisterInputsInterface,
} from "@/Interfaces/interfaces";

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
export const registerInputs: RegisterInputsInterface[] = [
  {
    id: "email",
    name: "email",
    placeholder: "Write your Email",
    type: "email",
    label: "Email",
  },
  {
    id: "username",
    name: "username",
    placeholder: "Write your Email",
    type: "text",
    label: "Username",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Write your Email",
    type: "password",
    label: "Password",
  },
];
