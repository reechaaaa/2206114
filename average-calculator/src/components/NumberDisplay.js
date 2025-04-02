import React from 'react';

const NumberDisplay = ({ data }) => {
  if (!data) {
    return <div className="number-display">No data available</div>;
  }

  return (
    <div className="number-display">
      <div className="window-section">
        <h4>Previous Window State:</h4>
        <p>[{data.windowPrevState.join(', ')}]</p>
      </div>
      <div className="window-section">
        <h4>Current Window State:</h4>
        <p>[{data.windowCurrState.join(', ')}]</p>
      </div>
      <div className="window-section">
        <h4>Numbers Received:</h4>
        <p>[{data.numbers.join(', ')}]</p>
      </div>
      <div className="average-section">
        <h4>Average:</h4>
        <p>{data.avg.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default NumberDisplay;