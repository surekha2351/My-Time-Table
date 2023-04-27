const form = document.querySelector('form');
const table = document.querySelector('table');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskNameInput = document.querySelector('#taskName');
    const startTimeInput = document.querySelector('#startTime');
    const endTimeInput = document.querySelector('#endTime');

    const taskName = taskNameInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    if (taskName.trim() === '' || startTime === '' || endTime === '') {
        alert('Please fill out all fields.');
        return;
    }

    const newRow = document.createElement('tr');

    const taskNameCell = document.createElement('td');
    taskNameCell.textContent = taskName;

    const startTimeCell = document.createElement('td');
    startTimeCell.textContent = startTime;

    const endTimeCell = document.createElement('td');
    endTimeCell.textContent = endTime;

    newRow.appendChild(taskNameCell);
    newRow.appendChild(startTimeCell);
    newRow.appendChild(endTimeCell);

    table.appendChild(newRow);

    taskNameInput.value = '';
    startTimeInput.value = '';
    endTimeInput.value = '';
});