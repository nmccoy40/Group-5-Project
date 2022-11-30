let task1 = new TaskManager();
task1.addTask('clean room', 'make bed', 'JP', '11/16/2022', 'TODO');
task1.addTask('clean living room', 'vacuum', 'JP', '11/16/2022', "TODO");
console.log(task1.tasks);
 
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
       task1.render();
        console.log(task1.tasks);
        inputName.value = '';
        inputDescription.value = '';
        inputAssignedTo.value = '';
        inputDate.value = '';
        inputStatus.value = '';
});
 