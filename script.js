// Run this code only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim whitespace

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // When "Remove" is clicked, remove the task item
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to li, and li to ul
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add click event to Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
