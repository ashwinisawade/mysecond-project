
 import React, { useEffect, useState } from 'react';


function MountComponent() {
  let [ana, setAna] = useState(1);
  let [neha, setNeha] = useState(2);
  let [showNeha, setShowNeha] = useState(false);

  useEffect(() => {
    // Add your condition here if needed
    // For example, display neha after ana reaches a certain value
    if (ana >= 0 && showNeha) {
      setNeha("Changed Neha");
    }
  }, [ana, showNeha]);

  return (
    <div>
      <p>ana: {ana}</p>
      {showNeha && <p>neha: {neha}</p>}
      <button onClick={() => {
        setAna(4);
        setShowNeha(true);
      }}>
        Click me
      </button>
    </div>
  );
}

export default MountComponent;
