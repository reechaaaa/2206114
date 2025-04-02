const BASE_URL = 'http://localhost:9876';

export const fetchNumbers = async (numberType) => {
  try {
    const response = await fetch(`${BASE_URL}/numbers/${numberType}`, {
      timeout: 500 // Set timeout to match microservice requirement
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching numbers:', error);
    return null;
  }
};