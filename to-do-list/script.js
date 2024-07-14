const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");
const dueDate = document.getElementById("due-date");

addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task description!");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = `${inputBox.value} - Due: ${dueDate.value}`;
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);
    
    inputBox.value = '';
    dueDate.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

function editTask(taskItem) {
    const [taskText, taskDueDate] = taskItem.firstChild.textContent.split(' - Due: ');
    const newText = prompt("Edit your task:", taskText);
    const newDueDate = prompt("Edit due date:", taskDueDate);
    if (newText) {
        taskItem.firstChild.textContent = `${newText} - Due: ${newDueDate}`;
    }
    saveData();
}

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || '';
    listContainer.querySelectorAll('li').forEach(taskItem => {
        const span = document.createElement("span");
        span.textContent = "\u00d7";
        taskItem.appendChild(span);
    });
}

showTasks();