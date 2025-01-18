let array = [
    {
        name: "Купить продукты",
        completed: true
    },
    {
        name: "Сделать домашнее задание",
        completed: true
    }
];

function displayTasks() {
    array.forEach(element => {
        if (element.completed) {
            console.log(`задача выполнена, ${element.name}`);
        } else {
            console.log(`задача не выполнена, ${element.name}`);
        }
    });
}
function addArray(nameArray) {
    if (!nameArray || nameArray.trim() === "") {
        console.log("Название задачи не может быть пустым");
        return
    }

    const newArray = {
        name: nameArray,
        completed: false
    }

    array.push(newArray)
    console.log(`Задача ${nameArray} добавлена`);
}

function removeTask(taskName) {
    const taskIndex = array.findIndex(task => task.name === taskName);

    if (taskIndex === -1) {
        console.log(`Задача "${taskName}" не найдена.`);
        return;
    }

    array.splice(taskIndex, 1);
    console.log(`Задача "${taskName}" удалена.`);
}

function taskCompleted(taskName) {
    const taskIndex = array.findIndex(task => task.name === taskName);
  
    if (taskIndex === -1) {
        console.log(`Задача "${taskName}" не найдена.`);
        return;
    }
     array[taskIndex].completed = true;
      console.log(`Задача "${taskName}" отмечена как выполненная.`);
}


taskCompleted("Купить продукты")      
removeTask("Сделать домашнее задание")
addArray("Выучить JavaScript")
displayTasks()
