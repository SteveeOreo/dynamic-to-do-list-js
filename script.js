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
        removeButton.classList.add('remove-btn');
    
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
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Load saved tasks when the page loads
  
    // When the Add button is clicked
    document.getElementById('addTaskBtn').addEventListener('click', () => {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim(); // Trim spaces
  
      if (taskText !== '') {
        addTask(taskText); // Add task to page and localStorage
        input.value = ''; // Clear the input field
      }
    });
  
  
  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  
    // Add each task to the page (but don't save again to localStorage)
    storedTasks.forEach(taskText => addTask(taskText, false));
  }
  
  // Add task to the DOM and optionally to Local Storage
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
  
    // Remove task from DOM and Local Storage when button is clicked
    removeBtn.addEventListener('click', () => {
      li.remove();
      removeTask(taskText);
    });
  
    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
  
    // Save task to Local Storage if needed
    if (save) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  
  // Remove a task from Local Storage
  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText); // Keep all tasks except the one to remove
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
