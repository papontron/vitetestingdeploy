import { useReducer, useState } from "react";
function reducer(state=0,action:{type:string,payload:number}) {
  const { type, payload } = action;
  switch (type) {
    case "set":
      return payload;
    case "increase":
      return state + payload;
    case "decrease":
      return state - payload;
    case "reset":
      return 0;
    default:
      return state;
  }
}
function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({type:"decrease",payload:step});
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({type:"increase",payload:step});
  };

  const defineCount = function (e:React.ChangeEvent<HTMLInputElement>) {
    dispatch({type:"set",payload:Number(e.target.value)})
  };

  const defineStep = function (e:React.ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type:"reset",payload:1})
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={(e)=>defineCount(e)} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
