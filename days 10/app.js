var todos = document.querySelector('.todos');
var form = document.querySelector('form');
var text = document.querySelector('input');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("ok");
    let val = text.value;
    if(val){
        addTodoElement({text: val});

        saveTodo();
    }
    text.value = "";
})

function addTodoElement(todo) {
    var li = document.createElement('li');
    li.innerHTML = `<span>${todo.text}</span>
    <i class="fa-regular fa-trash-can"></i>`;

    if(todo.status){
        li.setAttribute("class","complete");
    };

    li.addEventListener("click", function(e){
        this.classList.toggle("complete");
        saveTodo();
    });

    li.querySelector("i").addEventListener("click", function(e){
        this.parentElement.remove();
        saveTodo();
    });
    todos.appendChild(li);
}

function saveTodo(){
    let todoList = document.querySelectorAll("li");
    let todoStorage = [];

    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');
        todoStorage.push({
            text,
            status
        });
    });

    localStorage.setItem('todoList',JSON.stringify(todoStorage));
}

function init(){
    let data = JSON.parse(localStorage.getItem('todoList'));
    
    if(data){
        data.forEach(function(item){
            addTodoElement(item);
        });
    }
    
}

init();