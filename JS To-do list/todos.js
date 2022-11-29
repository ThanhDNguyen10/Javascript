const tasks = ['Add','List','Delete'];
let taskList = ''; 

let list = []

for (let x =0; x<tasks.length; x++) {
    taskList += `\n ${x+1}: ${tasks[x]}` 
}

let input = prompt("Enter task number or q to quit?"+ taskList)

while(input !== 'q') {
    switch (input) {
        case '1': 
            addTask()
            break;
        case '2':
            listTask()
            break;
        case '3':
            deleteTask() 
            break;
        default:
            break;
    }
    input = prompt("Enter task number or q to quit??"+ taskList)
}

console.log("You have exit out.")

function addTask() {
    let todo = prompt("Enter list:")
    list.push(todo)
}

function listTask() {
    for (let output of list) {
    console.log(output)
    }
}

function deleteTask() {
    let remove = parseInt(prompt("Enter index you want to remove:"))
    if (!Number.isNaN(remove)) {
        //console.log(`Removed: ${list[remove]}`)
        const removed =list.splice(remove,1)
        console.log(`Removed: ${removed[0]}`)
    } else {
        console.log("Invalid index")
    }
}