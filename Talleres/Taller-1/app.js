const newTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  console.log(taskInput);
  if (taskInput) {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput;
    console.log('Task added');
    taskList.appendChild(newTask);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Borrar tarea';
    newTask.appendChild(removeButton);
    removeButton.addEventListener('click', removeTask);
  } else {
    alert('Por favor ingrese una tarea');
  }
}
function removeTask(event) {
  const button = event.target;
  const taskItem = button.parentNode;
  taskItem.remove();
  console.log('Tarea eliminada');
}
newTaskButton.addEventListener('click', addTask);
console.log(taskList);
