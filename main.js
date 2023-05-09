const textbox = document.getElementById("textbox");
const btn1 = document.getElementById("btn1");
const item = document.querySelector(".item");
const box2 = document.querySelector(".box2");
const allItems = [];
function todo(itemName){
    const temp ={};
    temp.itemName = itemName;
    return temp;
}
function newData(){
    if(textbox.value===' ') return;
    allItems.push(todo(textbox.value));
    console.log(allItems);
    box2.innerHTML = " ";

    allItems.forEach((todo)=>{
        box2.innerHTML += `<div class="item"><h2>${todo.itemName}</h2>
        <input type="button" value="Done" id="btn2">
        </div>`
    

    })
    textbox.value = " ";

}
btn1.addEventListener('click',newData);