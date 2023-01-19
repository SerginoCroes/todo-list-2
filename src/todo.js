let todoArray = [];

class Todoitem {
    constructor(todo, date) {
        this.todo = todo;
        this.date = date;
        this.done = false;
    }

    setDone() {
        this.done = true;
    }
}

export function addTodoItem(todo, date){
    todoArray.push(new Todoitem(todo, date));
}

export function readTodos() {
    return todoArray;
}

export function setDone(i) {
    todoArray[i].setDone();
}

export function removeItem(i) {
    todoArray.splice(i, 1);
}