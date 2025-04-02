import React, { useState, useEffect } from 'react';
import { fetchNumbers } from './services/api';
import NumberSelector from './components/NumberSelector';
import NumberDisplay from './components/NumberDisplay';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState('p');
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchNumbers(selectedType);
        
        if (data && !data.error) {
          setResponseData(data);
        } else {
          setError(data?.error || 'Failed to fetch data from server');
        }
      } catch (err) {
        setError(err.message || 'Network error. Is the backend running?');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedType]);

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <NumberSelector 
        selectedType={selectedType} 
        onTypeChange={setSelectedType} 
      />
      
      {isLoading && <div className="loading">Loading numbers...</div>}
      {error && (
        <div className="error">
          Error: {error}
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry
          </button>
        </div>
      )}
      {responseData && <NumberDisplay data={responseData} />}
    </div>
  );
}

export default App;