class TaskManager {
    constructor(tasks, currentId = 0) {
        this.tasks = []
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
                status: 'TODO'
            }
        );
    }

    // get allTasks() {
    //     return this.tasks;
    // }
}
console.log(TaskManager.tasks)

let task0 = new TaskManager();
task0.addTask('clean room', 'make bed and vaccum', 'JP', '11/16/2022');
let task1 = new TaskManager();
task1.addTask('clean bathroom', 'clean tub and toilet', 'JP', '11/16/2022');
console.log(task0);
console.log(task1);
console.log(TaskManager.tasks);
