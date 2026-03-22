const addButton = document.getElementById('addTask');
const taskInputInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

loadTasks();

function addTask () {

  const task =taskInput.value.trim();

  if(task) {
    createTaskElement(task);

    taskInput.value='';

    saveTasks();

  } else{
    alert('Please enter a task!')
  }
}


addButton.addEventListener('click', addTask);

function createTaskElement(task){
  const listItem = document.createElement('li');

  listItem.textContent = task;

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'deleteTask';

listItem.appendChild(deleteButton);

deleteButton.addEventListener('click', function(){

  taskList.removeChild(listItem);
})

  taskList.appendChild(listItem);
}

function saveTasks(){

  let tasks = [];
 taskList.querySelectorAll('li').forEach(function(item){
  tasks.push(item.textContent.replace('Delete', '').trim());
});

localStorage.setItem('task', JSON.stringify(tasks));

}

function loadTasks() {

  const tasks = JSON.parse(localStorage.getItem('tasks')) ||
  [];
}