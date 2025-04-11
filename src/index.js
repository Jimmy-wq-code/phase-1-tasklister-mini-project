document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const taskList = document.getElementById("tasks"); // Assuming this is where you add tasks

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const input = document.getElementById("new-task-description");
    const taskText = input.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    form.reset(); // optional: clears the input field
  });
});