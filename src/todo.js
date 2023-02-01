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
}

export function addTodoItem(todo, date){
    return projectObject[activeProject][todo] = new Todoitem(todo, date);
}

export function readTodos() {
    return projectObject[activeProject];
}

export function switchDone(item) {
    item.done = !item.done;
}

export function removeItem(todo) {
    delete projectObject[activeProject][todo];
} 

let projectObject = {default: {}};

export function addProject(project) {
    projectObject[project] = {};
}

export function getActiveProject() {
    return projectObject[activeProject];
}

export function getActiveProjectName() {
    return activeProject;
}

export function removeProject(project) {
    delete projectObject[project];
}