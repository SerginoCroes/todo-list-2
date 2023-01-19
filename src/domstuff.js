const content = document.querySelector('#content');

class DomElement {
    constructor(element, properties) {
        this.el = document.createElement(`${element}`);
        
        if (properties.domClass){
            this.el.classList.add(properties.domClass);
        }

        if (properties.text){
            this.el.appendChild(document.createTextNode(properties.text));
        }

    }

    append(item) {
        this.el.appendChild(item);
    }

}

const header = new DomElement('div', {domClass: 'header'});
const headerTitle = new DomElement('h1', {text: 'Todo list'});
header.append(headerTitle.el);

const menu = new DomElement('div', {domClass: 'menu'});
const menuHead = new DomElement('h2', {text: 'Menu'});
menu.append(menuHead.el);
const addbutton = new DomElement('button', {domClass: 'button', text: 'button'});
menu.append(addbutton.el);
const addbuttonb = new DomElement('button', {domClass: 'button', text: 'button'});
menu.append(addbuttonb.el);
const addbuttonc = new DomElement('button', {domClass: 'button', text: 'button'});
menu.append(addbuttonc.el);

const maindiv = new DomElement('div', {domClass: 'main'});
const par = new DomElement('p', {text: 'hallo'});
maindiv.append(par.el);

const footer = new DomElement('div', {domClass: 'footer'});
const footerText = new DomElement('p', {text: 'Footer'});
footer.append(footerText.el);


content.appendChild(header.el);
content.appendChild(menu.el);
content.appendChild(maindiv.el);
content.appendChild(footer.el);