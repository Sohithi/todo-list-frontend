function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}


document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("task-date").value;
    const time = document.getElementById("task-time").value;
    const desc = document.getElementById("task-desc").value;

    const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
    const displayDate = `${dayName}, ${date}`;

    const container = document.getElementById("tasks-by-date");

    let dateSection = document.getElementById(`section-${date}`);

    if (!dateSection) {
        dateSection = document.createElement("div");
        dateSection.id = `section-${date}`;
        dateSection.className = "task-list";
        dateSection.innerHTML = `<div class="task-day">${displayDate}</div>`;
        container.appendChild(dateSection);
    }

    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
    <span>${time}</span> ${desc}
    <button onclick="this.parentElement.remove()">❌</button>
  `;

    dateSection.appendChild(taskItem);

    // Reset form
    this.reset();
});
