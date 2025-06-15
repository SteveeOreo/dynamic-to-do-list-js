// Run this code only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
    
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
    
        // Create <li> element
        const li = document.createElement('li');
        li.textContent = taskText;
    
        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
    
        // Set onclick to remove this <li>
        removeButton.onclick = () => {
            li.remove(); // more precise than taskList.removeChild(li)
        };
    
        // Append remove button to li and li to ul
        li.appendChild(removeButton);
        taskList.appendChild(li);
    
        // Clear input
        taskInput.value = '';
    }
    

    // Add click event to Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress',function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
