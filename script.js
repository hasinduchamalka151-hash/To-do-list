function addTask() {
    const input = document.getElementById('taskinput');
    const taskText = input.value.trim();

    if (taskText === '') return;

    const ul = document.getElementById('tasklist');

    // Skapa li-element
    const li = document.createElement('li');

    // Skapa innehålls-container
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    // Skapa checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (this.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    };

    // Skapa text-span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    taskContent.appendChild(checkbox);
    taskContent.appendChild(span);

    // Skapa radera-knapp (papperskorg)
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'delete';
    deleteBtn.onclick = function() {
        ul.removeChild(li);
    };

    // Lägg till allt i li-elementet
    li.appendChild(taskContent);
    li.appendChild(deleteBtn);

    // Lägg till i listan
    ul.appendChild(li);

    // Rensa inputfältet
    input.value = '';
}


