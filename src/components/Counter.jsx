import { useState } from "react";

import { customHook } from "../utils/customHook";

function Counter() {
  //   const [res, setRes] = customHook();
  //   console.log("res", res);
  //   console.log(setRes());
  let number = 0;

  const [state, setState] = useState(0);
  const [myName, setMyName] = useState("Abduvoxid");

  const increment = () => {
    setState((prev) => prev + 1);
  };

  const decrement = () => {
    sayHello();
    setState((prev) => {
      return prev - 1;
    });
  };

  const sayHello = () => {
    console.log("Hello world");
  };

  return (
    <div>
      <h2 className="text-center ">{state}</h2>
      <p className="text-center">{myName}</p>

      <div className="flex justify-center gap-3 mt-3">
        <button
          onClick={increment}
          className="bg-[#090909] text-[white] rounded p-3"
        >
          increment
        </button>
        <button
          onClick={decrement}
          className="bg-[#090909] text-[white] rounded p-3"
        >
          decrement
        </button>
        <button
          className="border p-3 rounded"
          onClick={() => {
            setMyName("Akmal");
          }}
        >
          Change my name
        </button>
      </div>
    </div>
  );
}
export default Counter;
