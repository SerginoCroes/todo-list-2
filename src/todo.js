let todoArray = [];

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
    todoArray.push(new Todoitem(todo, date));
}

export function readTodos() {
    return todoArray;
}

export function setDone(i) {
    todoArray[i].setDone();
}

export function removeItem(i) {
    todoArray.splice(i, 1);
}

let projectObject = {};

export function addProject(project) {
    projectObject[Object.keys(projectObject).length] = project;
    return Object.keys(projectObject).length;
}

export function getProjects() {
    return projectObject;
}

export function removeProject(i) {
    delete projectObject[i];
}