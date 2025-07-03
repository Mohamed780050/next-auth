import {
  logInInputInterface,
  RegisterInputsInterface,
  resetPasswordInputInterface,
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
export const resetInputs = [
  {
    id: "Email",
    name: "email",
    placeholder: "Write your Email",
    type: "text",
    label: "Email",
  },
];
export const passwordInputsReset:resetPasswordInputInterface[] = [
  {
    id: "password",
    name: "password",
    placeholder: "Write your password",
    type: "password",
    label: "password",
  },
  {
    id: "confirm-password",
    name: "confirmPassword",
    placeholder: "rewrite your password",
    type: "password",
    label: "Confirm Password",
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
