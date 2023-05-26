import { useCallback, useEffect, useState } from "react";

export default function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const myCallback = useCallback(callback, [count]);
  function callback() {
    return count;
  }
  return (
    <div>
      <h1>useCallback</h1>
      <p>
        This hook is used to optimize a react app.
        <br />
        When a page is re-rendered the function callback is always created
        afresh, with changing reference to it, hence the useEffect in
        Mycomponent run at every rerender, but if we useCallback on the function
        then it only gets created/gets new reference when it;s dependency
        changes.
      </p>
      <h1>Example</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+count</button>
      <p>{`${toggle}`}</p>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <MyComponent callback={myCallback} />
    </div>
  );
}

function MyComponent({ callback }) {
  useEffect(() => {
    console.log("callback changed reference");
  }, [callback]);
  return <div>child component {callback()}</div>;
}
