/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTodoDiv\": () => (/* binding */ buildTodoDiv),\n/* harmony export */   \"drawActiveButton\": () => (/* binding */ drawActiveButton),\n/* harmony export */   \"drawProjectButton\": () => (/* binding */ drawProjectButton),\n/* harmony export */   \"projectDialog\": () => (/* binding */ projectDialog),\n/* harmony export */   \"removeTodos\": () => (/* binding */ removeTodos),\n/* harmony export */   \"todoDialog\": () => (/* binding */ todoDialog)\n/* harmony export */ });\nconst content = document.querySelector('#content');\n\nclass DomElement {\n    constructor(element, parent, props = {}) {\n        this.el = document.createElement(element);        \n        if (props.text) this.el.innerText = props.text;\n        if (props.attr) Object.keys(props.attr).forEach(attr => this.el.setAttribute(attr, props.attr[attr]));\n        if (props.styles) Object.keys(props.styles).forEach(key => this.el.style[key] = props.styles[key]);\n        parent.append(this.el);\n    }\n    append(item) {\n        this.el.appendChild(item);\n    }\n    setText(text) {\n        this.el.innerText = text;\n    }\n}\n\nconst header = new DomElement('div', content, {attr: {class: 'header'}});\nconst headerTitle = new DomElement('h1', header, {text: 'Todo list'});\n\nconst menu = new DomElement('div', content, {attr: {class: 'menu'}});\nconst addTodo = new DomElement('button', menu, {text: 'Add todo', attr: {class: 'button'}});\nconst addProject = new DomElement('button', menu, { text: 'Add project', attr: {class: 'button'}});\nconst projectHeader = new DomElement('h2', menu, {text: 'Projects:'});\n\naddTodo.el.addEventListener('click', () => todoDialog.el.style.display = 'block');\naddProject.el.addEventListener('click', () => projectDialog.el.style.display = 'block');\n\nconst mainDiv = new DomElement('div', content, {attr: {class: 'main'}});\n\nconst footer = new DomElement('div', content, {attr: {class: 'footer'}});\nconst footerText = new DomElement('p', footer, {text: 'Footer'});\n\nfunction buildTodoDialog() {\n    const dialog = new DomElement('div', content, {attr: {class: 'dialog'}, styles: {display: 'none'}});\n\n    const topDiv = new DomElement('div', dialog, {attr: {class: 'topdiv'}});\n    const topTitle = new DomElement('p', topDiv, {text: 'Add todo'});\n    const closeButton = new DomElement('button', topDiv, {text: 'x', attr: {class: 'closebutton'}});\n    closeButton.el.addEventListener('click', () => dialog.el.style.display = 'none');\n\n    const form = new DomElement('form', dialog, {attr: {class: 'form'}});\n    const todoDiv = new DomElement('div', form, {attr: {class: 'inputdiv'}});\n    const todoLabel = new DomElement('label', todoDiv, {text: 'Title:', attr: {for: 'todoinput'}});\n    const todoInput = new DomElement('input', todoDiv, {attr: {id: 'todoinput', class: 'input'}});\n\n    const dateDiv = new DomElement('div', form, {attr: {class: 'inputdiv'}});\n    const dateLabel = new DomElement('label', dateDiv, {text: 'Date:', attr: {for: 'dateinput'}});\n    const dateInput = new DomElement('input', dateDiv, {attr: {type: 'date', id: 'dateinput', class: 'input'}});\n\n    const buttonDiv = new DomElement('div', form, {attr: {class: 'buttondiv inputdiv'}});\n    const addButton = new DomElement('button', buttonDiv, {text: 'Submit', attr: {class: 'button'}});\n    return dialog;\n}\n\nconst todoDialog = buildTodoDialog();\n\nfunction buildProjectDialog() {\n    const dialog = new DomElement('div', content, {attr: {class: 'dialog'}, styles: {display: 'none'}});\n\n    const topDiv = new DomElement('div', dialog, {attr: {class: 'topdiv'}});\n    const topTitle = new DomElement('p', topDiv, {text: 'Add project'});\n    const closeButton = new DomElement('button', topDiv, {text: 'x', attr: {class: 'closebutton'}});\n    closeButton.el.addEventListener('click', () => dialog.el.style.display = 'none');\n\n    const form = new DomElement('form', dialog, {attr: {class: 'form'}});\n    const todoDiv = new DomElement('div', form, {attr: {class: 'inputdiv'}});\n    const todoLabel = new DomElement('label', todoDiv, {text: 'Project name:', attr: {for: 'projectinput'}});\n    const todoInput = new DomElement('input', todoDiv, {attr: {id: 'projectinput', class: 'input'}});\n\n    const buttonDiv = new DomElement('div', form, {attr: {class: 'buttondiv inputdiv'}});\n    const addButton = new DomElement('button', buttonDiv, {text: 'Submit', attr: {class: 'button'}});\n    return dialog;\n}\n\nconst projectDialog = buildProjectDialog();\n\nfunction buildTodoDiv(todoItem) {\n    const todoDiv = new DomElement('div', mainDiv, {attr: {class: 'tododiv'}});\n    const todoTitle = new DomElement('p', todoDiv, {text: `Title: ${todoItem.todo}`});\n    const todoDate = new DomElement('p', todoDiv, {text: `Date: ${todoItem.date}`});\n\n    const todoButtons = new DomElement('div', todoDiv, {attr: {class: 'todobuttons'}});\n    const todoDone = new DomElement('button', todoButtons, {text: todoItem.done ? 'Done': 'Not done yet', attr: {class: 'button todobutton'}});\n    const todoDelete = new DomElement('button', todoButtons, {text: `Delete ${todoItem.todo.length > 8? 'task' : todoItem.todo}`, attr: {class: 'button todobutton'}});\n\n    const desciptionDiv = new DomElement('div', todoDiv, {styles: {display: 'none'}});\n    const descriptionField = new DomElement('textarea', desciptionDiv);\n    return todoDiv;\n}\n\nfunction removeTodos() {\n    Object.values(mainDiv.el.children).forEach(element => mainDiv.el.removeChild(element));\n}\n\nfunction drawProjectButton(project) {\n    const projectButton = new DomElement('button', menu, {text: project, attr: {class: 'button projectbutton'}});\n    const deleteButton = new DomElement('button', projectButton, {text: 'x', attr: {class: 'delproject'}});\n    deleteButton.el.addEventListener('click', e => {\n        menu.el.removeChild(e.target.parentNode);\n    });\n    return projectButton;\n}\n\nfunction drawActiveButton(button) {\n    menu.el.querySelectorAll('.projectbutton').forEach(button => button.style.outline = '');\n    button.el.style.outline = '2px solid #333';\n}\n\n//# sourceURL=webpack://todo-list-2/./src/domstuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst defaultButton = (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.drawProjectButton)('Default todo\\'s');\ndefaultButton.el.removeChild(defaultButton.el.children[0]);\ndefaultButton.el.addEventListener('click', () => {\n    projectRender('default', defaultButton);\n});\nprojectRender('default', defaultButton);\n(0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.drawActiveButton)(defaultButton);\n\nObject.keys((0,_todo__WEBPACK_IMPORTED_MODULE_1__.getProjects)()).forEach(key => {if (key != 'default') addProjectButton(key)});\n\n_domstuff__WEBPACK_IMPORTED_MODULE_0__.todoDialog.el.children[1][2].addEventListener('click', (e) => {\n    e.preventDefault();\n    const todo = _domstuff__WEBPACK_IMPORTED_MODULE_0__.todoDialog.el.children[1][0].value;\n    const date = _domstuff__WEBPACK_IMPORTED_MODULE_0__.todoDialog.el.children[1][1].value;\n\n    if (todo && date) {\n        const todoItem = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(todo, date);\n        const todoDiv = (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.buildTodoDiv)(todoItem);\n        todoEventListeners(todoDiv, todoItem);\n        _domstuff__WEBPACK_IMPORTED_MODULE_0__.todoDialog.el.style.display = 'none';\n        _domstuff__WEBPACK_IMPORTED_MODULE_0__.todoDialog.el.children[1][0].value = '';\n        _domstuff__WEBPACK_IMPORTED_MODULE_0__.todoDialog.el.children[1][1].value = '';\n    } else {\n        alert('Enter todo title and date!');\n    }\n});\n\n_domstuff__WEBPACK_IMPORTED_MODULE_0__.projectDialog.el.children[1][1].addEventListener('click', (e) => {\n    e.preventDefault();\n    const projName = _domstuff__WEBPACK_IMPORTED_MODULE_0__.projectDialog.el.children[1][0].value;\n\n    if (projName) {\n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addProject)(projName);\n        addProjectButton(projName);\n        _domstuff__WEBPACK_IMPORTED_MODULE_0__.projectDialog.el.children[1][0].value = '';\n        _domstuff__WEBPACK_IMPORTED_MODULE_0__.projectDialog.el.style.display = 'none';\n    } else {\n        alert('Enter project name!');\n    }\n});\n\nfunction addProjectButton(projName) {\n    const projButton = (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.drawProjectButton)(projName);\n\n    projButton.el.addEventListener('click', () => {\n        projectRender(projName, projButton);\n    });\n\n    projButton.el.children[0].addEventListener('click', e => {\n        e.stopPropagation(); \n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.removeProject)(projName);\n        if (projName === (0,_todo__WEBPACK_IMPORTED_MODULE_1__.getActiveProjectName)()) projectRender('default', defaultButton);\n    });\n}\n\nfunction projectRender(project, button) {\n    (0,_todo__WEBPACK_IMPORTED_MODULE_1__.setActiveProject)(project);\n    (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.removeTodos)();\n    buildTodoDivs(project);\n    (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.drawActiveButton)(button);\n}\n\nfunction buildTodoDivs(project) {\n    Object.values((0,_todo__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[project]).forEach(todoItem => {\n        const todoDiv = (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.buildTodoDiv)(todoItem);\n        todoEventListeners(todoDiv, todoItem);\n    });\n}\n\nfunction todoEventListeners (todoDiv, todoItem) {\n    let descriptionVisible = false;\n    const descDiv = todoDiv.el.children[3];\n    descDiv.addEventListener('click', e => e.stopPropagation());\n    descDiv.children[0].addEventListener('keyup', () => (0,_todo__WEBPACK_IMPORTED_MODULE_1__.setDescription)(todoItem, descDiv.children[0].value));\n\n    todoDiv.el.addEventListener('click', () => {\n        if (!descriptionVisible) {\n            if (todoItem.description) descDiv.children[0].value = todoItem.description;\n            descriptionVisible = true;\n            descDiv.style.display = 'block';\n        } else {\n            descriptionVisible = false;\n            descDiv.style.display = 'none';\n            descDiv.children[0].value = '';\n        }\n    });\n\n    todoDiv.el.children[2].children[0].addEventListener('click', e => {\n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.switchDone)(todoItem);\n        e.stopPropagation();\n        e.target.innerText = todoItem.done ? 'Done': 'Not done yet';\n    });\n\n    todoDiv.el.children[2].children[1].addEventListener('click', () => {        \n        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.removeItem)(todoItem.todo);\n        todoDiv.el.remove();\n    });\n}\n\n//# sourceURL=webpack://todo-list-2/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTodoItem\": () => (/* binding */ addTodoItem),\n/* harmony export */   \"getActiveProjectName\": () => (/* binding */ getActiveProjectName),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"setActiveProject\": () => (/* binding */ setActiveProject),\n/* harmony export */   \"setDescription\": () => (/* binding */ setDescription),\n/* harmony export */   \"switchDone\": () => (/* binding */ switchDone)\n/* harmony export */ });\nlet activeProject = 'default';\nlet projectObject = {default: {}};\n\nclass Todoitem {\n    constructor(todo, date) {\n        this.todo = todo;\n        this.date = date;\n        this.done = false;\n    }\n}\n\nfunction addTodoItem(todo, date){\n    projectObject[activeProject][todo] = new Todoitem(todo, date);\n    localStorageSave();\n    return projectObject[activeProject][todo];\n}\n\nfunction switchDone(item) {\n    item.done = !item.done;\n    localStorageSave();\n}\n\nfunction setDescription(todoItem, description) {\n    todoItem.description = description;\n    localStorageSave();\n}\n\nfunction removeItem(todo) {\n    delete projectObject[activeProject][todo];\n    localStorageSave();\n} \n\nfunction addProject(project) {\n    projectObject[project] = {};\n    localStorageSave();\n}\n\nfunction setActiveProject(project) {\n    activeProject = project;\n}\n\nfunction getProjects() {\n    if (localStorage.getItem('projects')) projectObject = JSON.parse(localStorage.getItem('projects'));\n    return projectObject;\n}\n\nfunction getActiveProjectName() {\n    return activeProject;\n}\n\nfunction removeProject(project) {\n    delete projectObject[project];\n    localStorageSave();\n}\n\nfunction localStorageSave() {\n    localStorage.setItem('projects', JSON.stringify(projectObject));\n}\n\n//# sourceURL=webpack://todo-list-2/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;