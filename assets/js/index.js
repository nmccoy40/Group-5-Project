let task1 = new TaskManager();
task1.addTask('clean room', 'make bed', 'JP', '11/16/2022', 'TODO');
task1.addTask('clean living room', 'vacuum', 'JP', '11/16/2022', "TODO");
console.log(task1.tasks);
 
let taskHtml = createTaskHtml('Take out trash', 'take trash to front of house', 'nick', '11/15/2022', "TODO");
console.log(taskHtml);
 
function validFormFieldInput(data) {
    const inputName = document.querySelector('#inputName');
    const name = inputName.value;
    const inputDescription = document.querySelector('#inputDescription');
    const description = inputDescription.value;
    const inputAssignedTo = document.querySelector('#inputAssignedTo');
    const assignedTo = inputAssignedTo.value;
    const inputDate = document.querySelector('#inputDate');
    const dueDate = inputDate.value;
    const inputStatus = document.querySelector('#inputStatus');
    const status = inputStatus.value;
 
    console.log(`name ${name}`);
    console.log(`description ${description}`);
    console.log(`assigned to: ${assignedTo}`);
    console.log(`date: ${dueDate}`);
    console.log(`status ${status}}`);
 
    if (name == '' || description == '' || assignedTo == '' || dueDate == '') {
        window.alert('Invlaid input submission');
        return false;
    } else {
        task1.addTask(name, description, assignedTo, dueDate, status);
        console.log(task1.tasks);
    }
}
 
let btnsubmit = document.querySelector('#submitbtn');
btnsubmit.onclick = validFormFieldInput();