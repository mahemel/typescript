type Task = {
    id: number;
    title: string;
    completed: boolean;
};

const form = document.getElementById("task-form") as HTMLFormElement;
const inputTask = document.getElementById("new-task") as HTMLInputElement;
const list = document.getElementById("task-list") as HTMLUListElement;
const exportButton = document.getElementById(
    "exportTasks",
) as HTMLButtonElement;

const tasks: Task[] = [];
let nextTaskId = 1;

const createSampleTasks = (): void => {
    const sampleTasks: Task[] = [];

    const samples: Omit<Task, "id">[] = [
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

const renderTasks = (): void => {
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
