fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    const falseCount = data.filter(item => item.completed === false).length;
    document.getElementById('false-count').innerText = ` HI, YOU HAVE ${falseCount} UNDONE TASKS`;
    
    const todoContainer = document.createElement('div');
    
    todoContainer.classList.add('todo-container');
    data.forEach(todo => {
        const todoBlock = document.createElement('div');
        todoBlock.classList.add('todo-block');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox');
        checkbox.checked = todo.completed;
        if (todo.completed) {
          checkbox.style.backgroundColor = 'orange';
        }
        const todoItem = document.createElement('span');
        todoItem.classList.add('todo-item');
        
        todoItem.innerText = todo.title;
        todoBlock.appendChild(checkbox);
        todoBlock.appendChild(todoItem);
        todoContainer.appendChild(todoBlock);
    });

    document.body.appendChild(todoContainer);
  })
  .catch(error => console.log(error));