const CW_URL = "https://www.codewars.com/api/v1/users";

let form = document.querySelector("form");
let input = document.querySelector("#username");
let main = document.querySelector("main");

// Query Parameter: url?name=value
// URL Parameter: url/value

// fetch(CW_URL + "/" + username)
//   .then((res) => res.json())
//   .then((body) => console.log(body))
//   .catch((err) => console.error(err));

// function generateElement(tagname, children, options) {
//   if (tagname == undefined)
//     throw new Error("Must provide a valid tagname to create an element.");

//   let element = document.createElement(tagname);

//   for (let prop in options) {
//     element[prop] = options[prop];
//   }

//   if (children) {
//     element.append(...children);
//   }

//   return element;
// }

// function addResultToDom(user) {
//   let prevCard = document.querySelector("#userDisplay");

//   if (prevCard) main.removeChild(prevCard);

//   let title = generateElement("h2", null, { textContent: user.username });

//   let listItems = [
//     generateElement("li", null, { textContent: user.name }),
//     generateElement("li", null, { textContent: user.honor }),
//     generateElement("li", null, { textContent: user.ranks.overall.name }),
//   ];

//   let ul = generateElement("ul", listItems);
//   let cardBody = generateElement("div", [title, ul], {
//     className: "card-body",
//   });
//   let card = generateElement("div", [cardBody], {
//     id: "userDisplay",
//     className: "card",
//   });

//   main.appendChild(card);
// }

function addResultToDom(username, name, honor, rank) {
  let title = document.querySelector("#title");
  title.textContent = username;

  let list = document.querySelector("#user-attributes");

  let map = [name, honor, rank];

  console.log(list.children);

  for (let i in list.children) {
    list.children[i].textContent = map[i];
  }

  let card = document.querySelector(".card");
  if (card.hidden) card.hidden = false;
}

async function searchUser(event) {
  event.preventDefault();
  let username = input.value;

  try {
    let res = await fetch(CW_URL + "/" + username);
    let body = await res.json();

    addResultToDom(
      body.username,
      body.name,
      body.honor,
      body.ranks.overall.name
    );

    input.value = "";
  } catch (err) {
    console.error(err);
  }
}

form.addEventListener("submit", searchUser);
