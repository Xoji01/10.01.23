fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {

    
    const falseCount = data.filter(item => item.completed === false).length;
    document.getElementById('false-count').innerText = ` HI, YOU HAVE ${falseCount} UNDONE TASKS`;
    // Создаем контейнер для todo список
    const todoContainer = document.createElement('div');
    
    todoContainer.classList.add('todo-container');
    // ww.classList.add('aa')
    
    // Проходимся по каждому элементу данных
    data.forEach(todo => {
        // Создаем блок для каждого todo
        const todoBlock = document.createElement('div');
        todoBlock.classList.add('todo-block');
        
        // Создаем checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox');
        checkbox.checked = todo.completed;
        if (todo.completed) {
          checkbox.style.backgroundColor = 'orange';
        }
           // Если свойство "completed" равно true, то ставим галочку
        // if (todo.completed) {
        //     checkbox.checked = true;
        // }
        
        // Создаем элемент списка для каждого todo
        const todoItem = document.createElement('span');
        todoItem.classList.add('todo-item');
        
        // Задаем текст для элемента списка
        todoItem.innerText = todo.title;
        // Добавляем checkbox в блок todo
        todoBlock.appendChild(checkbox);
        // const ww = document.createElement('p')
        // qw.appendChild(ww)
        // ww.innerHTML = todo.id
        // var last = todo[todo.length - 1]
        // document.getElementById('.qw').innerText = JSON.stringify(last);

        // Добавляем элемент списка в блок todo
        todoBlock.appendChild(todoItem);
        
        // Добавляем блок todo в контейнер
        todoContainer.appendChild(todoBlock);
    });

    // Добавляем контейнер на страницу
    document.body.appendChild(todoContainer);
  })
  .catch(error => console.log(error));