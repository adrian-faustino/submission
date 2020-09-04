import { useState, useEffect } from "react";

const useLocalStorage = (storageKey: string) => {
  const [value, setValue] = useState(localStorage.getItem(storageKey) || "");

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
