import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredInputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameIsTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={enteredInputNameHandler}
          onBlur={enteredInputBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameInputIsValid && (
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
