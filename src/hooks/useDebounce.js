import { useEffect } from "react";


export const useDebounce = (value, setter, milliSeconds) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      setter(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [milliSeconds, setter, value]);
};
