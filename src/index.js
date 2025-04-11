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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("new-task-description");
  const taskText = input.value;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  form.reset();
});
<select id="priority">
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select>

const priority = document.getElementById("priority").value;

if (priority === "high") {
  li.style.color = "red";
} else if (priority === "medium") {
  li.style.color = "orange";
} else if (priority === "low") {
  li.style.color = "green";
}
