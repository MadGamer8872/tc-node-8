const App = () => {
  return (
    <div className="App">
      <h1 id="title">Hello World!</h1>
    </div>
  );
};

// would be:

let root = document.querySelector("#root");

let div = document.createElement("div");
div.classList.add("App");

let h1 = document.createElement("h1");
h1.textContent = "Hello World!";
h1.id = "title";

div.appendChild(h1);

root.appendChild(div);
