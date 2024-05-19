function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = todoInput.value;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'todo-buttons';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-btn';
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
      todoItem.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      todoList.removeChild(todoItem);
    };

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);
    todoItem.appendChild(taskSpan);
    todoItem.appendChild(buttonsDiv);
    todoList.appendChild(todoItem);

    todoInput.value = '';
}
