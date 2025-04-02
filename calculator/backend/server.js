const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;

app.use(cors());
app.use(express.json());

// Store for each number type
const numberStores = {
  p: { numbers: [], sum: 0 },
  f: { numbers: [], sum: 0 },
  e: { numbers: [], sum: 0 },
  r: { numbers: [], sum: 0 }
};

const THIRD_PARTY_API = {
  p: 'http://20.244.56.144/evaluation-service/primes',
  f: 'http://20.244.56.144/evaluation-service/fibo',
  e: 'http://20.244.56.144/evaluation-service/even',
  r: 'http://20.244.56.144/evaluation-service/rand'
};

async function fetchNumbers(type) {
  try {
    const response = await axios.get(THIRD_PARTY_API[type], { timeout: 500 });
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching ${type} numbers:`, error.message);
    return [];
  }
}

function updateWindow(store, newNumbers) {
  const uniqueNewNumbers = [...new Set(newNumbers)]; // Remove duplicates
  const prevState = [...store.numbers];
  
  for (const num of uniqueNewNumbers) {
    if (store.numbers.length >= WINDOW_SIZE) {
      const removed = store.numbers.shift();
      store.sum -= removed;
    }
    store.numbers.push(num);
    store.sum += num;
  }
  
  return prevState;
}

app.get('/numbers/:type', async (req, res) => {
  const type = req.params.type;
  
  if (!['p', 'f', 'e', 'r'].includes(type)) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  const store = numberStores[type];
  const newNumbers = await fetchNumbers(type);
  
  if (newNumbers.length === 0) {
    return res.status(503).json({ error: 'Failed to fetch numbers from third-party service' });
  }

  const windowPrevState = updateWindow(store, newNumbers);
  const avg = store.numbers.length > 0 ? (store.sum / store.numbers.length).toFixed(2) : 0;

  res.json({
    windowPrevState,
    windowCurrState: store.numbers,
    numbers: newNumbers,
    avg: parseFloat(avg)
  });
});

app.listen(PORT, () => {
  console.log(`Average Calculator Service running on http://localhost:${PORT}`);
});