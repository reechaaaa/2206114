import React from 'react';

const NumberSelector = ({ selectedType, onTypeChange }) => {
  const numberTypes = [
    { id: 'p', name: 'Prime' },
    { id: 'f', name: 'Fibonacci' },
    { id: 'e', name: 'Even' },
    { id: 'r', name: 'Random' }
  ];

  return (
    <div className="number-selector">
      <h3>Select Number Type:</h3>
      <div className="type-buttons">
        {numberTypes.map((type) => (
          <button
            key={type.id}
            className={selectedType === type.id ? 'active' : ''}
            onClick={() => onTypeChange(type.id)}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberSelector;