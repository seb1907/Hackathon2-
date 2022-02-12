// import {log_in} from './login.js';
// import {setFormMessage,setInputError,clearInputError,x } from './login_js.js';

// log_in() , setFormMessage(),setInputError(), clearInputError(),x;

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
function Add() {
    console.log('add selected')
    createElement()
}
function eraseAll(){
    console.log('erase all selected')
    var remv = document.getElementById('theCell')
        remv.remove()

    
}


let received  = document.getElementById('recieved')
let withdrawn = document.getElementById('withdrawn')
let update    = document.getElementById('update')
let supliers  = document.getElementById('supp_list')
let userlist  = document.getElementById('user_list')
let todolist  = document.getElementById('todo_list')
let add       = document.getElementById('addButton')
let erase2   = document.getElementById('removeButton')

received.onclick = receivedProducts
withdrawn.onclick = withdrawnProducts
update.onclick = stockUpdate
supliers.onclick= suppliers
userlist.onclick = usersList
todolist.onclick = todoList
add.onclick = Add
erase2.onclick = eraseAll



let box
function createElement() {
    box = document.createElement('div');
    box.setAttribute('class', 'add_item');
    box.setAttribute('id', 'theCell');
  
    isItem()
    itemsNumber()
     box.innerText = "Item: "+ item1 + "\n"+ "Item Number: " + num1 
    
    
    console.log(box)
    // let cell = document.getElementById('cell1')
    if(document.getElementById('cell1').innerHTML.trim().length == 0){
    
        let cell1 =document.getElementById('cell1')
        cell1.appendChild(box)
       localStorage.setItem('test1', box.innerHTML)
    //    document.getElementById('cell1').innerHTML = localStorage.getItem('test1')

   
    }
    else if(document.getElementById('cell2').innerHTML.trim().length == 0) {
        let cell2 = document.getElementById('cell2')
        cell2.appendChild(box)
        localStorage.setItem('test2', box.innerHTML)
        
    }
    else if(document.getElementById('cell3').innerHTML.trim().length == 0) {
        let cell3 = document.getElementById('cell3')
        cell3.appendChild(box)
        localStorage.setItem('test3', box.innerHTML)
       
    }
    else if(document.getElementById('cell4').innerHTML.trim().length == 0) {
        let cell4 = document.getElementById('cell4')
        cell4.appendChild(box)
        localStorage.setItem('test4', box.innerHTML)
    }
    else if(document.getElementById('cell5').innerHTML.trim().length == 0) {
        let cell5 = document.getElementById('cell5')
        cell5.appendChild(box) 
        localStorage.setItem('test5', box.innerHTML) 
    }
    else if(document.getElementById('cell6').innerHTML.trim().length == 0) {
        let cell6 = document.getElementById('cell6')
        cell6.appendChild(box)  
        localStorage.setItem('test6', box.innerHTML)
    }
    else if(document.getElementById('cell7').innerHTML.trim().length == 0) {
        let cell7 = document.getElementById('cell7')
        cell7.appendChild(box)  
        localStorage.setItem('test7', box.innerHTML)
    }
    else if(document.getElementById('cell8').innerHTML.trim().length == 0) {
        let cell8 = document.getElementById('cell8')
        cell8.appendChild(box)  
        localStorage.setItem('test8', box.innerHTML)
    }
    else if(document.getElementById('cell9').innerHTML.trim().length == 0) {
        let cell9 = document.getElementById('cell9')
        cell9.appendChild(box)  
        localStorage.setItem('test9', box.innerHTML)
    }
    else if(document.getElementById('cell10').innerHTML.trim().length == 0) {
        let cell10 = document.getElementById('cell10')
        cell10.appendChild(box)  
        localStorage.setItem('test10', box.innerHTML)
    }
    else if(document.getElementById('cell11').innerHTML.trim().length == 0) {
        let cell11 = document.getElementById('cell11')
        cell111.appendChild(box) 
        localStorage.setItem('test11', box.innerHTML) 
    }
    else if(document.getElementById('cell12').innerHTML.trim().length == 0) {
        let cell12 = document.getElementById('cell12')
        cell12.appendChild(box)  
        localStorage.setItem('test12', box.innerHTML)
    }
    else if(document.getElementById('cell13').innerHTML.trim().length == 0) {
        let cell13= document.getElementById('cell13')
        cell13.appendChild(box)  
        localStorage.setItem('test13', box.innerHTML)
    }
    else if(document.getElementById('cell14').innerHTML.trim().length == 0) {
        let cell14 = document.getElementById('cell14')
        cell14.appendChild(box)  
        localStorage.setItem('test14', box.innerHTML)
    }
    else if(document.getElementById('cell15').innerHTML.trim().length == 0) {
        let cell15 = document.getElementById('cell15')
        cell15.appendChild(box)  
        localStorage.setItem('test15', box.innerHTML)
    }
    else if(document.getElementById('cell16').innerHTML.trim().length == 0) {
        let cell16 = document.getElementById('cell16')
        cell16.appendChild(box)  
        localStorage.setItem('test16', box.innerHTML)
    }
    else if(document.getElementById('cell17').innerHTML.trim().length == 0) {
        let cell17 = document.getElementById('cell17')
        cell17.appendChild(box)  
        localStorage.setItem('test17', box.innerHTML)
    }
    else if(document.getElementById('cell18').innerHTML.trim().length == 0) {
        let cell18 = document.getElementById('cell18')
        cell18.appendChild(box) 
        localStorage.setItem('test18', box.innerHTML) 
    }
    else if(document.getElementById('cell19').innerHTML.trim().length == 0) {
        let cell19 = document.getElementById('cell19')
        cell19.appendChild(box)  
        localStorage.setItem('test19', box.innerHTML)
    }
    else if(document.getElementById('cell20').innerHTML.trim().length == 0) {
        let cell20 = document.getElementById('cell20')
        cell20.appendChild(box)  
        localStorage.setItem('test20', box.innerHTML)
    }
    else if(document.getElementById('cell21').innerHTML.trim().length == 0) {
        let cell21 = document.getElementById('cell21')
        cell21.appendChild(box)  
        localStorage.setItem('test21', box.innerHTML)
    }
    else if(document.getElementById('cell22').innerHTML.trim().length == 0) {
        let cell22 = document.getElementById('cell22')
        cell22.appendChild(box)  
        localStorage.setItem('test22', box.innerHTML)
    }
    else if(document.getElementById('cell23').innerHTML.trim().length == 0) {
        let cell23 = document.getElementById('cell23')
        cell23.appendChild(box)  
        localStorage.setItem('test23', box.innerHTML)

    }
    else if(document.getElementById('cell24').innerHTML.trim().length == 0) {
        let cell24 = document.getElementById('cell24')
        cell24.appendChild(box) 
        localStorage.setItem('test24', box.innerHTML)

    }
    else if(document.getElementById('cell25').innerHTML.trim().length == 0) {
        let cell25 = document.getElementById('cell25')
        cell25.appendChild(box) 
        localStorage.setItem('test25', box.innerHTML) 
    }
    else if(document.getElementById('cell26').innerHTML.trim().length == 0) {
        let cell26 = document.getElementById('cell26')
        cell26.appendChild(box)  
        localStorage.setItem('test26', box.innerHTML)

    }
    else if(document.getElementById('cell27').innerHTML.trim().length == 0) {
        let cell27= document.getElementById('cell27')
        cel27.appendChild(box)  
        localStorage.setItem('test27', box.innerHTML)

    }
    else if(document.getElementById('cell28').innerHTML.trim().length == 0) {
        let cell28 = document.getElementById('cell28')
        cell28.appendChild(box) 
        localStorage.setItem('test28', box.innerHTML)

    }
    else if(document.getElementById('cell29').innerHTML.trim().length == 0) {
        let cell29 = document.getElementById('cell29')
        cell29.appendChild(box)  
        localStorage.setItem('test29', box.innerHTML)

    }
    else if(document.getElementById('cell30').innerHTML.trim().length == 0) {
        let cell30 = document.getElementById('cell30')
        cell30.appendChild(box)  
        localStorage.setItem('test30', box.innerHTML)

    }
}
    // cell.appendChild(box)
    // if(cell.appendChild(box) == true){
    //     let cell1 = document.getElementById('cell2')
    //     cell1.appendChild(box)
   
    // }
    // function eraseCell(){
    // let erase =  document.createElement('button');
    // erase.innerText = "Erase";
    // erase.addEventListener('click', function(){
    //     cell.removeChild(box);
    // });
    // box.appendChild(erase);
    // } 
  
 // function eraseCell(cell){
