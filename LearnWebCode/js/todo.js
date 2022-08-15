let toDo = document.getElementById("toDo")
let toDoEntry = document.getElementById("toDoEntry")
let toDoItems = document.getElementById("toDoItems")

toDo.addEventListener("submit", (e) => {
  e.preventDefault() //prevents me from being sent off to random non functional page
  createToDo(toDoEntry.value)
})

function createToDo(toDoItem) {
  let toDoHTML = `<li>${toDoItem} <button onclick="deleteToDo(this)">Done!</button></li>`
  toDoItems.insertAdjacentHTML("beforeend", toDoHTML)
  toDoEntry.value = ""
  toDoEntry.focus()
}

function deleteToDo(toDoDelete) {
  toDoDelete.parentElement.remove()
}