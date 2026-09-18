import { carService } from "@/services/car.service";
import { useMutation } from "@tanstack/react-query";

export const CAR_KEY = ["cars"] as const;

export const useGetCarByVin = () =>
  useMutation({
    mutationKey: [...CAR_KEY],
    mutationFn: (vincode: string) => carService.getCarByVin(vincode),
  });
