import { buildTodoDiv, projectDialog, todoDialog } from "./domstuff";
import { addTodoItem, readTodos, removeItem, setDone } from "./todo";

todoDialog.el.children[1][2].addEventListener('click', () => {
    const todo = todoDialog.el.children[1][0].value;
    const date = todoDialog.el.children[1][1].value;

    if (todo && date) {
        addTodoItem(todo, date);
        buildTodoDiv(todo, date);
    }

    todoDialog.el.children[1][0].value = '';
    todoDialog.el.children[1][1].value = '';
});

projectDialog.el.children[1][1].addEventListener('click', () => {
    console.log('project submit');
    console.log(projectDialog.el.children[1][0].value);
    projectDialog.el.children[1][0].value = '';
});