let activeProject = 'default';

export function setActiveProject(project) {
    activeProject = project;
}

class Todoitem {
    constructor(todo, date) {
        this.todo = todo;
        this.date = date;
        this.done = false;
    }

    setDone() {
        this.done = true;
    }
}

export function addTodoItem(todo, date){
    projectObject[activeProject][todo] = new Todoitem(todo, date);
}

export function readTodos() {
    return projectObject[activeProject];
}

/* 
export function setDone(i) {
    todoArray[i].setDone();
}

export function removeItem(i) {
    todoArray.splice(i, 1);
} */

let projectObject = {default: {}};

export function addProject(project) {
    projectObject[project] = {};
}

export function getProjects() {
    return projectObject;
}

export function removeProject(project) {
    console.log(project);
    delete projectObject[project];
}