import { buildTodoDiv, drawProjectButton, projectDialog, todoDialog } from "./domstuff";
import { addProject, addTodoItem, getProjects, readTodos, removeItem, removeProject, setDone } from "./todo";

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

    const projButton = drawProjectButton(projName);
    const length = addProject(projName);

    //============================= Removing not right yet ===============================//

    projButton.el.children[0].addEventListener('click', e => {
        console.log('removing project ' + length);
        removeProject(length - 1);
        console.log(getProjects());
    });
    
    // turn into array again, remove method use indexof() project name and splice();

    console.log(getProjects());

    projectDialog.el.children[1][0].value = '';
});