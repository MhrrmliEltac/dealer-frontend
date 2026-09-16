import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { sidebarNav, type NavItem } from "@/layout/Footer/data";
import { NavLink } from "react-router";
import { sidebarStore, useSidebarOpen } from "@/lib/sidebar-store";
import { Card, CardContent, CardHeader } from "./card";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  contactSchema,
  type ContactFormValues,
} from "@/validation/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
import { Textarea } from "./textarea";
import {
  PHONE_PREFIX,
  sanitizePhoneValue,
} from "@/lib/helper/sanitize-phone-value";
import { useCreateSuggestionMutation } from "@/queries";

const groupLabelClassName = "px-2 text-xs font-medium text-white/50";
const navListClassName = "flex flex-col gap-1";
const linkClassName =
  "rounded-md px-2 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white aria-[current=page]:bg-white/10 aria-[current=page]:text-white";

const AppSidebar = () => {
  const open = useSidebarOpen();
  const { control, handleSubmit, setValue, reset } = useForm<ContactFormValues>(
    {
      resolver: zodResolver(contactSchema),
      defaultValues: {
        fullname: "",
        phone_number: "",
        suggestion: "",
      },
    },
  );
  const mutate = useCreateSuggestionMutation();

  const handlePhoneFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setValue("phone_number", PHONE_PREFIX);
    }
  };

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    onChange(sanitizePhoneValue(event.target.value));
  };

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Backspace" && event.key !== "Delete") return;
    const { selectionStart, selectionEnd } = event.currentTarget;
    if (selectionStart === null || selectionEnd === null) return;

    const touchesPrefix =
      selectionStart < PHONE_PREFIX.length ||
      (event.key === "Backspace" &&
        selectionStart === PHONE_PREFIX.length &&
        selectionStart === selectionEnd);

    if (touchesPrefix) {
      event.preventDefault();
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    sidebarStore.setOpen(nextOpen);
    if (!nextOpen) {
      reset();
    }
  };

  const close = () => {
    handleOpenChange(false);
  };

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    mutate.mutate(data);
    mutate.isSuccess && reset();
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="flex flex-col gap-6 bg-black text-white"
      >
        <SheetHeader>
          <NavLink to="/" onClick={close} className="flex items-center gap-2">
            <img
              src="/cargo_auto_import.png"
              className="w-14 h-auto"
              alt="Cargo Auto Import"
            />
          </NavLink>
          <SheetTitle className="sr-only">Menyu</SheetTitle>
          <SheetDescription className="sr-only">
            Sayt naviqasiyası
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto px-4">
          <div className="flex flex-col gap-1">
            <span className={groupLabelClassName}>Naviqasiya</span>
            <nav className={navListClassName}>
              <NavLink to="/" end onClick={close} className={linkClassName}>
                Ana səhifə
              </NavLink>
              {sidebarNav.map((item: NavItem) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  onClick={close}
                  className={linkClassName}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>

          <Card>
            <CardHeader>
              <span className="text-[#FF6200] text-base">
                ÇƏTİNLİYİNİZ VAR?
              </span>
            </CardHeader>

            <CardContent>
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Controller
                    name="fullname"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>TAM ADINIZ</FieldLabel>
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
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>NÖMRƏNİZ</FieldLabel>
                        <Input
                          {...field}
                          onFocus={handlePhoneFocus}
                          onChange={(event) =>
                            handlePhoneChange(event, field.onChange)
                          }
                          onKeyDown={handlePhoneKeyDown}
                          id={field.name}
                          type="text"
                          aria-invalid={fieldState.invalid}
                          placeholder="Məs: 050 123 45 67"
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
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>QISA MESAJINIZ</FieldLabel>
                        <Textarea
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Məs: Mənim avtomobilim var..."
                          className="bg-black text-white rounded-[10px] border-none outline-none h-16.5 resize-none"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
                <Button
                  type="submit"
                  className="bg-[#FF6200] w-full mt-4 px-4 py-2 sm:px-7.25 sm:pt-2.25 sm:pb-3 rounded-[10px] sm:h-14.25"
                >
                  <span className="font-bold text-md  text-white">Göndər</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AppSidebar;
