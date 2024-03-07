import React, { useState } from "react";
import {PureComponent} from "./PureComponent";
import RegularComponent from "./RegularComponent";
​
const ParentComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<{ firstName: string }>({
    firstName: "Yogesh"
  });
​
  console.log("*****Parent component is rendered*****");
​
  return (
    <>
      <p>Parent Component</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        count = {count}
      </button>
      <button
        onClick={() => {
          setName({ firstName: "YPD" });
        }}
      >
        change name
      </button>
      <RegularComponent name={name} />
      <PureComponent name={name} />
    </>
  );
};
do {
    ​
} while (condition);
export default ParentComponent;