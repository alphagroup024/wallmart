import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";

const loginSchema = z.object({
  userName: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

interface LoginFormProps {
  onSubmitForm: (data: z.infer<typeof loginSchema>) => void;
  error: string | null;
}

export default function LoginForm({ onSubmitForm, error }: LoginFormProps) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
    onSubmitForm(data);
  };

  return (
    <div className="p-8 border-2 border-gray-300 rounded-lg w-100">
      <h1 className="text-2xl font-bold text-on-background">Login</h1>
      <Separator className="my-4 bg-on-background opacity-50 h-px" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="group space-y-8 text-on-background mt-5"
        >
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type="password"
                    className="text-on-background group-focus-within:text-on-background"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-2">
            <Button
              type="submit"
              className="bg-primary-container text-on-primary-container px-8 py-4"
            >
              Submit
            </Button>
            {error && <p className="text-error">{error}</p>}
          </div>
        </form>
      </Form>
    </div>
  );
}
