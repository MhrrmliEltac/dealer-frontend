import { isAxiosError } from "axios"

interface ApiErrorResponse {
  detail?: string
}

export function getApiErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again."
) {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.detail ?? fallback
  }
  return fallback
}
