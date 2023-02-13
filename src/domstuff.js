const content = document.querySelector('#content');

class DomElement {
    constructor(element, parent, props = {}) {
        this.el = document.createElement(element);        
        if (props.text) this.el.innerText = props.text;
        if (props.attr) Object.keys(props.attr).forEach(attr => this.el.setAttribute(attr, props.attr[attr]));
        if (props.styles) Object.keys(props.styles).forEach(key => this.el.style[key] = props.styles[key]);
        parent.append(this.el);
    }
    append(item) {
        this.el.appendChild(item);
    }
}

const header = new DomElement('div', content, {attr: {class: 'header'}});
const headerTitle = new DomElement('h1', header, {text: 'Todo list'});

const menu = new DomElement('div', content, {attr: {class: 'menu'}});
const addTodo = new DomElement('button', menu, {text: 'Add todo', attr: {class: 'button'}});
const addProject = new DomElement('button', menu, { text: 'Add project', attr: {class: 'button'}});
const projectHeader = new DomElement('h2', menu, {text: 'Projects:'});

addTodo.el.addEventListener('click', () => todoDialog.el.style.display = 'block');
addProject.el.addEventListener('click', () => projectDialog.el.style.display = 'block');

const mainDiv = new DomElement('div', content, {attr: {class: 'main'}});

const footer = new DomElement('div', content, {attr: {class: 'footer'}});
const footerText = new DomElement('p', footer, {text: 'Footer'});

function buildTodoDialog() {
    const dialog = new DomElement('div', content, {attr: {class: 'dialog'}, styles: {display: 'none'}});

    const topDiv = new DomElement('div', dialog, {attr: {class: 'topdiv'}});
    const topTitle = new DomElement('p', topDiv, {text: 'Add todo'});
    const closeButton = new DomElement('button', topDiv, {text: 'x', attr: {class: 'closebutton'}});
    closeButton.el.addEventListener('click', () => dialog.el.style.display = 'none');

    const form = new DomElement('form', dialog, {attr: {class: 'form'}});
    const todoLabel = new DomElement('label', form, {text: 'Title:'});
    const todoInput = new DomElement('input', todoLabel, {attr: {id: 'todoinput', class: 'input'}});
    const dateLabel = new DomElement('label', form, {text: 'Date:'});
    const dateInput = new DomElement('input', dateLabel, {attr: {type: 'date', id: 'dateinput', class: 'input'}});

    const buttonDiv = new DomElement('div', form, {attr: {class: 'buttondiv inputdiv'}});
    const addButton = new DomElement('button', buttonDiv, {text: 'Submit', attr: {class: 'button'}});
    return dialog;
}

export const todoDialog = buildTodoDialog();

function buildProjectDialog() {
    const dialog = new DomElement('div', content, {attr: {class: 'dialog'}, styles: {display: 'none'}});

    const topDiv = new DomElement('div', dialog, {attr: {class: 'topdiv'}});
    const topTitle = new DomElement('p', topDiv, {text: 'Add project'});
    const closeButton = new DomElement('button', topDiv, {text: 'x', attr: {class: 'closebutton'}});
    closeButton.el.addEventListener('click', () => dialog.el.style.display = 'none');

    const form = new DomElement('form', dialog, {attr: {class: 'form'}});
    const todoLabel = new DomElement('label', form, {text: 'Project name:'});
    const todoInput = new DomElement('input', todoLabel, {attr: {id: 'projectinput', class: 'input'}});
    const buttonDiv = new DomElement('div', form, {attr: {class: 'buttondiv inputdiv'}});
    const addButton = new DomElement('button', buttonDiv, {text: 'Submit', attr: {class: 'button'}});
    return dialog;
}

export const projectDialog = buildProjectDialog();

export function buildTodoDiv(todoItem) {
    const todoDiv = new DomElement('div', mainDiv, {attr: {class: 'tododiv'}});
    const todoTitle = new DomElement('p', todoDiv, {text: `Title: ${todoItem.todo}`});
    const todoDate = new DomElement('p', todoDiv, {text: `Date: ${todoItem.date}`});

    const todoButtons = new DomElement('div', todoDiv, {attr: {class: 'todobuttons'}});
    const todoDone = new DomElement('button', todoButtons, {text: todoItem.done ? 'Done': 'Not done yet', attr: {class: 'button todobutton'}});
    const todoDelete = new DomElement('button', todoButtons, {text: `Delete ${todoItem.todo.length > 8? 'task' : todoItem.todo}`, attr: {class: 'button todobutton'}});

    const desciptionDiv = new DomElement('div', todoDiv, {styles: {display: 'none'}});
    const descriptionField = new DomElement('textarea', desciptionDiv);
    return todoDiv;
}

export function removeTodos() {
    Object.values(mainDiv.el.children).forEach(element => mainDiv.el.removeChild(element));
}

export function drawProjectButton(project) {
    const projectButton = new DomElement('button', menu, {text: project, attr: {class: 'button projectbutton'}});
    const deleteButton = new DomElement('button', projectButton, {text: 'x', attr: {class: 'delproject'}});
    deleteButton.el.addEventListener('click', e => {
        menu.el.removeChild(e.target.parentNode);
    });
    return projectButton;
}

export function drawActiveButton(button) {
    menu.el.querySelectorAll('.projectbutton').forEach(button => button.style.outline = '');
    button.el.style.outline = '2px solid #333';
}