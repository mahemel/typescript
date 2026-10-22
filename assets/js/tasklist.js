"use strict";
const form = document.getElementById("task-form");
const inputTask = document.getElementById("new-task");
const list = document.getElementById("task-list");
const exportButton = document.getElementById("exportTasks");
const tasks = [];
let nextTaskId = 1;
const createSampleTasks = () => {
    const sampleTasks = [];
    const samples = [
        { title: "Buy groceries", completed: false },
        { title: "Walk the dog", completed: false },
        { title: "Read a book", completed: false },
    ];
    samples.forEach((sample) => {
        tasks.push({
            id: nextTaskId++,
            title: sample.title,
            completed: sample.completed,
        });
    });
};
const renderTasks = () => {
    list.innerHTML = "";
    tasks.forEach((task) => {
        const label = document.createElement("label");
        label.classList.add("task-item");
        const span = document.createElement("task-text");
        span.classList.add("task-text");
        span.textContent = task.title;
        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
        });
        label.append(checkbox, checkmark, span);
        list.appendChild(label);
    });
};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = inputTask.value.trim();
    if (title) {
        tasks.push({ id: nextTaskId++, title, completed: false });
        inputTask.value = "";
        renderTasks();
    }
});
exportButton.addEventListener("click", () => {
    const dataStr = JSON.stringify(tasks, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    a.click();
    URL.revokeObjectURL(url);
});
createSampleTasks();
renderTasks();
console.log(tasks);
