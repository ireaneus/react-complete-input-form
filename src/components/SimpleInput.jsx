import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name is valid');
    }
  }, [enteredNameIsValid]);

  const enteredInputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredName, enteredValue);

    // nameInputRef.current.value = ''; NOT IDEAL to Directly manipulate the DOM

    setEnteredName('');
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputClasses = enteredNameIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={enteredInputNameHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
