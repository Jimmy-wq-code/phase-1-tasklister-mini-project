document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const prioritySelect = document.getElementById('priority'); // Optional if you add a priority dropdown
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Optional: handle priority color (if <select id="priority"> is added in HTML)
    if (prioritySelect) {
      const priority = prioritySelect.value;
      switch (priority) {
        case 'high':
          li.style.color = 'red';
          break;
        case 'medium':
          li.style.color = 'orange';
          break;
        case 'low':
          li.style.color = 'green';
          break;
        default:
          li.style.color = 'black';
      }
    }

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    form.reset();
  });
});
