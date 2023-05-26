import { useEffect, useLayoutEffect, useState } from "react";

export default function UseLayoutEffectComponent() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log("use effect ran");
  });

  useLayoutEffect(() => {
    console.log("use layout effect ran");
  });
  return (
    <div>
      <h1>useLayoutEffect</h1>
      <p>
        It works similar to useEffect, the similarity being that both run after
        the render but useLayoutEffect always run before useEffect.
      </p>
      <h1>Example</h1>
      <p>{`
      ${toggle}`}</p>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
    </div>
  );
}
