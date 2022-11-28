let createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `
    <li class="'list-group-item">
    <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5>${name}</h5>
        <span class="badge badge-danger">${status}</span>
    </div>
    <div class="d-flex w-100 mt-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
    </div>
    <p>${description}</p>
</li>
    `
    return html;
}
 
class TaskManager {
    constructor(tasks, currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate, status) {
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this.currentId++;
 
        let id = this.currentId;
 
        this.tasks.push(
            {
                id: this.currentId,
                name: name,
                description: description,
                assignedTo: assignedTo,
                dueDate: dueDate,
                status: status
            }
        );
    }
    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.dueDate);
            let formattedDate;
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, currentTask.formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
        }
        let taskHtml;
    }
}
 
console.log(TaskManager.tasks)


