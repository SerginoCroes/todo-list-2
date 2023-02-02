let activeProject = 'default';
let projectObject = {default: {}};

class Todoitem {
    constructor(todo, date) {
        this.todo = todo;
        this.date = date;
        this.done = false;
    }
}

export function addTodoItem(todo, date){
    projectObject[activeProject][todo] = new Todoitem(todo, date);
    localStorageSave();
    return projectObject[activeProject][todo];
}

export function switchDone(item) {
    item.done = !item.done;
    localStorageSave();
}

export function setDescription(todoItem, description) {
    todoItem.description = description;
    localStorageSave();
}

export function removeItem(todo) {
    delete projectObject[activeProject][todo];
    localStorageSave();
} 

export function addProject(project) {
    projectObject[project] = {};
    localStorageSave();
}

export function setActiveProject(project) {
    activeProject = project;
}

export function getProjects() {
    if (localStorage.getItem('projects')) projectObject = JSON.parse(localStorage.getItem('projects'));
    return projectObject;
}

export function getActiveProjectName() {
    return activeProject;
}

export function removeProject(project) {
    delete projectObject[project];
    localStorageSave();
}

function localStorageSave() {
    localStorage.setItem('projects', JSON.stringify(projectObject));
}