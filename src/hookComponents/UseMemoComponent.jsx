import { useMemo, useState } from "react";
export default function UseMemoComponent() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  const heavyValue = useMemo(heavyFunction, [count]);

  function heavyFunction(count) {
    for (let i = 0; i < 10000000; i++) {}
    console.log("HEAVY FUNCTION RAN");
    return count;
  }

  return (
    <div>
      <h1>useMemo</h1>
      <p>
        This hook is used to optimize a react app.
        <br />
        When a page is re-rendered, there might be some heavy task that is done
        on every rerender, whose output actually does not depend on the state
        variable whose change caused the re-render.
        <br /> Even though the output of that function stays the same it will
        run again causing performance issues, so to stop this, we execute the
        function again, only when the value on which the heavy function is
        dependent is changes.
        <br />
        <u>
          (Watch the console - only updating count will call the heavyFunction
          to be executed, not toggle)
        </u>
      </p>
      <h1>Example</h1>
      <p>{`${toggle}`}</p>
      <button onClick={() => setToggle(!toggle)}>toggle</button>

      <p>{`${count}`}</p>
      <button onClick={() => setCount(count + 1)}>+count</button>
    </div>
  );
}
