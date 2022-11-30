let createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `
    <li class="list-group-item">
                <div class="card" style="width: 32rem;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${assignedTo}</h6>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${dueDate}</p>
                        <p class="card-text">${status}</p>
                        <div class="btns mx-auto" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-success done-btn"><i class="fa fa-check"></i></button>
                            <button type="button" class="btn btn-outline-danger trash-btn"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
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
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, currentTask.dueDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
        }
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('taskList').innerHTML = tasksHtml;
    }
}
 
console.log(TaskManager.tasks)


