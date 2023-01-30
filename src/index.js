import { buildTodoDiv, buildTodos, drawProjectButton, projectDialog, todoDialog } from "./domstuff";
import { addProject, addTodoItem, getProjects, readTodos, removeItem, removeProject, setActiveProject, setDone } from "./todo";

todoDialog.el.children[1][2].addEventListener('click', () => {
    const todo = todoDialog.el.children[1][0].value;
    const date = todoDialog.el.children[1][1].value;

    if (todo && date) {
        addTodoItem(todo, date);
        buildTodoDiv(todo, date);
    }

    //console.log(new Date(date));
    console.log(getProjects());

    todoDialog.el.children[1][0].value = '';
    todoDialog.el.children[1][1].value = '';
});

projectDialog.el.children[1][1].addEventListener('click', () => {
    const projName = projectDialog.el.children[1][0].value;

    const projButton = drawProjectButton(projName);
    addProject(projName);

    projButton.el.addEventListener('click', () => {
        setActiveProject(projName);
        buildTodos(getProjects()[projName]);
        //console.log(`active project: ${projName}`);
        //console.log(getProjects()[projName] + '\n');
    })

    projButton.el.children[0].addEventListener('click', e => {
        e.stopPropagation();
        console.log(e);
        console.log('removing project ' + projName);
        removeProject(projName);

        setActiveProject('default');
        buildTodos(getProjects()['default']);
        //console.log(getProjects());
    });
    
    console.table(getProjects());

    projectDialog.el.children[1][0].value = '';
});

const defaultButton = drawProjectButton('Default todo\'s');
defaultButton.el.removeChild(defaultButton.el.children[0]);
defaultButton.el.addEventListener('click', () => {
    setActiveProject('default');
    buildTodos(getProjects()['default']);
})