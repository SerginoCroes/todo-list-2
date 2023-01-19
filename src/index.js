import "./domstuff";
import { addTodoItem, readTodos, removeItem, setDone } from "./todo";

addTodoItem('niks', 'morgen');
addTodoItem('blabla', 'ooit');
addTodoItem('hahaha', 'gisteren')

readTodos().forEach(item => console.log(item));
console.log('');

setTimeout(() => {

    setDone(0);
    removeItem(1);
    readTodos().forEach(item => console.log(item));
    console.log('');

}, 5000);
