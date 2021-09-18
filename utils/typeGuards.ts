import { AxiosError } from 'axios';

export function isAxiosErrorMessage(e: unknown): e is AxiosError<{ message: string }> {
  return (e as AxiosError<{ message: string }>)?.response?.data?.message !== undefined;
}

interface CostumeError {
  status: number;
  message: string;
}

export function isCostumeError(e: unknown): e is CostumeError {
  return Boolean((e as CostumeError)?.message && (e as CostumeError)?.status);
}
