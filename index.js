var form = document.querySelector('.form');
var inp = document.querySelector('.inp');
var todolist = document.querySelector('.todolist');



var todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit',function (e) {
    e.preventDefault()
    addTodo()
})



function addTodo(todo) {
  var todoText = inp.value;
    if(todo){
        todoText = todo.text;
    }
    if(todoText){
        var todoEl = document.createElement('li');
        var icon = document.createElement('i');
        icon.setAttribute('class','fas fa-trash')
        todoEl.innerHTML = todoText;
        todoEl.addEventListener('click',() => {
            todoEl.classList.toggle('done')
            updateLS()
        })
        icon.addEventListener('click',(e) => {
            e.preventDefault()
            todoEl.remove()
            icon.remove()
            updateLS()
        })
        todolist.appendChild(todoEl);
        todolist.appendChild(icon)
        inp.value ='';
        updateLS()
    }

}


function updateLS() {
    var todosEl = document.querySelectorAll('li');
    var todos =  [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('done')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))
}