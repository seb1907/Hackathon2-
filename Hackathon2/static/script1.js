function recievedProducts() {
    console.log('Recieved Products Selected')    
}
function withdrawnProducts() {
    console.log('Withdrawn Products Selected')
}
function stockUpdate() {
    console.log('Update Stock Selected')
}

function suppliers() {
    console.log('suppliers list')
}
function usersList() {
    console.log('User List')
}
function todoList() {
    console.log('To Do List')
}

let recieved = document.getElementById('recieved')
let withdrawn = document.getElementById('withdrawn')
let update = document.getElementById('update')
let supliers = document.getElementById('supp_list')
let userlist = document.getElementById('user_list')
let todolist = document.getElementById('todo_list')

recieved.onclick = recievedProducts
withdrawn.onclick = withdrawnProducts
update.onclick = stockUpdate
supliers.onclick= suppliers
userlist.onclick = usersList
todolist.onclick = todoList
