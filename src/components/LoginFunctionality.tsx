"use client";
import * as z from "zod";
import { loginSchema } from "@/Schema/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { logInInputs } from "@/data/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormError from "./FormError";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import { login } from "../../Action/login";
import Link from "next/link";
function LoginFunctionality() {
  const [TIAE, setTIAE] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const response = await login(values);
    console.log(response);
    if (response?.err) {
      setTIAE(true);
      setSuccess(false);
      setLoginMessage(response.err);
    } else if (response?.err || response?.error) {
      setTIAE(false);
      setSuccess(true);
    } else if (response?.twoFactor) {
      setShowTwoFactor(true);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {showTwoFactor ? (
            <div>
              <FormField
                key={7895487}
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>2FA</FormLabel>
                    <Input
                      disabled={form.formState.isSubmitting}
                      {...field}
                      placeholder="write the code"
                      type="text"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ) : (
            <>
              {logInInputs.map((input, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={input.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{input.label}</FormLabel>
                      <Input
                        disabled={form.formState.isSubmitting}
                        {...field}
                        placeholder={input.placeholder}
                        type={input.type}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button variant="link" size="sm" className="px-0" asChild>
                <Link href="/auth/reset">Forget password?</Link>
              </Button>
            </>
          )}
        </div>
        {TIAE && <FormError message={loginMessage} />}
        {success && <FormSuccess message="You signed in" />}
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
export default LoginFunctionality;
