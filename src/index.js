import { projectDialog, todoDialog } from "./domstuff";
import { addTodoItem, readTodos, removeItem, setDone } from "./todo";

addTodoItem('niks', 'morgen');
addTodoItem('blabla', 'ooit');
addTodoItem('hahaha', 'gisteren')

document.querySelector('.todobutton').addEventListener('click', e => console.log('todo submit'));
document.querySelector('.projectbutton').addEventListener('click', e => console.log('project submit'));


/* 

setTimeout(() => {

}, 5000); */