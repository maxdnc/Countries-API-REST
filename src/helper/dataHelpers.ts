// type
import { CurrenciesType, NativeNameType } from "@/types";

export const getNativeName = (obj: NativeNameType = {}): string | null => {
  const key = Object.keys(obj)[0];
  if (!key) return null;
  return obj[key].common;
};

export const getCurrencies = (obj: CurrenciesType = {}): string[] | null => {
  const arr: string[] = [];
  const keys = Object.keys(obj);
  if (!keys.length) return null;
  for (const item of keys) {
    arr.push(obj[item].name);
  }
  return arr;
};
