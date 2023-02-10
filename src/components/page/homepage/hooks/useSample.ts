import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export const useSample = (): [number, Dispatch<SetStateAction<number>>] => {
  const [value, setValue] = useState(0);

  /**
   * EVENT: On component mount
   */
  useEffect(() => {
    console.log("Component mounted");
    setValue(0);

    /**
     * EVENT: On component unmount
     */
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  /**
   * EVENT: On `value` change
   */
  useEffect(() => {
    console.log("Value has changed", value);
  }, [value]);

  return [value, setValue];
};
