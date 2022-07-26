import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useBoolean from "../components/hooks/useBoolean";
import useCopyToClipboard from "../components/hooks/useCopyToClipboard";
import useCount from "../components/hooks/useCount";

const UseHooks = () => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  const [copyValue, copy] = useCopyToClipboard();
  const { count, setCount, increment, decrement } = useCount(0);

  return (
    <div className="container-fluid mt-4 d-flex flex-column">
      <h3>useCount</h3>
      <div className="m-2">count is: {count}</div>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={increment}
        >
          increment
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={decrement}
        >
          decrement
        </button>
      </div>
      <h3>useCopyToClipboard</h3>
      <div className="m-2">
        Copied value <code>{copyValue ?? "no value copied yet!"}</code>
      </div>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => copy("A")}
        >
          copy A
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => copy("B")}
        >
          copy B
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => copy("")}
        >
          reset
        </button>
      </div>
      <h3>useBoolean</h3>
      <div className="m-2">
        Value is <code>{value.toString()}</code>
      </div>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={setTrue}
        >
          set true
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={setFalse}
        >
          set false
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={toggle}>
          toggle
        </button>
      </div>
    </div>
  );
};

export default UseHooks;
