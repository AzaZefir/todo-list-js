class Task {
  constructor(text) {
    this.text = text;
    this.isDone = false;
  }
}

let dataService = {
  url: "https://jsonplaceholder.typicode.com/todos",

  get allTasks(){
    return fetch(this.url)
      .then(response => response.json())
      .then(json => this.mapArray(json))
  },
  get notCompletedTasks() {
    return fetch(this.url + '?completed=false')
      .then(response => response.json())
      .then(json => this.mapArray(json))
  },

  add(task) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({title: task.text, completed: task.isDone})
    })
    .then(response => response.json())
  },
  update(task) {
    return fetch(this.url + '/' + task.id, {
      method: 'POST',
      body: JSON.stringify({title: task.text, completed: task.isDone})
    })
    .then(response => response.json())
  },
  // delete(task) {
  //       let index = this.tasks.indexOf(task);
  //       this.tasks.splice(index, 1);
  //       this.save();
  //   },
  mapArray(array) {
    return array.map(element => {
      return {
        id: element.id,
        text: element.title,
        isDone: element.completed
      }
    })
  }

  
//   tasks: [],
//   get allTasks() {
//     return this.tasks;
//   },
//   get notCompletedTasks() {
//     return this.tasks.filter((task) => task.isDone == false);
//   },
//   add(task) {
//     this.tasks.push(task);
//     this.save();
//   },
//   delete(task) {
//     let index = this.tasks.indexOf(task);
//     this.tasks.splice(index, 1);
//     this.save();
// },
//   save() {
//     localStorage.setItem('tasks', JSON.stringify(this.tasks));
//   },
//   open() {
//     this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   },
};

class TaskListView {
  element;
  dataService;

  constructor(element) {
    this.element = element;
    dataService = dataService
  }
  #drawList(tasksElements) {
    this.element.innerHTML = '';

    tasksElements.forEach((taskElement) => {
      taskElement.createIn(this.element);
    });
  }
  drawAll() {
    let taskElements = [];
    dataService.allTasks.then(tasks => {
      if (tasks.length == 0) return;

    tasks.forEach((task) => {
      taskElements.push(new TaskView(task));
    });
    this.#drawList(taskElements);
    })
    // let tasks = dataService.allTasks;
    
  }
  drawNotCompleted() {
    let taskElements = [];
    dataService.notCompletedTasks.then(tasks => {
      if (tasks.length == 0) return;

    tasks.forEach((task) => {
      taskElements.push(new TaskView(task));
    });
    this.#drawList(taskElements);
    })
    // let tasks = dataService.notCompletedTasks;
  }
}

class TaskView {
  constructor(task) {
    this.task = task;
    this.div = null;
  }
  createIn(element) {
    this.div = document.createElement('div');
    this.div.classList.add('task');

    let input = document.createElement('input');
    input.addEventListener('click', this.changeState.bind(this));
    input.type = 'checkbox';

    let p = document.createElement('p');
    p.innerText = this.task.text;

    let button = document.createElement('button');
    button.innerHTML = 'Удалить';
    button.classList.add('task-delete');
    button.addEventListener('click', this.delete.bind(this));

    this.div.append(input);
    this.div.append(p);
    this.div.append(button);

    if (this.task.isDone) {
      this.div.classList.add('completed');
      input.checked = true;
    }
    element.append(this.div);
  }
  changeState(element) {
    this.task.isDone = !this.task.isDone;
    // dataService.save();
    this.div.classList.toggle('completed');
  }
  delete() {
    dataService.delete(this.task);
    this.div.remove();
  }
}

let taskNameInput = document.querySelector('#task-name-input');
let addTaskBtn = document.querySelector('#add-task-btn');
let startMessage = document.querySelector('#start-message');
let taskList = document.querySelector('.task-list');
let showAllBtn = document.querySelector('#show-all-btn');
let showNotCompletedBtn = document.querySelector('#show-not-completed-btn');

// dataService.open();
let tasksListView = new TaskListView(taskList);

addTaskBtn.addEventListener('click', addTaskHandler);
showAllBtn.addEventListener('click', showAllHandler);
showNotCompletedBtn.addEventListener('click', showNotCompletedHandler);

// window.addEventListener('load', function () {
//   tasksListView.drawAll();
// });

taskNameInput.addEventListener('keydown', function (event) {
  if (event.code == 'Enter') addTaskHandler();
  // console.log(event);
});

function addTaskHandler() {
  if (taskNameInput.value) {
    if (!startMessage.hidden) startMessage.hidden = true;
    let newTask = new Task(taskNameInput.value);
    dataService.add(newTask).then(()=> tasksListView.drawAll())
    // dataService.add(newTask);
    // tasksListView.drawAll();
    taskNameInput.value = '';
  } else {
    alert('add new task');
  }
}

function showAllHandler() {
  tasksListView.drawAll();
}
function showNotCompletedHandler() {
  tasksListView.drawNotCompleted();
}

// let taskNameInput = document.querySelector('#task-name-input');
// let addTaskBtn = document.querySelector('#add-task-btn');
// let taskList = document.querySelector('.task-list');
// let startMessage = document.querySelector('#start-message'); // <p id="start-message">Нет новых задач</p>

// addTaskBtn.addEventListener('click', addTaskHandler);

// taskNameInput.addEventListener('keydown', function (event) {
//   if (event.code == 'Enter') addTaskHandler();
//   console.log(event);
// });

// function createTask(text) {
//   let div = document.createElement('div');
//   div.classList.add('task');

//   let input = document.createElement('input');
//   input.addEventListener('click', changeTaskState);
//   input.classList.add('inputCheckbox');
//   input.type = 'checkbox';

//   let p = document.createElement('p');
//   p.innerText = text;

//   let deleteTask = document.createElement('button');
//   deleteTask.textContent = 'Delete task';
//   deleteTask.classList.add('task-delete');
//   deleteTask.addEventListener('click', deleteTaskHandler);

//   div.append(input);
//   div.append(p);
//   div.append(deleteTask);

//   return div;
// }

// function deleteTaskHandler() {
//   if (confirm('Are you sure you want to delete this task?')) {
//     this.parentElement.remove();
//   }
//   startMessage.hidden = false;
// }

// function changeTaskState() {
//   if (this.checked) {
//     this.parentElement.classList.add('completed');
//   } else {
//     this.parentElement.classList.remove('completed');
//   }
// }

// function addTaskHandler() {
//   if (taskNameInput.value) {
//     if (!startMessage.hidden) startMessage.hidden = true;
//     let newTask = createTask(taskNameInput.value);
//     taskList.append(newTask);
//     taskNameInput.value = '';
//   } else {
//     alert('add new task');
//   }
// }
