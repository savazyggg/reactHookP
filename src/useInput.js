import { useEffect, useState } from "react";
import React from "react";

const UseInput = (init, vali) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    let willUpdate = true;
    if (typeof vali === "function") {
      willUpdate = vali(value);
    }
    if (willUpdate) {
      setValue(e.target.value);
    }
  };
  return { value, onChange };
};

export default UseInput;
