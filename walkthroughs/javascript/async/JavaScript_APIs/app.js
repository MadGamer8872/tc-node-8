console.log("Hello World!\n==========\n");

const API_KEY = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";

let form = document.querySelector("#searchForm");
let searchInput = document.querySelector("#gifTerm");
let img = document.querySelector("img");

form.addEventListener("submit", getGif);

async function getGif(event) {
  event.preventDefault();

  try {
    // Returns a promise (is asynchronous)
    let res = await fetchService(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
    );

    if (res) {
      img.src = res.data.images.original.url;
    } else {
      throw new Error("Failed to fetch gif.");
    }
  } catch (err) {
    console.error(err);
  }
}

async function fetchService(url) {
  // Returns a promise (is asynchronous)
  let res = await fetch(url);

  if (res.ok) {
    return await res.json();
  } else {
    return false;
  }
}

// function getGif(event) {
//   event.preventDefault();

//   fetch(
//     `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
//   )
//     .then((res) => res.json())
//     .then(updateDom)
//     .catch(errHandler);
// }

// function updateDom(result) {
//   img.src = result.data.images.original.url;
//   img.alt = result.data.title;
//   img.title = result.data.title;
// }

// function errHandler(err) {
//   console.error(err);
//   document.querySelector("p").textContent =
//     "Failed to fetch gif. Try again later.";
// }

// function getGif() {
//   fetch(
//     `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((body) => {
//       console.log(body);
//       img.src = body.data.images.original.url;
//       if (body.data.user && body.data.user.username) {
//         img.alt = `${body.data.title} by ${body.data.user.username}`;
//         img.title = `${body.data.title} by ${body.data.user.username}`;
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
