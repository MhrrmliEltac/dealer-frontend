import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { signUpSchema, type SignUpFormValues } from "@/validation";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { useSignUpMutation } from "@/queries";

const RegisterPage = () => {
  const mutate = useSignUpMutation();
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullname: "",
      phone_number: "",
      email: "",
      password: "",
      monthly_volume: undefined,
      suggestion: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    try {
      const res = mutate.mutate(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex justify-center items-center w-full flex-1 py-10">
      <Card className="max-w-158.5 w-full bg-[#1E1E1E] rounded-[20px]! pt-13 gap-10">
        <CardHeader className="text-[#FF6200] font-bold text-[60px] text-center">
          REGISTRATION
        </CardHeader>
        <CardContent>
          <form
            id="register-form"
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-140.5 mx-auto"
          >
            <FieldGroup className="gap-5.25">
              <div className="grid grid-cols-2 gap-5">
                <Controller
                  name="fullname"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="gap-2.75"
                    >
                      <FieldLabel
                        htmlFor="fullname"
                        className="text-[#9F9F9F] font-bold text-[15px] pl-3.5"
                      >
                        Full name
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="text"
                        aria-invalid={fieldState.invalid}
                        placeholder="Məs: Əli Əliyev"
                        className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="phone_number"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="gap-2.75"
                    >
                      <FieldLabel
                        htmlFor="phone_number"
                        className="text-[#9F9F9F] font-bold text-[15px] pl-3.5"
                      >
                        Phone Number
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="tel"
                        aria-invalid={fieldState.invalid}
                        placeholder="+994"
                        className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="gap-2.75"
                    >
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
                        placeholder="Məs: ali.aliyev@gmail.com"
                        className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="monthly_volume"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="gap-2.75"
                    >
                      <FieldLabel
                        htmlFor="monthly_volume"
                        className="text-[#9F9F9F] font-bold text-[15px] pl-3.5"
                      >
                        Monthly Volume
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        ref={field.ref}
                        onBlur={field.onBlur}
                        type="number"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === ""
                              ? undefined
                              : Number(e.target.value),
                          )
                        }
                        aria-invalid={fieldState.invalid}
                        placeholder="...."
                        className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-2.75">
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
                name="suggestion"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-2.75">
                    <FieldLabel
                      htmlFor="suggestion"
                      className="text-[#9F9F9F] font-bold text-[15px] pl-3.5"
                    >
                      Additional Suggestions and Questions
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Note..."
                      className="bg-black text-white rounded-[10px] border-none outline-none min-h-32.5 resize-none"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="bg-transparent border-none flex flex-col justify-center items-center gap-5 mb-7 max-w-140.5 mx-auto">
          <Button
            type="submit"
            form="register-form"
            className="bg-[#FF6200] h-14.25 w-140.5"
          >
            <span className="text-3xl font-bold">Register</span>
          </Button>
          <div className="flex gap-1">
            <span className="text-[15px] font-bold text-[#9F9F9F]">
              Already have an account?
            </span>
            <NavLink to="/auth/login">
              <span className="text-[15px] font-bold text-[#FF6200]">
                Login
              </span>
            </NavLink>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default RegisterPage;
