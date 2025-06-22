"use client";
import * as z from "zod";
import { registerSchema } from "@/Schema/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { registerInputs } from "@/data/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormError from "./FormError";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import { signup } from "../../Action/signup";
function RegisterFunctionality() {
  const [TIAE, setTIAE] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const response = await signup(values);
      if (response?.err) {
        setTIAE(true);
        setSuccess(false);
        setLoginMessage(response.err);
      }
      if (response?.success) {
        setTIAE(false);
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {registerInputs.map((input, index) => (
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
        {TIAE && <FormError message="something is wrong" />}
        {success && <FormSuccess message="worked" />}
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Sign up
        </Button>
      </form>
    </Form>
  );
}
export default RegisterFunctionality;
