* Average Calculator Microservice

A full-stack application that retrieves various kinds of numbers from a third-party API, holds a sliding window over the latest numbers, and computes their average.

 * Overview

This microservice offers an easy-to-use interface to retrieve and show several number sequences (Prime, Fibonacci, Even, and Random) from a third-party API. The application stores a sliding window of the last numbers for every sequence type and computes their mean.

 * Features

- Choose among various number types: Prime, Fibonacci, Even, and Random
- Retrieves numbers from a third-party API
- Holds a sliding window of the latest numbers (max size: 10)
- Shows previous and current window states
- Indicates newly received numbers
- Computes and shows the average of numbers in the current window
- Error handling for API errors

 * Frontend (React)

- App.js**: Root component that holds application state and API calls
- NumberSelector.js**: Component for choosing number types
- NumberDisplay.js: Component for showing window states and calculation results
- api.js: Backend communication service

* Backend (Node.js/Express)

- Express server listening on port 9876
- Route `/numbers/:type` to retrieve and process various types of numbers
- Sliding window implementation per number type
- Third-party API communication to retrieve number sequences

 * API Integration

The app integrates with the following third-party APIs:

- Prime numbers: `http://20.244.56.144/evaluation-service/primes`
- Fibonacci numbers: `http://20.244.56.144/evaluation-service/fibo`
- Even numbers: `http://20.244.56.144/evaluation-service/even`
- Random numbers: `http://20.244.56.144/evaluation-service/rand`

* Installation

Prerequisites

- Node.js (v12 or higher)
- npm 

Backend Setup

1. Go to the backend directory
2. Install dependencies:npm install
3. Run the server:node server.js


Frontend Setup

1. Go to the frontend directory
2. Install dependencies:npm install
3. Run the development server:npm start

Usage

1. Click on a browser and go to `http://localhost:3000`
2. Choose a type of number (Prime, Fibonacci, Even, or Random)
3. The app will pull numbers from the third-party API
4. See the previous window state, current window state, new numbers received, and average of new numbers

-Implementation Details

   *Sliding Window
    The server has a sliding window of maximum length 10 for every type of number. When new numbers arrive:
    1. Duplicates are eliminated from incoming numbers
    2. If the window is full, the oldest number is discarded
    3. New numbers are inserted into the window
    4. The sum is updated correspondingly