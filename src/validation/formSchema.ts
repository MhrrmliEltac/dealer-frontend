import * as z from "zod";

export const signUpSchema = z.object({
  fullname: z
    .string()
    .min(1, "Ad Soyad mütləqdir")
    .regex(
      /^[\p{L}\s]+$/u,
      "Ad Soyad yalnız hərflərdən ibarət olmalıdır, rəqəm və xüsusi simvol ola bilməz",
    ),
  phone_number: z.string().min(1, "Telefon nömrəsi mütləqdir"),
  email: z.email("Düzgün email formatı daxil edin (məsələn, user@example.com)"),
  password: z
    .string()
    .min(8, "Şifrə ən azı 8 simvoldan ibarət olmalıdır")
    .regex(/[A-Z]/, "Şifrədə ən azı bir böyük hərf olmalıdır")
    .regex(/[a-z]/, "Şifrədə ən azı bir kiçik hərf olmalıdır")
    .regex(/[0-9]/, "Şifrədə ən azı bir rəqəm olmalıdır"),
  monthly_volume: z
    .number("Aylıq həcm rəqəm olmalıdır")
    .int("Aylıq həcm tam ədəd olmalıdır"),
  suggestion: z.string().min(1, "Bu sahə mütləqdir"),
});

export const signInSchema = z.object({
  email: z.email("Düzgün email formatı daxil edin (məsələn, user@example.com)"),
  password: z
    .string()
    .min(8, "Şifrə ən azı 8 simvoldan ibarət olmalıdır")
    .regex(/[A-Z]/, "Şifrədə ən azı bir böyük hərf olmalıdır")
    .regex(/[a-z]/, "Şifrədə ən azı bir kiçik hərf olmalıdır")
    .regex(/[0-9]/, "Şifrədə ən azı bir rəqəm olmalıdır"),
  rememberMe: z.boolean().optional(),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
