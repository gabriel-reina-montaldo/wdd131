// In your blank JavaScript file, declare three variables that hold references to the input, 
// button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button with addEventListener. 
button.addEventListener('click', function () {
    // Check to make sure the input is not blank before completing the remaining tasks in this list. Use an
    // if block that either provides a message or does nothing and returns the .focus() to the input field.
    if (input.value.trim() != '') {
        // Create a li element that will hold each entry's chapter title and an associated delete button.
        const li = document.createElement('li');
        // Populate the li element variable's textContent or innerHTML with the input value.
        li.textContent = input.value;
        // Create a delete button.
        const deleteButton = document.createElement('button');
        // Set the delete button's textContent to ❌.
        deleteButton.textContent = '❌';
        // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        // Change the input value to an empty string to clean up the interface for the user.
        input.value = '';
        // Append the delete button to the li element.
        li.append(deleteButton);
        // Append the li element variable to the unordered list in your HTML.
        list.append(li);
    };
    // After processing, the focus (active cursor) should be sent to the input element.
    input.focus();
})