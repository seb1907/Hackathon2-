import {log_in} from './login.js';
import {setFormMessage,setInputError,clearInputError,x } from './login_js.js';

log_in() , setFormMessage(),setInputError(), clearInputError(),x;

function receivedProducts() {
    console.log('received products')
    fetch('/result')
    .then(function (response){
        return ('http://127.0.0.1:5001/result');
    })

     
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

let received = document.getElementById('recieved')
let withdrawn = document.getElementById('withdrawn')
let update = document.getElementById('update')
let supliers = document.getElementById('supp_list')
let userlist = document.getElementById('user_list')
let todolist = document.getElementById('todo_list')

received.onclick = receivedProducts
withdrawn.onclick = withdrawnProducts
update.onclick = stockUpdate
supliers.onclick= suppliers
userlist.onclick = usersList
todolist.onclick = todoList
