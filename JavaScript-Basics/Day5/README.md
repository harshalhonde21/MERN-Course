# JavaScript Promises and `async/await`

## Introduction

JavaScript promises and `async/await` syntax are powerful tools for handling asynchronous operations. This document provides a detailed explanation of how these concepts work with code examples.

## Promises

A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Basic Promise Example

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; 

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});

myPromise
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error(error); 
  })
  .finally(() => {
    console.log('Promise settled'); 
  });

```
- **Creating a Promise**: The `new Promise` constructor takes a function with `resolve` and `reject` parameters.
- **Resolving**: If the operation is successful, `resolve` is called with a success message.
- **Rejecting**: If the operation fails, `reject` is called with an error message.
- **Consuming the Promise**: The `then` method handles the resolved value, the `catch` method handles the rejected value, and the `finally` method executes code regardless of the outcome.

### Simulating an API Call

```javascript
function simulateAPICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('API call succeeded!');
      } else {
        reject('API call failed.');
      }
    }, 5000);
  });
}

simulateAPICall()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('API call completed.');
  });


```

- **Simulating Delay**: The `setTimeout` function simulates an API call delay.
- **Random Success**: The `Math.random()` function simulates a 50% chance of success or failure.
- **Handling Results**: The `then`, `catch`, and `finally` methods handle the success, failure, and completion of the promise.

### Promises with `async` and `await`

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('Data fetch failed');
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();
```


- **Async Function**: The `async` keyword declares an asynchronous function.
- **Awaiting a Promise**: The `await` keyword waits for the promise to resolve.
- **Error Handling**: The `try...catch` block handles any errors that occur during the asynchronous operation.

## Fetching Data from an API

### Using Promises

```javascript
const GITHUB_API = "https://api.github.com/users/harshalhonde21";

const users = fetch(GITHUB_API);

users
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

- **Fetching Data**: The `fetch` function makes a network request to the GitHub API.
- **Handling the Response**: The `then` method checks if the response is OK and parses the JSON data.
- **Error Handling**: The `catch` method handles any errors that occur during the fetch or parsing.

### Using `async` and `await`

```javascript
const GITHUB_API = "https://api.github.com/users/harshalhonde21";

const fetchGitHubUser = async () => {
  try {
    const response = await fetch(GITHUB_API);
    
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    const data = await response.json();
    
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

fetchGitHubUser();
