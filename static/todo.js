const initData = [
    {
        id:1,activity:"Learn Geant4 and C++",
    },{
        id:2,activity:"Move data analysis scripts to R",
    },{
        id:3,activity:"Vacuum clean apartment",
    },{
        id:4,activity:"Cook dinner",
    },{
        id:5,activity:"Read a book"
    },
];
const days =["日","月","火","水","木","金","土"];
//const monty = ["Jan","Feb",Mar,Apr,"May","Jun","Jul"];
/* Create the main container and the unordered todo list */
mainDiv = document.getElementById("lists");
todoDiv = document.createElement("div");
todoDiv.className = "column";
todoList = document.createElement("div");  //("todo_list");
todoHeader = document.createElement("div");
todoHeader.className = "header";
let text = "<h2>To Do List</h2><input type='text' id='my_task' placeholder='Input Task'>";
text += "<span onclick='newTask()' class='addBtn' id='addBtn'>Add</span>";
todoHeader.innerHTML = text;
todoDiv.appendChild(todoHeader);

doingDiv = document.createElement("div");
doingDiv.className = "column";
doingList = document.createElement("div"); //getElementById("doing_list");

ulList = document.createElement("UL");//from TODO list
ulList.id = "todoList";
for(let item in initData){
    liElm = document.createElement("LI");
    liElm.innerText = initData[item].activity;
    ulList.appendChild(liElm);
}

todoList.appendChild(ulList);
todoDiv.appendChild(todoList)
mainDiv.appendChild(todoDiv);

function export_to_file(jsonData){
    const dataStr = JSON.stringify(jsonData);
    const dataUri = 'data:application/json;charset=utf-8,'+encodeURIComponent(dataStr);
    const exportFile = "todo.json";

    const linkElm = document.getElementById("downLink")
    linkElm.setAttribute('href',dataUri);
    linkElm.setAttribute('download',exportFile);
    //linkElm.click();//downloads a file every update
}
/* The following code is from 
https://www.w3schools.com/howto/howto_js_todolist.asp 
I implemented some features*/
// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");

function deleteElm(){
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const thisTask = this.parentElement;
            thisTask.style.display = "none";
        }
    }
}

// Create a "close" button and append it to each <li> list item
const myNodelist = mainDiv.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    deleteElm();
}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
let clickCount = 0;
ulList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        doingTask(clickCount);//Sends info to doing List
        console.log("clicks",clickCount);
        clickCount ++;
    }
}, false);

/* Append keyup eventListener to input */
const inputTag = document.getElementById("my_task");
inputTag.addEventListener('keyup',function(e){
    if (e.key === 'Enter'){
        e.preventDefault();
        document.getElementById("addBtn").click();
    }
});
// Create a new list item when clicking on the "Add" button
function newTask() {
    const li = document.createElement("li");
    let inputValue = inputTag.value;
    const addNode = document.createTextNode(inputValue);
    li.appendChild(addNode);

    if (inputValue === ''){
        alert("You must write something!");
    }else {
        document.getElementById("todoList").appendChild(li);
    }
    inputTag.value = "";
  
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    deleteElm();
}
//Add checked task to doing list

doingUL = document.createElement("UL");
doingUL.setAttribute("id","doingList");

function doingTask(idx){
    /* Fetched all checked li from todoList */
    const todoli = document.getElementsByClassName("checked");
    const doingLI = document.createElement("LI");
    doingLI.innerText = todoli[idx].innerText.replace('\n','').slice(0,-1);
    console.log(todoli,todoli[idx].innerText);
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    doingLI.appendChild(span);
    doingUL.appendChild(doingLI);
    doingList.appendChild(doingUL);
    deleteElm();//add click event listener
}
/* The following should be a function */
let clicks = 0;
doingUL.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        // doingTask(clickCount);//Sends info to doing List
        console.log("clicks",clicks);
        clicks ++;
    }
}, false);

const newDate = new Date();
const myDate = newDate.getFullYear() +"年"+ (newDate.getMonth()+1) + "月" + 
newDate.getDate() + "日 ("+ days[newDate.getDay()] + ")";
doingTitle = document.createElement("div");
doingTitle.innerHTML = "<h2>Doing List<br>" + myDate + "</h2>";
doingTitle.className = "header";
doingDiv.appendChild(doingTitle);
doingDiv.appendChild(doingList);
mainDiv.appendChild(doingDiv);
const pInfo = document.createElement("div");
pInfo.setAttribute("class","align-right");
pInfo.innerHTML = "<p>When a task is done dismiss it by clicking on the X button</p>";
pInfo.style.padding = "10px";
mainDiv.appendChild(pInfo);

let todo = [];
let temp_data;
let check_value = false;
const todo_items = document.getElementById("todoList");

for (let idx=0;idx < todo_items.childNodes.length; idx++){
    console.log("todoL",idx,todo_items.childNodes[idx].firstChild.data);
    if (todo_items.childNodes[idx].classList.value == "checked"){
        check_value = true
    } 
    temp_data = {"task":todo_items.childNodes[idx].firstChild.data,"checked":check_value};
    todo.push(temp_data);
}

let doing = [];
temp_data = {"task":"Cook lunch","checked":true};
doing.push(temp_data);
temp_data = {"todo":todo,"doing":doing};
export_to_file(temp_data);
const dLink = document.getElementById("downLink");
dLink.innerHTML = "<img src='../assets/download.svg' width='20'/>";
