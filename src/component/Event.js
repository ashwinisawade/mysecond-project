import React, { useEffect, useRef } from 'react';

function Event() {
  // Declare nameInpute at the component level using useRef
  const nameInpute = useRef(null);
  const nameInpute2 = useRef(null)
  const onClickhandle = () => {
    console.log("onClickhandle Event!");
  };

  const onMouseOver = () => {
    console.log("onMouseOver Event!");
  };

  const onFocus = () => {
    // Since nameInpute is declared at a higher scope, it's accessible here
    nameInpute.current.focus();
  };
console.log(nameInpute,'name',nameInpute2);
  useEffect(() => {
    // This useEffect hook runs once on component mount
    // and focuses the input element
    nameInpute.current.focus();
    nameInpute2.current.focus();
  }, []);

  return (
    <div>
      <h1>Event</h1>
      <button onClick={onClickhandle}> Click me</button>
      <button onMouseOver={onMouseOver}> onMouseOver button</button>
      <button onFocus={onFocus}> onFocus button</button>
      <input defaultValue={"won't focus!"} />
      <input ref={nameInpute} defaultValue={"will focus"} />
      <p ref={nameInpute2}></p>
    </div>
  );
}

export default Event;
