# Reviews: JS DOM

_Document Object Model_ is a tree/directory structure where html elements are represented as objects (or _nodes_ in this case) that we can access and manipulate through Javascript.

All nodes are related in some way (parent to child, siblings, descendants, ancestors)

Access the DOM through the `document` object

## Selecting Elements

Select elements with:

1. By tag name: `document.getElementsByTagName("tagname")`
2. By class name: `document.getElementsByClassName("class")`
3. By id: `document.getElementById("id")`
4. By css selector: `document.querySelector(".class")`
5. By css selector: `document.querySelectorAll(".class")`

Selecting a single element will return one object

Selecting multiple elements will return an _HTMLCollection_

## Adding, Replacing, Removing Elements

Create an element by name

`document.createElement("name")`

Insert an element as a child of a parent

`parent.appendChild(element)`
`parent.insertBefore(element, refElement)`

Replace a child of a parent with a new element

`parent.replaceChild(element, refElement)`

Remove a child from a parent

`parent.removeChild(element)`

## Events

Create functions to handle certain events that triggered by the user. For example:

- user clicks a button
- user presses a key
- user clicks and drags an element
- user mouses over an element
- user changes the contents of an input element

Add an event listener by:

1. Assign a function to an element's on|event| property

   ```js
   element.onclick = (e) => {
     // handle the click event
   };
   ```

2. Use the addEventListener method to add a listener for a specific event

   ```js
   element.addEventListener("click", (e) => {
     // handle the click event
   });
   ```

3. Give an element an event listener as an attribute value

   ```html
   <button onclick="showModal()">Click Me!</button>
   ```
