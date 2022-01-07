const inputEl = document.getElementById("inputbox");
const btnEl = document.getElementById("button");
const taskContainer = document.getElementById("taskContainer")
let newElement = "";
let taskArr = [];
window.count = 1;

function handleTaskClick() {
    this.classList.toggle("completed");
}

function handleRemove() {
    this.remove();
}

// function setTask() {
//     localStorage.setItem("tasks", JSON.stringify(taskArr));
// }

// function getTask() {
//     let tasks = localStorage.getItem("tasks");
//     if (!tasks) {
//         return;
//     }
//     tasks = JSON.parse(tasks);
//     for (index in tasks) {
//         createTask(tasks[index]);
//     }
// }
// getTask();

function createTask(userInput) {

    var newElement = document.createElement("div");
    var taskId = "task-" + window.count;
    //console.log(newElement);
    newElement.innerHTML = `<div>${userInput}</div> <button onclick="completeTheTask(event)" class="btn1">complete</button>  <button onclick="deleteTheTask(event)" class="btn1" row=` + window.count + `>delete</button> <button onclick="addInnerTask(event)" class="btn1">Add</button>`;




    //newElement.innerText = userInput;
    newElement.setAttribute("class", "task");

    newElement.setAttribute("id", taskId);

    // newElement.addEventListener("click", handleTaskClick);

    //newElement.addEventListener("dblclick", handleRemove);

    taskContainer.append(newElement);
    window.count++;
    inputEl.value = "";
    // console.log(task.length)
}

function deleteTheTask(e) {
    //  e.classList.add("btnx");
    e.target.parentNode.remove();
}

function completeTheTask(e) {
    // e.classList.add("btnbx");
    e.target.parentNode.classList.toggle("completed");
}

function addTask() {
    const userInput = inputEl.value;

    if (userInput.length === 0) return alert("Enter some task..");
    // taskArr.push(userInput);

    //var count = document.getElementsByClassName("task").length + 1;
    //setTask();
    createTask(userInput);

}

function handleEnter(e) {

    if (e.keyCode == 13) {
        addTask();
    }
}
//create inner task
function addInnerTask(e) {
    const userInput = inputEl.value;

    if (userInput.length === 0) return alert("Enter some task..");
    const newInnerElement = document.createElement("div");
    var innerTaskId = "innerTask-" + window.count;
    //console.log(newElement);
    newInnerElement.innerHTML = `<div>${userInput}</div> <button onclick="completeTheTask(event)" class="btn2">complete</button>  <button class="btn2" onclick="deleteTheTask(event)" class="btn2" row=` + window.count + `>delete</button>`;



    console.log(newInnerElement);
    //newElement.innerText = userInput;
    newInnerElement.setAttribute("class", "innerTask");

    newInnerElement.setAttribute("id", innerTaskId);

    // newElement.addEventListener("click", handleTaskClick);

    //newElement.addEventListener("dblclick", handleRemove);

    e.target.parentNode.appendChild(newInnerElement);
    window.count++;
    inputEl.value = "";
    // var event = e;
    // createInnerTask(userInput);
}

function createInnerTask(userInput, event) {
    const newInnerElement = document.createElement("div");
    var innerTaskId = "innerTask-" + window.count;
    //console.log(newElement);
    newInnerElement.innerHTML = `<div>${userInput}</div> <button onclick="completeTheTask(event)">complete</button>  <button onclick="deleteTheTask(event)" class="delete" row=` + window.count + `>delete</button>`;



    console.log(newInnerElement);
    //newElement.innerText = userInput;
    newInnerElement.setAttribute("class", "innerTask");

    newInnerElement.setAttribute("id", innerTaskId);

    // newElement.addEventListener("click", handleTaskClick);

    //newElement.addEventListener("dblclick", handleRemove);

    e.target.parentNode.appendChild(newInnerElement);
    window.count++;
    inputEl.value = "";

}

btnEl.addEventListener("click", addTask);
inputEl.addEventListener("keyup", handleEnter);