import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef('');
  const [enteredName, setEnteredName] = useState('');

  const enteredInputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const enteredValue = nameInputRef.current.value;
    console.log(enteredName, enteredValue);

    // nameInputRef.current.value = ''; NOT IDEAL to Directly manipulate the DOM

    setEnteredName('');
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={enteredInputNameHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
