import { useState } from "react";
/**
 *
 * @param {*} initialValue
 * @param {*} validator
 */

const useInput = (initialValue, validator) => {
  /**
   * Input을 담당하는 함수
   *
   */
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
