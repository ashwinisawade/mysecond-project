import React, { useState } from 'react';

function ProgressBar() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Function to calculate the color based on the slider value
  const calculateColor = () => {
    // Example: Change color based on the slider value
    if (sliderValue < 50) {
      return 'blue';
    } else {
      return 'green';
    }
  };

  return (
    <div>
      <p>Value: {sliderValue}</p>

      {/* Change color based on the slider value */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        style={{ background: `linear-gradient(to right, red ${sliderValue}%, #ddd ${sliderValue}%)` }}
      />
    </div>
  );
}

export default ProgressBar

// import React, { useState } from 'react';

// function ProgressBar() {
//   const [progress, setProgress] = useState(0);

//   const getColor = () => {
//     if (progress >= 0 && progress < 30) {
//       return 'red';
//     } else if (progress >= 30 && progress < 70) {
//       return 'yellow';
//     } else {
//       return 'green';
//     }
//   };

//   return (
//     <div className="Progressbar">
//       <input 
//         type="range" 
//         min="0" 
//         max="100" 
//         value={progress} 
//         onChange={(e) => setProgress(e.target.value)}
//         style={{
//           width: '100%',
//           height: '20px',
//           background: `linear-gradient(to right, ${getColor()} 0%, ${getColor()} ${progress}%, white ${progress}%, white 100%)`,
//           border: '1px solid #ccc',
//           borderRadius: '2px',
//           outline: 'none',
//           cursor: 'pointer'
//         }}
//       />
//       <h1>{progress}%</h1>
//     </div>
//   );
// }

// export default ProgressBar;

// import React, { useState } from 'react';

// function ProgressBars() {
//   const [progress, setProgress] = useState(0);

//   const getColor = () => {
//     if (progress >= 0 && progress < 30) {
//       return 'red';
//     } else if (progress >= 30 && progress < 70) {
//       return 'yellow';
//     } else {
//       return 'green';
//     }
//   };

//   const getProgressStyle = () => ({
//     width: `${progress}%`,
//     height: '20px',
//     backgroundColor: progress < 30 ? 'red' : progress < 70 ? 'yellow' : 'green',
//     border: '1px solid #ccc',
//   });


//   return (
//     <div>
//       <div style={getProgressStyle()}></div>
//       <input 
//         type="range" 
//         min="0" 
//         max="100" 
//         value={progress} 
//         onChange={(e) => {setProgress(parseInt(e.target.value))}}
//         style={
//             getProgressStyle() 
//         }
//       />
//       <h1>{progress}%</h1>
//     </div>
//   );
// }

// export default ProgressBars;
