* Average Calculator Microservice

A full-stack application for fetching different types of numbers from a third-party API, maintaining a sliding window of the most recent numbers, and calculating their average.

* output Screenshot

![Average Calculator Microservice Screenshot](./image.png)

* Features

- Selection between different number types: Prime, Fibonacci, Even, and Random
- Fetches numbers from a third-party API
- Maintains a sliding window of the most recent numbers (max size: 10)
- Displays previous and current window states
- Shows newly received numbers
- Calculates and displays the average of numbers in the current window
- Error handling for API failures

* API Integration

The application integrates with the following third-party APIs:

- Prime numbers: `http://20.244.56.144/evaluation-service/primes`
- Fibonacci numbers: `http://20.244.56.144/evaluation-service/fibo`
- Even numbers: `http://20.244.56.144/evaluation-service/even`
- Random numbers: `http://20.244.56.144/evaluation-service/rand`


* Directory Structure

![directory structure](./image2.png)
