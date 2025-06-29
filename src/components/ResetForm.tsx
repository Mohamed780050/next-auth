"use client";
import * as z from "zod";
import { resetSchema } from "@/Schema/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { resetInputs } from "@/data/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormError from "./FormError";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import { resetPassword } from "../../Action/reset";
function ResetForm() {
  const [TIAE, setTIAE] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });
  async function onSubmit(values: z.infer<typeof resetSchema>) {
    const response = await resetPassword(values);
    if (response?.err) {
      setTIAE(true);
      setSuccess(false);
      setLoginMessage(response.err);
    } else {
      setTIAE(false);
      setSuccess(true);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {resetInputs.map((input, index) => (
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
  );
}
export default ResetForm;
