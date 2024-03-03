// document.getElementById('fetchButton').addEventListener('click', function() {
//     const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
  
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         // Here you can do more with the data, like displaying it on the page
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   });
  

// const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// const searchTerm = 'sun';
// const limit = 10;
// const offset = 2;

// const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


// async function fetchStarshipData() {
//     try {
//       const response = await fetch("https://www.swapi.tech/api/starships/9/");
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const objectStarWars = await response.json();
//       console.log(objectStarWars.result);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   }
  
//   fetchStarshipData();
  

// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// This code defines a function resolveAfter2Seconds() which returns a Promise that resolves after 2 seconds. Then, there's an async function asyncCall() which logs 'calling' to the console, awaits the resolution of the promise returned by resolveAfter2Seconds(), and then logs the resolved value to the console.