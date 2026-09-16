import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { signInSchema, type SignInFormValues } from "@/validation";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { useSignInMutation } from "@/queries";

const LoginPage = () => {
  const mutate = useSignInMutation();
  const { control, handleSubmit, reset } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    mutate.mutate(data);
    reset(
      {
        email: "",
        password: "",
        rememberMe: false,
      },
      {
        keepErrors: true,
      },
    );
  };

  return (
    <section className="flex justify-center items-center w-full flex-1">
      <Card className="max-w-119.75 w-full bg-[#1E1E1E] rounded-[20px]! pt-13 gap-10">
        <CardHeader className="text-[#FF6200] font-bold text-[60px] text-center">
          LOGIN
        </CardHeader>
        <CardContent>
          <form
            id="login-form"
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-82.75 mx-auto"
          >
            <FieldGroup className="gap-5.25">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-2.75">
                    <FieldLabel
                      htmlFor="email"
                      className="text-[#9F9F9F] font-bold text-[15px] pl-3.5"
                    >
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Ex: ali.aliyev@gmail.com"
                      className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="password"
                      className="text-[#9F9F9F] font-bold text-[15px] pl-3.5"
                    >
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="password"
                      aria-invalid={fieldState.invalid}
                      className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <Field orientation="horizontal" className="gap-2.5 pl-3.5">
                    <Checkbox
                      id={field.name}
                      checked={!!field.value}
                      onCheckedChange={(checked) => field.onChange(!!checked)}
                    />
                    <FieldLabel
                      htmlFor={field.name}
                      className="text-[#9F9F9F] font-bold text-[15px]"
                    >
                      Remember me
                    </FieldLabel>
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="bg-transparent border-none flex flex-col justify-center items-center gap-5 mb-7 max-w-82.75 mx-auto">
          <Button
            type="submit"
            form="login-form"
            className="bg-[#FF6200] h-14.25 w-82.75"
          >
            <span className="text-3xl font-bold">Login</span>
          </Button>
          <div className="flex gap-1">
            <span className="text-[15px] font-bold text-[#9F9F9F]">
              Don't have account?
            </span>
            <NavLink to="/auth/register">
              <span className="text-[15px] font-bold text-[#FF6200]">
                Register
              </span>
            </NavLink>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
