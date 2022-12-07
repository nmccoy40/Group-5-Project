let createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const html = `
    <li id=${id} class="list-group-item">
                <div class="card" style="width: 32rem;">
                    <div class="card-body row">
                        <div class="col-md-9">
                            <h5 class="card-title">${name}</h5>
                        </div>
                        <div class="col-md-2">
                            <p class="status card-subtitle">${status}</p>
                        </div>
                        <hr>
                        <div class="col-md-9">
                            <h6 class="card-subtitle mb-2 text-muted">${assignedTo}</h6>
                        </div>
                        <div class="col-md-3">
                            <p class="card-text">${dueDate}</p>
                        </div>
                        <div id="descriptiontext" class="col-md-12">
                            <p class="card-text">${description}</p>
                        </div>
                        <div class="btns col-4 mx-auto" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-success done-btn"><i class="fa fa-check"></i></button>
                            <button type="button" class="btn btn-outline-danger delete-btn"><i class="fa fa-trash"></i></button>
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
            let taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, currentTask.dueDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
        }
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('taskList').innerHTML = tasksHtml;
    }
    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id == taskId) {
                foundTask = task;
            }
        }
        return foundTask;
    }
    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        const currentId = this.currentId.toString();
        localStorage.setItem('currentId', currentId);
    }
    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }
        if (localStorage.getItem('currentId')){
             const currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
        }
    }
    deleteTask(taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id !== taskId) {
                newTasks.push(task);
            }
            this.tasks = newTasks;
        }
    }
}
 
console.log(TaskManager.tasks)


