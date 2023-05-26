import { forwardRef, useState, useRef, useImperativeHandle } from "react";

export default function UseImperativeHandleComponent() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>useImperativeHandle</h1>
      <p>
        It works similar to referencing elements, not the usual dom elements but
        react Components.
        <br />
        In the below example I want to be able to change the state of 'child'
        from 'parent', by mutating ref of the 'child' to parent.
      </p>
      <h1>Example</h1>
      <h2>Parent</h2>
      <button
        onClick={() => {
          buttonRef.current.incrementCount();
        }}
      >
        +count from parent
      </button>
      <Child ref={buttonRef} />
    </div>
  );
}

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    incrementCount,
  }));

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Child</h2>
      <p>count state of child: {count}</p>
    </div>
  );
});
