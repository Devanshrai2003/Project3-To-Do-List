let todoSpace = document.querySelector(".todo-space");
let todoCount = 1;
let todos = [];

function addTodo(){
    todos.push({
        id: todoCount,
        title: document.querySelector("#todo-input").value
    });
    todoCount++;
    render();
}

function deleteFirstTodo(){
    todos.shift();
    render();
}

function deleteLastTodo(){
    todos.pop();
    render();
}

function deleteTodo(id){
    todos = todos.filter((todo) => todo.id !== id);
    render();
}

function render(){
    todoSpace.innerHTML = "";
    for(let i = 0; i < todos.length; i++){
        let todo = todos[i];
        let todoBox = document.createElement("div");
        let todoBoxLeft = document.createElement("div");
        let todoBoxRight = document.createElement("div");
        let textBox = document.createElement("span");
        let delButton = document.createElement("button");
        let checkBox = document.createElement("input");
        let editButton = document.createElement("button");
        
        textBox.innerHTML = todo.title;
        delButton.innerHTML = "Delete";
        editButton.innerHTML = "Edit";
        checkBox.type = "checkbox";
        todoBox.classList.add("todo-box");
        delButton.classList.add("del-button");
        checkBox.classList.add("check-box");
        textBox.classList.add("text-box");

        checkBox.addEventListener("change", function () {
            if (checkBox.checked) {
                textBox.classList.add("completed");
            } else {
                textBox.classList.remove("completed");
            }
        });

        delButton.addEventListener("click", () => deleteTodo(todo.id));

        todoBoxLeft.appendChild(textBox);
        todoBoxRight.appendChild(checkBox);
        todoBoxRight.appendChild(delButton);
        todoBox.appendChild(todoBoxLeft);
        todoBox.appendChild(todoBoxRight);

        todoBox.setAttribute("id", todo.id);
        todoSpace.appendChild(todoBox);
    }
}
