const content = document.querySelector('#content');

class DomElement {
    constructor(element, parent, props) {
        this.el = document.createElement(element);        
        if (props.text) this.el.innerText = props.text;
        if (props.attr) Object.keys(props.attr).forEach(attr => this.el.setAttribute(attr, props.attr[attr]));
        if (props.styles) Object.keys(props.styles).forEach(key => this.el.style[key] = props.styles[key]);
        parent.append(this.el);
    }
    append(item) {
        this.el.appendChild(item);
    }
    setText(text) {
        this.el.innerText = text;
    }
}

//=================================Page layout======================================//
const header = new DomElement('div', content, {attr: {class: 'header'}});
const headerTitle = new DomElement('h1', header, {text: 'Todo list'});

const menu = new DomElement('div', content, {attr: {class: 'menu'}});
const addbuttona = new DomElement('button', menu, {text: 'Add todo', attr: {class: 'button'}});
const projectHead = new DomElement('h2', menu, {text: 'Projects:'});
const addbuttonb = new DomElement('button', menu, { text: 'Add project', attr: {class: 'button'}});

addbuttona.el.addEventListener('click', () => todoDialog.el.style.visibility = 'visible');
addbuttonb.el.addEventListener('click', () => projectDialog.el.style.visibility = 'visible');

const mainDiv = new DomElement('div', content, {attr: {class: 'main'}});

const footer = new DomElement('div', content, {attr: {class: 'footer'}});
const footerText = new DomElement('p', footer, {text: 'Footer'});
//=================================Layout end=======================================//

//=================================Todo dialog======================================//
function buildTodoDialog() {
    const dialog = new DomElement('div', content, {attr: {class: 'dialog'}, styles: {visibility: 'hidden'}});

    const topDiv = new DomElement('div', dialog, {attr: {class: 'topdiv'}});
    const topTitle = new DomElement('p', topDiv, {text: 'Add todo'});
    const closeButton = new DomElement('button', topDiv, {text: 'x', attr: {class: 'closebutton'}});
    closeButton.el.addEventListener('click', () => dialog.el.style.visibility = 'hidden');

    const form = new DomElement('form', dialog, {attr: {class: 'form'}});
    const todoDiv = new DomElement('div', form, {attr: {class: 'inputdiv'}});
    const todoLabel = new DomElement('label', todoDiv, {text: 'Todo:', attr: {for: 'todoinput'}});
    const todoInput = new DomElement('input', todoDiv, {attr: {id: 'todoinput', class: 'input'}});

    const dateDiv = new DomElement('div', form, {attr: {class: 'inputdiv'}});
    const dateLabel = new DomElement('label', dateDiv, {text: 'Date:', attr: {for: 'dateinput'}});
    const dateInput = new DomElement('input', dateDiv, {attr: {type: 'date', id: 'dateinput', class: 'input'}});

    const buttonDiv = new DomElement('div', form, {attr: {class: 'buttondiv inputdiv'}});
    const addButton = new DomElement('button', buttonDiv, {text: 'Submit', attr: {class: 'button'}});
    addButton.el.addEventListener('click', e => {
        e.preventDefault();
        dialog.el.style.visibility = 'hidden';
    });
    return dialog;
}

export const todoDialog = buildTodoDialog();
//=================================Dialog end=======================================//

//=================================Project dialog===================================//
function buildProjectDialog() {
    const dialog = new DomElement('div', content, {attr: {class: 'dialog'}, styles: {visibility: 'hidden'}});

    const topDiv = new DomElement('div', dialog, {attr: {class: 'topdiv'}});
    const topTitle = new DomElement('p', topDiv, {text: 'Add project'});
    const closeButton = new DomElement('button', topDiv, {text: 'x', attr: {class: 'closebutton'}});
    closeButton.el.addEventListener('click', () => dialog.el.style.visibility = 'hidden');

    const form = new DomElement('form', dialog, {attr: {class: 'form'}});
    const todoDiv = new DomElement('div', form, {attr: {class: 'inputdiv'}});
    const todoLabel = new DomElement('label', todoDiv, {text: 'Project name:', attr: {for: 'projectinput'}});
    const todoInput = new DomElement('input', todoDiv, {attr: {id: 'projectinput', class: 'input'}});

    const buttonDiv = new DomElement('div', form, {attr: {class: 'buttondiv inputdiv'}});
    const addButton = new DomElement('button', buttonDiv, {text: 'Submit', attr: {class: 'button'}});
    addButton.el.addEventListener('click', e => {
        e.preventDefault();
        dialog.el.style.visibility = 'hidden';
    });
    return dialog;
}

export const projectDialog = buildProjectDialog();
//=================================Dialog end=======================================//

//=================================Todo div=========================================//
export function buildTodoDiv(todo, date) {
    const todoDiv = new DomElement('div', mainDiv, {attr: {class: 'tododiv'}});
    const todoText = new DomElement('p', todoDiv, {text: todo});
    const todoDate = new DomElement('p', todoDiv, {text: date});
}
//=================================Div end==========================================//

//=================================Project todos====================================//
export function buildTodos(projects) {

    Object.values(mainDiv.el.children).forEach(element => mainDiv.el.removeChild(element));

    Object.keys(projects).forEach(key => {
        buildTodoDiv(key, projects[key].date);
    });
}
//=================================Project todos end================================//

//=================================Project button===================================//
export function drawProjectButton(project) {
    const projectButton = new DomElement('button', menu, {text: project, attr: {class: 'button projectbutton'}});
    const deleteButton = new DomElement('button', projectButton, {text: 'x', attr: {class: 'delproject'}});
    deleteButton.el.addEventListener('click', e => menu.el.removeChild(e.target.parentNode));
    return projectButton;
}
//=================================Button end=======================================//