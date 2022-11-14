import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAsyncStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((value) => {
        if (value === null) return initialValue;
        return value;
      })
      .then(setStoredValue);
  }, [key, initialValue]);

  const setValue = (valueToStore: string) => {
    setStoredValue(valueToStore);
    AsyncStorage.setItem(key, valueToStore);
  };

  return [storedValue, setValue];
}
