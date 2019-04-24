
// review task lister
// event bubbling/delegation
// nested event handlers


document.addEventListener("DOMContentLoaded", () => {

 // Need user input
 const taskInput = document.querySelector("#new-task-description")
//  console.log(taskDesc)
// Need the form
 const taskForm = document.querySelector("#create-task-form")

// listen to when the form is submitted

 taskForm.addEventListener('submit', function(e) {
     e.preventDefault()
    const newTask = taskInput.value

    // where do i want to add
     // want to add to list
     const list = document.querySelector("#tasks")
     const newLi = document.createElement('li')
     newLi.innerText = newTask

     const deleteButton = document.createElement('button')
     deleteButton.innerText = 'x'

    list.appendChild(newLi)
    newLi.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(e){
        newLi.remove()
    })
    taskForm.reset()

 })


 const buttonParent = document.querySelector('#button-mommy')

 buttonParent.addEventListener('click', function(e){
     console.log('somewherein the parent')
     if (e.target.id === "alert") {
         console.log('only alert')
     }
 })
});
