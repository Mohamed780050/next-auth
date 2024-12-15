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
function LoginFunctionality() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
        <div className="space-y-4">
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
        </div>
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
