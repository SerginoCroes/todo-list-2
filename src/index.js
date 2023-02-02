import { buildTodoDiv, drawActiveButton, drawProjectButton, projectDialog, removeTodos, todoDialog } from "./domstuff";
import { addProject, addTodoItem, getActiveProject, getActiveProjectName, getAllProjects, localStorageSet, removeItem, removeProject, setActiveProject, switchDone } from "./todo";

const defaultButton = drawProjectButton('Default todo\'s');
defaultButton.el.removeChild(defaultButton.el.children[0]);
defaultButton.el.addEventListener('click', () => {
    projectRender('default', defaultButton);
});
projectRender('default', defaultButton);
drawActiveButton(defaultButton);

Object.keys(getAllProjects()).forEach(key => {if (key != 'default') addProjectButton(key)});

todoDialog.el.children[1][2].addEventListener('click', (e) => {
    e.preventDefault();
    const todo = todoDialog.el.children[1][0].value;
    const date = todoDialog.el.children[1][1].value;

    if (todo && date) {
        const todoItem = addTodoItem(todo, date);
        const todoDiv = buildTodoDiv(todoItem);
        todoEventListeners(todoDiv, todoItem);
        todoDialog.el.style.display = 'none';
        todoDialog.el.children[1][0].value = '';
        todoDialog.el.children[1][1].value = '';
    } else {
        alert('Enter todo title and date!');
    }
});

projectDialog.el.children[1][1].addEventListener('click', (e) => {
    e.preventDefault();
    const projName = projectDialog.el.children[1][0].value;

    if (projName) {
        addProject(projName);
        addProjectButton(projName);
        projectDialog.el.children[1][0].value = '';
        projectDialog.el.style.display = 'none';
    } else {
        alert('Enter project name!');
    }
});

function addProjectButton(projName) {
    const projButton = drawProjectButton(projName);

    projButton.el.addEventListener('click', () => {
        projectRender(projName, projButton);
    });

    projButton.el.children[0].addEventListener('click', e => {
        e.stopPropagation(); 
        removeProject(projName);
        if (projName === getActiveProjectName()) projectRender('default', defaultButton);
    });
}

function buildTodoDivs() {
    Object.values(getActiveProject()).forEach(todoItem => {
        const todoDiv = buildTodoDiv(todoItem);
        todoEventListeners(todoDiv, todoItem);
    });
}

function projectRender(project, button) {
    setActiveProject(project);
    removeTodos();
    buildTodoDivs();
    drawActiveButton(button);
}

function todoEventListeners (todoDiv, todoItem) {
    let descriptionVisible = false;
    const descDiv = todoDiv.el.children[3];
    descDiv.addEventListener('click', e => e.stopPropagation());
    descDiv.children[0].addEventListener('keyup', () => {
        todoItem.description = descDiv.children[0].value;
        localStorageSet();
    });

    todoDiv.el.addEventListener('click', () => {
        if (!descriptionVisible) {
            if (todoItem.description) descDiv.children[0].value = todoItem.description;
            descriptionVisible = true;
            descDiv.style.display = 'block';
        } else {
            descriptionVisible = false;
            descDiv.style.display = 'none';
            descDiv.children[0].value = '';
        }
    });

    todoDiv.el.children[2].children[0].addEventListener('click', e => {
        switchDone(todoItem);
        e.stopPropagation();
        e.target.innerText = todoItem.done ? 'Done': 'Not done yet';
    });

    todoDiv.el.children[2].children[1].addEventListener('click', () => {        
        removeItem(todoItem.todo);
        todoDiv.el.remove();
    });
}