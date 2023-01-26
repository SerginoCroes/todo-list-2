import { addProject, buildTodoDiv, projectDialog, todoDialog } from "./domstuff";
import { addTodoItem, readTodos, removeItem, setDone } from "./todo";

todoDialog.el.children[1][2].addEventListener('click', () => {
    const todo = todoDialog.el.children[1][0].value;
    const date = todoDialog.el.children[1][1].value;

    if (todo && date) {
        addTodoItem(todo, date);
        buildTodoDiv(todo, date);
    }

    console.log(new Date(date));

    todoDialog.el.children[1][0].value = '';
    todoDialog.el.children[1][1].value = '';
});

projectDialog.el.children[1][1].addEventListener('click', () => {
    const projName = projectDialog.el.children[1][0].value;

    addProject(projName);

    projectDialog.el.children[1][0].value = '';
});

