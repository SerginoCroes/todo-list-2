let activeProject = 'default';

class Todoitem {
    constructor(todo, date) {
        this.todo = todo;
        this.date = date;
        this.done = false;
    }
}

export function addTodoItem(todo, date){
    projectObject[activeProject][todo] = new Todoitem(todo, date);
    localStorageSet();
    return projectObject[activeProject][todo];
}

export function switchDone(item) {
    item.done = !item.done;
    localStorageSet();
}

export function removeItem(todo) {
    delete projectObject[activeProject][todo];
    localStorageSet();
} 

let projectObject = {default: {}};

export function addProject(project) {
    projectObject[project] = {};
    localStorageSet();
}

export function setActiveProject(project) {
    activeProject = project;
}

export function getActiveProject() {
    if (localStorage.getItem('projects')) projectObject = JSON.parse(localStorage.getItem('projects'));
    return projectObject[activeProject];
}

export function getAllProjects() {
    if (localStorage.getItem('projects')) projectObject = JSON.parse(localStorage.getItem('projects'));
    return projectObject;
}

export function getActiveProjectName() {
    return activeProject;
}

export function removeProject(project) {
    delete projectObject[project];
    localStorageSet();
}

export function localStorageSet() {
    localStorage.setItem('projects', JSON.stringify(projectObject));
}