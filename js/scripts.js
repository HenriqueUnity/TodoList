const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const completeList = document.querySelector(".list-tasks");

let taskList = [];

function setInputValue() {
  if (input.value) {
    taskList.push({
      task: input.value,
      done: false,
    });
  } else {
    alert("Campo vazio");
  }
  showTask();
  input.value = "";
  input.focus();
}

function taskDone(index) {
  console.log(index);
  taskList[index].done = !taskList[index].done;
  showTask();
}

function showTask() {
  let newLi = "";
  taskList.forEach((task, index) => {
    newLi =
      newLi +
      `
    <li class="task ${task.done && "done"}">
  <img src="img/checked.png" alt="checked" onclick="taskDone(${index})"/>
  <p>${task.task}</p>
  <img src="img/trash.png" alt="excluir" onclick="deleteItem(${index})" />
  </li>
  `;
  });
  completeList.innerHTML = newLi;

  localStorage.setItem("task", JSON.stringify(taskList));
}
function deleteItem() {}

function deleteItem(index) {
  taskList.splice(index, 1);
  showTask();
}

function loadTasks() {
  const localStorageTasks = localStorage.getItem("task");

  if (localStorageTasks) {
    taskList = JSON.parse(localStorageTasks);
  }

  showTask();
}
loadTasks();

button.addEventListener("click", setInputValue);

function addDailyTasks() {
  taskList.push({ task: "Dar entrada aqui na todo list", done: true });
  taskList.push({ task: "estudar programação", done: false });
  taskList.push({ task: "revisar projetos de estudo", done: false });
  showTask();
}
