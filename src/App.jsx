import "./App.css";
import UseCallbackComponent from "./hookComponents/UseCallbackComponent";
import UseImperativeHandleComponent from "./hookComponents/UseImperativeHandle";
import UseLayoutEffectComponent from "./hookComponents/UseLayoutEffectCompoenent";
import UseMemoComponent from "./hookComponents/UseMemoComponent";
import UseRefComponent from "./hookComponents/UseRefComponent";

function App() {
  return (
    <>
      {/* <UseRefComponent /> */}
      {/* <UseMemoComponent /> */}
      {/* <UseCallbackComponent /> */}
      {/* <UseImperativeHandleComponent /> */}
      <UseLayoutEffectComponent />
    </>
  );
}

export default App;
