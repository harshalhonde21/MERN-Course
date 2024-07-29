// const myPromise = new Promise((resolve, reject) => {
//   const success = true; 

//   if (success) {
//     resolve('Operation was successful!');
//   } else {
//     reject('Operation failed.');
//   }
// });

// myPromise
//   .then(result => {
//     console.log("you result",result); 
//   })
//   .catch(error => {
//     console.error(error); 
//   })
//   .finally(() => {
//     console.log('Promise settled'); 
//   });


  // function simulateAPICall() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const success = Math.random() > 0.5;
  //       if (success) {
  //         resolve('API call succeeded!');
  //       } else {
  //         reject('API call failed.');
  //       }
  //     }, 5000);
  //   });
  // }
  
  // simulateAPICall()
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   })
  //   .finally(() => {
  //     console.log('API call completed.');
  //   });


  // promises with async and await 
  
  // function fetchData() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const success = true; 
  //       if (success) {
  //         resolve('Data fetched successfully');
  //       } else {
  //         reject('Data fetch failed');
  //       }
  //     }, 1000);
  //   });
  // }
  
  // async function getData() {
  //   try {
  //     const result = await fetchData();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // getData();


// const GITHUB_API = "https://api.github.com/users/harshalhonde21";

// const users = fetch(GITHUB_API);


// users
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('There was a problem with the fetch operation:', error);
//   });





// with async and await



// const GITHUB_API = "https://api.github.com/users/harshalhonde21";

// const fetchGitHubUser = async () => {
//   try {
//     const response = await fetch(GITHUB_API);
    
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
    
//     const data = await response.json();
    
//     console.log(data);
//   } catch (error) {
//     console.error('There was a problem with the fetch operation:', error);
//   }
// };

// fetchGitHubUser();

