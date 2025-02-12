document.addEventListener('DOMContentLoaded', () => {
    const taskTitle = document.getElementById('taskTitle');
    const taskDesc = document.getElementById('taskDesc');
    const saveTask = document.getElementById('saveTask');
    const tableBody = document.getElementById('tableBody');

    saveTask.addEventListener('click', () => {
        const title = taskTitle.value.trim();
        const desc = taskDesc.value.trim();

        if (title !== '' && desc !== '') {
            const newRow = tableBody.insertRow();
            const titleCell = newRow.insertCell();
            const descCell = newRow.insertCell();
            const deleteCell = newRow.insertCell();

            titleCell.textContent = title;
            descCell.textContent = desc;
            deleteCell.innerHTML = '<button class="delete-btn"><i class="fas fa-trash-alt"></i></button>';

            
            deleteCell.querySelector('.delete-btn').addEventListener('click', () => {
                tableBody.deleteRow(newRow.rowIndex - 1); 
            });

            
            taskTitle.value = '';
            taskDesc.value = '';
        } else {
          alert("Please fill out this field."); 
        }
    });
});