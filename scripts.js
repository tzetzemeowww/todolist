document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskinput');
    const addButton = document.getElementById('addbutton');
    const taskList = document.getElementById('tasklist');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            
            // Add a click event to the delete button
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });

            // Append the delete button to the list item
            listItem.appendChild(deleteButton);
            
            // Append the new task to the list
            taskList.appendChild(listItem);
            
            // Clear the input field
            taskInput.value = '';
        }
    }

    // Add a task when the "Add" button is clicked
    addButton.addEventListener('click', addTask);

    // Add a task when the Enter key is pressed in the input field
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});