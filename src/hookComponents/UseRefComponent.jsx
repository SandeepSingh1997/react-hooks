import { useRef, useState } from "react";

export default function UseRefComponent() {
  const [rerender, setRerender] = useState(false);
  const inputRef = useRef(null);
  const countRef = useRef(0);
  return (
    <div>
      <h1>useRef</h1>
      <p>
        This hook is used to provide References to values that persist between
        re-renders. <br /> It is also used to provide reference to the dom
        properties of an html node without using document object.
      </p>
      <h1>Examples</h1>
      <p>
        <b>
          1.
          <u>Value persistance</u>
        </b>{" "}
        : The count is a ref to a count variable, which is persisted between
        re-renders, clicking +count will update the value, so when you re-render
        it's updated value is shown in the UI
      </p>
      <p>{countRef.current}</p>
      <button
        onClick={() => {
          countRef.current += 1;
        }}
      >
        +count
      </button>
      <button
        onClick={() => {
          setRerender(!rerender);
        }}
      >
        re-render
      </button>
      <p>
        <b>
          2. <u>Dom node ref</u>
        </b>
        : keeping a reference to a DOM node
      </p>
      <input placeholder="Enter text" ref={inputRef} />
      <button
        onClick={() => {
          //using the inputRef to focus the input by manipulating
          //the input's properties using the ref
          inputRef.current.focus();
          inputRef.current.value = "This was added using ref";
        }}
      >
        click to focus input
      </button>
    </div>
  );
}
