import { Toast } from "@base-ui/react/toast"

import { getApiErrorMessage } from "@/lib/api-error"

export const toastManager = Toast.createToastManager()

export function toastError(error: unknown, title = "Error") {
  toastManager.add({
    type: "error",
    title,
    description: getApiErrorMessage(error),
  })
}

export function toastSuccess(description: string, title = "Success") {
  toastManager.add({
    type: "success",
    title,
    description,
  })
}
