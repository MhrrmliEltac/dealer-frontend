import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { modalStore, useModalOpen } from "@/lib/modal-store";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

type FormType = { vinCode: string };

const Tracking = () => {
  const isModalOpen = useModalOpen();

  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      vinCode: "",
    },
  });

  const handleChange = (open: boolean) => {
    if (!open) {
      modalStore.setOpen(false);
    }
  };

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleChange}>
      <DialogContent className="flex flex-col gap-4 bg-[#1E1E1E] w-full sm:max-w-329.25">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={control}
              name="vinCode"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-[30px] text-[#FF6200] font-bold"
                  >
                    VIN Code
                  </FieldLabel>
                  <div className="flex items-center gap-5.5">
                    <Input
                      {...field}
                      id={field.name}
                      type="text"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter VIN code"
                      className="bg-black text-white rounded-[10px] border-none outline-none h-16.5"
                    />
                    <Button
                      type="submit"
                      className="h-16.5 shrink-0 rounded-[20px] border border-[#FFC098] bg-[#FF6200] px-8 text-white shadow-[0px_0px_13.3px_0px_#FF6200] hover:bg-[#FF6200]"
                    >
                      Axtar
                    </Button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Tracking;
