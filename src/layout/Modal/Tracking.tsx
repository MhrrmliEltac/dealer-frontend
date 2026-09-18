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
import { useGetCarByVin } from "@/queries/car.queries";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

type FormType = {
  vinCode: string;
};

const Tracking = () => {
  const isModalOpen = useModalOpen();

  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      vinCode: "",
    },
  });

  const { mutate, data: car, isPending, isError } = useGetCarByVin();

  const handleChange = (open: boolean) => {
    if (!open) {
      modalStore.setOpen(false);
    }
  };

  const onSubmit: SubmitHandler<FormType> = ({ vinCode }) => {
    mutate(vinCode.trim().toUpperCase());
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleChange}>
      <DialogContent
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-white/8
          bg-[#111111]
          p-0
          text-white
          shadow-[0_30px_100px_rgba(0,0,0,0.65)]
        "
      >
        {/* Top accent */}
        <div className="h-0.75 w-full bg-linear-to-r from-[#FF6200] via-[#FF8A42] to-transparent" />

        {/* Header */}
        <div className="relative px-7 pb-6 pt-7">
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#FF6200]/8
              blur-[80px]
            "
          />

          <div className="relative flex items-center gap-4">
            {/* Icon */}
            <div
              className="
                flex
                h-14.5
                w-14.5
                shrink-0
                items-center
                justify-center
                rounded-[18px]
                border
                border-[#FF6200]/20
                bg-[#FF6200]/10
                shadow-[inset_0_0_20px_rgba(255,98,0,0.05)]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-[#FF6200]"
              >
                <path d="M5 17h14" />
                <path d="M6 17V9.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V17" />
                <path d="M4 17h16l1 2v1H3v-1l1-2Z" />
                <circle cx="7" cy="17" r="1.5" />
                <circle cx="17" cy="17" r="1.5" />
              </svg>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold tracking-[-0.02em]">
                Vehicle Tracking
              </h2>

              <p className="mt-1 text-[14px] text-white/40">
                Search vehicle information using its VIN number.
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="border-y border-white/6 bg-white/1.5 px-7 py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                control={control}
                name="vinCode"
                rules={{
                  required: "VIN code is required",
                  minLength: {
                    value: 17,
                    message: "VIN code must be 17 characters",
                  },
                  maxLength: {
                    value: 17,
                    message: "VIN code must be 17 characters",
                  },
                  pattern: {
                    value: /^[A-HJ-NPR-Z0-9]{17}$/i,
                    message: "Invalid VIN code",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="mb-3 flex items-center justify-between">
                      <FieldLabel
                        htmlFor={field.name}
                        className="text-[13px] font-medium text-white/70"
                      >
                        VIN Code
                      </FieldLabel>

                      <span
                        className={`
                          font-mono
                          text-[11px]
                          ${
                            field.value.length === 17
                              ? "text-[#FF6200]"
                              : "text-white/25"
                          }
                        `}
                      >
                        {field.value.length}/17
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <div className="relative min-w-0 flex-1">
                        <Input
                          {...field}
                          id={field.name}
                          type="text"
                          maxLength={17}
                          autoComplete="off"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter 17-character VIN"
                          className="
                            h-14.5
                            rounded-[16px]
                            border
                            border-white/8
                            bg-black/40
                            px-4
                            font-mono
                            text-[14px]
                            uppercase
                            tracking-[0.12em]
                            text-white
                            placeholder:font-sans
                            placeholder:tracking-normal
                            placeholder:text-white/20
                            transition-all
                            focus-visible:border-[#FF6200]/60
                            focus-visible:ring-4
                            focus-visible:ring-[#FF6200]/10
                          "
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="
                          h-14.5
                          min-w-26.25
                          shrink-0
                          rounded-[16px]
                          bg-[#FF6200]
                          px-5
                          font-semibold
                          text-white
                          shadow-[0_8px_25px_rgba(255,98,0,0.18)]
                          transition-all
                          hover:bg-[#ff7020]
                          hover:shadow-[0_8px_30px_rgba(255,98,0,0.28)]
                          active:scale-[0.98]
                          disabled:cursor-not-allowed
                          disabled:opacity-50
                        "
                      >
                        {isPending ? (
                          <span className="flex items-center gap-2">
                            <span
                              className="
                                h-4
                                w-4
                                animate-spin
                                rounded-full
                                border-2
                                border-white/30
                                border-t-white
                              "
                            />
                            Axtarılır
                          </span>
                        ) : (
                          "Axtar"
                        )}
                      </Button>
                    </div>

                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="mt-2 text-xs"
                      />
                    )}

                    {!fieldState.invalid && (
                      <p className="mt-2 text-[11px] text-white/25">
                        VIN must contain exactly 17 characters.
                      </p>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </div>

        {/* Result */}
        {(car || isError) && (
          <div className="px-7 py-6">
            {car && (
              <div
                className="
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/[0.07]
                  bg-[#181818]
                "
              >
                {/* Result Header */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/6
                    px-5
                    py-4
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#FF6200]/10
                        text-[#FF6200]
                      "
                    >
                      ✓
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-white/30">
                        Vehicle Found
                      </p>

                      <h3 className="mt-0.5 text-[17px] font-semibold">
                        {car.data.name}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-emerald-400
                    "
                  >
                    Active
                  </span>
                </div>

                {/* Result Details */}
                <div className="grid grid-cols-1 divide-y divide-white/6 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
                      VIN Code
                    </p>

                    <p className="mt-2 break-all font-mono text-[13px] tracking-wider text-[#FF6200]">
                      {car.data.vincode}
                    </p>
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
                      Description
                    </p>

                    <p className="mt-2 text-[13px] leading-5 text-white/60">
                      {car.data.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {isError && (
              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-[20px]
                  border
                  border-red-500/15
                  bg-red-500/4
                  p-5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-500/10
                    text-lg
                    font-semibold
                    text-red-400
                  "
                >
                  !
                </div>

                <div>
                  <p className="text-[14px] font-medium text-red-400">
                    Vehicle not found
                  </p>

                  <p className="mt-1 text-[12px] text-white/35">
                    No vehicle was found with the provided VIN code.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {!car && !isError && (
          <div className="px-7 pb-7 pt-2">
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-[20px]
                border
                border-dashed
                border-white/[0.07]
                py-9
              "
            >
              <div className="mb-3 text-2xl opacity-30">⌕</div>

              <p className="text-[13px] text-white/35">
                Enter a VIN code to search
              </p>

              <p className="mt-1 text-[11px] text-white/20">
                Vehicle information will appear here
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Tracking;