//     let erase =  document.createElement('button');
//     erase.innerText = "Erase";
//     erase.addEventListener('click', function(){
//         cell.removeChild(box);
//         cell1.removeChild(box);
//     });
//     box.appendChild(erase);
// } 



let num;
let num1;
function itemsNumber(){
    for (let i = 0; i<1000; i++){
    num = prompt('How many items are you setting?')
     num1 = parseInt(num)
    if (Number(num1)){
        
        break
    }
    else if (isNaN(num1)){
        alert('Not a number , insert again ')

    }
    }
};


let item;
let item1;
let erase1
function isItem(){
    item = prompt('What is the name of the item? ')
    item1 = item.toUpperCase()
};

// function ifErase(){
//     let erase = prompt ('You want to remove this item ? \n Reply by yes or no ')
//      erase1 = erase.toUpperCase()}

//WITHDRAWN PAGE!
let get_all = document.getElementById('getButton')
 get_all.onclick = getAll
 
function getAll(){
    console.log('selected')
    let cell31 = document.getElementById('cell31').innerHTML = localStorage.getItem('test1')
    let cell32 = document.getElementById('cell32').innerHTML = localStorage.getItem('test2')
    let cell33 = document.getElementById('cell33').innerHTML = localStorage.getItem('test3')
    let cell34 = document.getElementById('cell34').innerHTML = localStorage.getItem('test4')
    let cell35 = document.getElementById('cell35').innerHTML = localStorage.getItem('test5')
    let cell36 = document.getElementById('cell36').innerHTML = localStorage.getItem('test6')
    let cell37 = document.getElementById('cell37').innerHTML = localStorage.getItem('test7')
    let cell38 = document.getElementById('cell38').innerHTML = localStorage.getItem('test8')
    let cell39 = document.getElementById('cell39').innerHTML = localStorage.getItem('test9')
    let cell40 = document.getElementById('cell40').innerHTML = localStorage.getItem('test10')
    let cell41 = document.getElementById('cell41').innerHTML = localStorage.getItem('test11')
    let cell42 = document.getElementById('cell42').innerHTML = localStorage.getItem('test12')
    let cell43 = document.getElementById('cell43').innerHTML = localStorage.getItem('test13')
    let cell44 = document.getElementById('cell44').innerHTML = localStorage.getItem('test14')
    let cell45 = document.getElementById('cell45').innerHTML = localStorage.getItem('test15')
    let cell46 = document.getElementById('cell46').innerHTML = localStorage.getItem('test16')
    let cell47 = document.getElementById('cell47').innerHTML = localStorage.getItem('test17')
    let cell48 = document.getElementById('cell48').innerHTML = localStorage.getItem('test18')
    let cell49 = document.getElementById('cell49').innerHTML = localStorage.getItem('test19')
    let cell50 = document.getElementById('cell50').innerHTML = localStorage.getItem('test20')
    let cell51 = document.getElementById('cell51').innerHTML = localStorage.getItem('test21')
    let cell52 = document.getElementById('cell52').innerHTML = localStorage.getItem('test22')
    let cell53 = document.getElementById('cell53').innerHTML = localStorage.getItem('test23')
    let cell54 = document.getElementById('cell54').innerHTML = localStorage.getItem('test24')
    let cell55 = document.getElementById('cell55').innerHTML = localStorage.getItem('test25')
    let cell56 = document.getElementById('cell56').innerHTML = localStorage.getItem('test26')
    let cell57 = document.getElementById('cell57').innerHTML = localStorage.getItem('test27')
    let cell58 = document.getElementById('cell58').innerHTML = localStorage.getItem('test28')
    let cell59 = document.getElementById('cell59').innerHTML = localStorage.getItem('test29')
    let cell60 = document.getElementById('cell60').innerHTML = localStorage.getItem('test30')

   
}
















    
    //  let value = localStorage.getItem('test1')
    //  console.log(value)
    //  console.log(box  
    //  cell31.appendChild(value)
       

  
//  if(document.getElementById('cell31').innerHTML.trim().length == 0){
    
//     let cell31 =document.getElementById('cell31')
//    let y= cell31.appendChild(localStorage.getItem('input'))
   
//  }
