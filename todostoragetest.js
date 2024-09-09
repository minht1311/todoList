// Retrieve elements and store them in variables
const todoForm = document.getElementById("liForm");
const todoList = document.getElementById("todoList");

// Get data stored in localStorage under the key "todos".
// The data type will be a string (local storage can only store strings).
// JSON is a global object that contains methods for working with data represented as strings.
// The `||` syntax is an OR operator and is used here to set an empty array as a fallback in case `localStorage` is empty
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

// Create a loop the same length as the list of todos
for (let i = 0; i < savedTodos.length; i++) {
  // Create an <li> element in memory (does not appear in the document yet)
  let li = document.createElement("li");
  // Set the inner text of that new li with the contents from local storage.
  // The savedTodos[i] is accessing data in the localStorage array.
  // The [i] is a different number each loop.
  // The `.task` is accessing 'task' property on the object in the array.
  li.innerText = savedTodos[i].task;
  // Create a new property on the element called `isCompleted` and assign a boolean value.
  // This is only accessible in code and will not show up when appending to the DOM.
  li.isCompleted = savedTodos[i].isCompleted ? true : false;
  // Check the value we just set.
  if (li.isCompleted) {
    // Create a style for the element if it is done (strike it out)
    li.style.textDecoration = "line-through";
  }
  // Actually append the new element to the document (this will make it visible)
  todoList.appendChild(li);
}

// `addEventListener` is a function that registers some actions to take when an event occurs.
// The following tells the browser - whenever a form is submitted, run this function.
todoForm.addEventListener("submit", function(event) {
  // Don't try to send the form data to a server. Stops page reloading.
  event.preventDefault();
  // Create a <li> element in memory (not yet visible in the document)
  let li = document.createElement("li");
  // Find element in the document (probably a input element?) and access the text value.
  let inputValue = document.getElementById("task").value;
  // Set the text of the <li>
  li.innerText = inputValue;
  // Set a property on the <li> call `isCompleted`
  li.isCompleted = false;
  // Empty out all the input fields in the form
  todoForm.reset();
  // Make the new <li> visible in the document by attaching it to the list
  todoList.appendChild(li);

  // `push` adds a new element to the `savedTodos` array. In this case, an object with 2 properties.
  savedTodos.push({ task: li.innerText, isCompleted: false });
  // Overwrite the `todos` key in local storage with the updated array.
  // Use the JSON global object to turn an array into a string version of the data
  // eg [1,2,3] becomes "[1,2,3]"
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

// This tells the browser - whenever the todoList is clicked, run this function.
// The browser will call the your function with an object that has data about the event.
todoList.addEventListener("click", function(event) {
  // the `target` of the event is the element that was clicked.
  let clickedListItem = event.target;

  // If that element has a property called `isCompleted` set to true
  if (!clickedListItem.isCompleted) {
    // update the styles and toggle the `isCompleted` property.
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  // The code above changes the documents version of the data (the elements themselves)
  // This loop ensures that the array of todos data is kept in sync with the document
  // Loop over the array
  for (let i = 0; i < savedTodos.length; i++) {
    // if the item in the array has the same text as the item just clicked...
    if (savedTodos[i].task === clickedListItem.innerText) {
      // toggle the completed state
      savedTodos[i].isCompleted = clickedListItem.isCompleted;
      // Update the localStorage with the new todos array.
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});