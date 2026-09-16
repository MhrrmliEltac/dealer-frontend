import * as z from "zod";

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(1, "Tam ad mütləqdir")
    .regex(
      /^[\p{L}\s]+$/u,
      "Tam ad yalnız hərflərdən ibarət olmalıdır, rəqəm və xüsusi simvol ola bilməz",
    ),
  phone_number: z.string().min(1, "Telefon nömrəsi mütləqdir"),
  suggestion: z.string().min(1, "Bu sahə mütləqdir"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
