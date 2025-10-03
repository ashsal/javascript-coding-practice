const prompt = require("prompt-sync")();
const toDoItems = [];
let exit = false;

while (!exit) {
  console.log(`You have below options
1. Press 1 to add To Do item
2. Press 2 to see all the items
3. Press 3 to remove an item
4. Exit
`);
  let userChoice = prompt("");

  // validation that user can only choose between 1,2,3,4
  userChoice = parseInt(userChoice);

  switch (userChoice) {
    case 1:
      const toDoItem = prompt("Please enter the ToDo item: ");
      toDoItems.push(toDoItem);
      break;
    case 2:
      for (let i = 0; i < toDoItems.length; i++) {
        console.log(i + 1, toDoItems[i]);
      }
      break;
    case 3:
      let toDoItemNumber = prompt(
        "Please enter the item number that you want to remove: "
      );
      //validate
      toDoItemNumber = parseInt(toDoItemNumber);
      toDoItems.splice(toDoItemNumber - 1, 1);
      break;
    case 4:
      exit = true;
      break;
    default:
      break;
  }
}
