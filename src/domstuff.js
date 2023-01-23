const content = document.querySelector('#content');

class DomElement {
    constructor(element, props) {
        this.el = document.createElement(element);        
        if (props.text) this.el.innerText = props.text;
        if (props.attr) Object.keys(props.attr).forEach(attr => this.el.setAttribute(attr, props.attr[attr]));
        if (props.styles) Object.keys(props.styles).forEach(key => this.el.style[key] = props.styles[key]);
        if (props.parent) props.parent.append(this.el);
    }
    append(item) {
        this.el.appendChild(item);
    }
    setText(text) {
        this.el.innerText = text;
    }
}

const header = new DomElement('div', {attr: {class: 'header'}, parent: content});
const headerTitle = new DomElement('h1', {text: 'Todo list', parent: header});

const menu = new DomElement('div', {attr: {class: 'menu'}, parent: content});
const menuHead = new DomElement('h2', {text: 'Menu', parent: menu});
const addbuttona = new DomElement('button', {attr: {class: 'button'}, text: 'Add item', parent: menu});
const addbuttonb = new DomElement('button', {attr: {class: 'button'}, text: 'Add project', parent: menu});
const addbuttonc = new DomElement('button', {attr: {class: 'button'}, text: 'blabla', parent: menu});

addbuttona.el.addEventListener('click', () => dialog.el.style.display = 'block');
//document.querySelectorAll('.button').forEach(button => button.addEventListener('click', event => par.setText(`${event.target.innerText} pressed`)));

const mainDiv = new DomElement('div', {attr: {class: 'main'}, parent: content});
//export const par = new DomElement('p', {text: 'main field', styles: {backgroundColor: '#0000ff', color: '#ffff00', fontSize: '30px', margin: '20px 0px',  padding: '10px', fontWeight: 'bold'}, parent: mainDiv});

//=================================Dialog======================================//
const dialog = new DomElement('div', {attr: {class: 'dialog'}, styles: {display: 'none'}, parent: mainDiv});

const closeDiv = new DomElement('div', {attr: {class: 'closediv'}, parent: dialog});
const closeButton = new DomElement('p', {text: 'x', attr: {class: 'closebutton'}, parent: closeDiv});
closeButton.el.addEventListener('click', () => dialog.el.style.display = 'none');

const form = new DomElement('form', {attr: {class: 'form'}, parent: dialog});
const todoDiv = new DomElement('div', {attr: {class: 'inputdiv'}, parent: form});
const todoLabel = new DomElement('label', {text: 'Todo:', attr: {for: 'todoinput', class: 'label'}, parent: todoDiv});
const todoInput = new DomElement('input', {attr: {id: 'todoinput', class: 'input'}, parent: todoDiv});

const dateDiv = new DomElement('div', {attr: {class: 'inputdiv'}, parent: form});
const dateLabel = new DomElement('label', {text: 'Date:', attr: {for: 'dateinput', class: 'label'}, parent: dateDiv});
const dateInput = new DomElement('input', {attr: {type: 'date', id: 'dateinput', class: 'input'}, parent: dateDiv});

const buttonDiv = new DomElement('div', {parent: form, attr: {class: 'buttondiv inputdiv'}});
const addButton = new DomElement('button', {text: 'Submit', attr: {class: 'button'}, parent: buttonDiv});
addButton.el.addEventListener('click', e => {e.preventDefault(); dialog.el.style.display = 'none'});
//=================================Dialog end==================================//

const footer = new DomElement('div', {attr: {class: 'footer'}, parent: content});
const footerText = new DomElement('p', {text: 'Footer', parent: footer});