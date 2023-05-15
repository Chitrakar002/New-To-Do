const textbox = document.getElementById('textbox');
const add = document.getElementById('btn1');
const box = document.querySelector('.box2');
const historyBtn = document.getElementById('btn3');
const box3 = document.querySelector('.box3');
const allItems = [];
const historyItem = [];
 // array create for store 
// elements
function toDoLoader(newItem){ // function declaration
    const temp = {}; // object creation
    temp.newItem =  newItem; // store newItem as Object
    return temp;
}
function arrange(){
allItems.forEach((toDoLoader)=>{
    box.innerHTML += `<div class="item"><h2>${toDoLoader.newItem}</h2>
    <input type="button" value ="Done" class="btn2">
    </div>`;
})
}
function newData(){
    if(textbox.value === ' ') return;
    allItems.push(toDoLoader(textbox.value));
    box.innerHTML= "  ";
    arrange();
    done();
    textbox.value = " ";

    // console(allItems);
    
}
function done(){
    const doneBtn = document.querySelectorAll('.btn2');
    doneBtn.forEach((ele,index)=>{
        ele.addEventListener('click',()=>{
           historyItem.push(allItems.splice(index,1));
            // console.log(index);
            console.log(historyItem);
            box.innerHTML=" ";
            arrange();
            done();
        })
    });
}
add.addEventListener('click',newData);
// function deleteItem(){
//     allItems.forEach((toDoLoader)=>{
//         box.innerHTML += `<div class="delItem"><h2>${toDoLoader.newItem}</h2>
//         </div>`;
//     })
// history.addEventListener('click',deleteItem);