"use client";
import * as z from "zod";
import { resetPasswordSchema } from "@/Schema/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { passwordInputsReset } from "@/data/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormError from "./FormError";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import CardWrapper from "./CardWrapper";
function ResetPasswordForm() {
  const [TIAE, setTIAE] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    // const response = await resetPassword(values);
    // if (response?.err) {
    //   setTIAE(true);
    //   setSuccess(false);
    //   setLoginMessage(response.err);
    // } else {
    //   setTIAE(false);
    //   setSuccess(true);
    // }
    console.log(values);
  }
  return (
    <CardWrapper
      headerLabel="confirming your Email"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      showSocial={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {passwordInputsReset.map((input, index) => (
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
          </div>
          {TIAE && <FormError message={loginMessage} />}
          {success && <FormSuccess message="You signed in" />}
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
export default ResetPasswordForm;
