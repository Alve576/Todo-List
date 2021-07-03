var form = document.querySelector('.form');
var inp = document.querySelector('.inp');

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
        todoEl.innerHTML = todoText;
        todoEl.addEventListener('click',() => {
            todoEl.classList.toggle('done')
            updateLS()
        })
        todoEl.addEventListener('contextmenu',(e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })
        document.body.appendChild(todoEl);
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