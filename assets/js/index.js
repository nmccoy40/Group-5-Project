let task1 = new TaskManager();
console.log(task1.tasks);
task1.load();
task1.render();
 
let taskHtml = createTaskHtml('Take out trash', 'take trash to front of house', 'nick', '11/15/2022', "TODO");
console.log(taskHtml);
 
let btnsubmit = document.querySelector('#submitbtn');
btnsubmit.addEventListener('click', () => {
    const inputName = document.getElementById('inputName');
    let name = inputName.value;
    const inputDescription = document.querySelector('#inputDescription');
    let description = inputDescription.value;
    const inputAssignedTo = document.querySelector('#inputAssignedTo');
    let assignedTo = inputAssignedTo.value;
    const inputDate = document.querySelector('#inputDate');
    let dueDate = inputDate.value;
    const inputStatus = document.querySelector('#inputStatus');
    let status = inputStatus.value;
 
    console.log(`name ${name}`);
    console.log(`description ${description}`);
    console.log(`assigned to: ${assignedTo}`);
    console.log(`date: ${dueDate}`);
    console.log(`status ${status}}`);
 
        task1.addTask(name, description, assignedTo, dueDate, status);
        task1.save();
       task1.render();
        console.log(task1.tasks);
        inputName.value = '';
        inputDescription.value = '';
        inputAssignedTo.value = '';
        inputDate.value = '';
        inputStatus.value = '';
});
 
let tasksList = document.querySelector('#taskList');
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-btn')){
        let parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);
        let taskId = Number(parentTask.id);
        console.log(taskId);
        let task = task1.getTaskById(taskId);
        task.status = 'DONE';
        task1.save();
        task1.render();
    }
    if (event.target.classList.contains('deletebtn')) {
        let parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);
        let taskId = Number(parentTask.id);
        console.log(taskId);
        task1.deleteTask(taskId);
        task1.save();
        task1.render();
    }
})

task1.save();