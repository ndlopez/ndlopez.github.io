initData = [
    {
        id:1,activity:"Cook dinner",
    },{
        id:2,activity:"Learn Geant4 and C++",
    },{
        id:3,activity:"Vacuum clean apartment",
    },{
        id:4,activity:"Read a book",
    },{
        id:5,activity:"Re-write resume and submit to マイナビ転職"
    },
];

/* Create the main container and the unordered todo list */
mainDiv = document.getElementById("lists");
todoDiv = document.createElement("div");
todoDiv.className = "column";
todoList = document.createElement("div");  //("todo_list");
todoHeader = document.createElement("div");
todoHeader.className = "header";
var text = "<h2>My Todo List</h2><input type='text' id='my_task' placeholder='Add Task'>";
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
    liElm.innerText=initData[item].activity;
    ulList.appendChild(liElm);
}

todoList.appendChild(ulList);
todoDiv.appendChild(todoList)
mainDiv.appendChild(todoDiv);
/* The following code is from 
https://www.w3schools.com/howto/howto_js_todolist.asp 
I implemented some features*/
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

function deleteElm(){
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var thisTask = this.parentElement;
            thisTask.style.display = "none";
        }
    }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    deleteElm();
}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
var clickCount = 0;
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
    var li = document.createElement("li");
    var inputValue = inputTag.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === ''){
        alert("You must write something!");
    }else {
        document.getElementById("todoList").appendChild(li);
    }
    inputTag.value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    deleteElm();
}
//Add checked task to doing list

doingUL = document.createElement("UL");

function doingTask(idx){
    var todoli = document.getElementsByClassName("checked");
    var doingLI = document.createElement("LI");
    doingLI.innerText = todoli[idx].innerText.replace('\n','').slice(0,-1);
    console.log(todoli,todoli[idx].innerText);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    //ulList.removeChild(ulList.children[whatChildren?]);
    doingLI.appendChild(span);
    doingUL.appendChild(doingLI);
    doingList.appendChild(doingUL);    
    deleteElm();//add click event listener
}
const days =["日","月","火","水","木","金","土"];
//const monty = ["Jan","Feb",Mar,Apr,"May","Jun","Jul"];
const newDate = new Date();
const myDate = newDate.getFullYear() +"年"+ (newDate.getMonth()+1) + "月" + 
newDate.getDate() + "日 ("+ days[newDate.getDay()] + ")";
doingTitle = document.createElement("div");
doingTitle.innerHTML = "<h2>Doing List<br>" + myDate + "</h2>";
doingTitle.className = "header";
doingDiv.appendChild(doingTitle);
doingDiv.appendChild(doingList);
mainDiv.appendChild(doingDiv);
var pInfo = document.createElement("div");
pInfo.setAttribute("class","align-right");
pInfo.innerHTML = "<p>When a task is done click on it or dismiss it by clicking on the X button</p>";
pInfo.style.padding = "10px";
mainDiv.appendChild(pInfo);
