const BASE_URL = 'http://localhost:9876/number/e';

export const fetchNumbers = async (numberType) => {
  try {
    const response = await fetch(`${BASE_URL}/numbers/${numberType}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching numbers:', error);
    return null;
  }
};