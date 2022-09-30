import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [IsTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && IsTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
