/* Parts of the following code are from 
https://www.w3schools.com/howto/howto_js_todolist.asp 
I implemented more features
*/
let todo_arr = [];
let doing_arr = [];
// const days =["日","月","火","水","木","金","土"];
// const monty = ["Jan","Feb",Mar,Apr,"May","Jun","Jul"];
let temp_data;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const newDate = new Date();
const myDate = newDate.toLocaleDateString("en-US",options);
/* Create the main container and the unordered todo list */
const mainDiv = document.getElementById("lists");
const todoDiv = document.createElement("div");
todoDiv.className = "column";
const todoList = document.createElement("div");  //("todo_list");
const todoHeader = document.createElement("div");
todoHeader.className = "header";
let text = "<h2>To Do List</h2><input type='text' id='my_task' placeholder='Input Task'>";
text += "<span onclick='newTask()' class='addBtn' id='addBtn'>Add</span>";
todoHeader.innerHTML = text;
todoDiv.appendChild(todoHeader);

const doingDiv = document.createElement("div");
doingDiv.className = "column";
const doingList = document.createElement("div"); //getElementById("doing_list");

const ulList = document.createElement("UL");//from TODO list
ulList.id = "todoList";
const doingUL = document.createElement("UL");
doingUL.setAttribute("id","doingList");

for(let item in todo_arr){
    const liElm = document.createElement("LI");
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

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
function deleteElm(){
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const thisTask = this.parentElement;
            // thisTask.remove();
            console.log("delThis",todo_arr[idx],idx);
            // delete todo_arr[idx];//prod empty slot
            // todo_arr.filter(Boolean);
           this.parentElement.remove();
           todo_arr.splice(idx,1);
           console.log("task",thisTask.firstChild.nodeValue,todo_arr);
            // thisTask.style.display = "none";
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

function zeroPad(amy){
    /* Append to int char -> 0 pad start */
    return String(amy).padStart(2,'0');
}
// Create a new list item when clicking on the "Add" button
function newTask() {
    const li = document.createElement("li");
    let curr_date = new Date();
    let inputValue = inputTag.value;
    const addNode = document.createTextNode(inputValue);
    li.appendChild(addNode);

    if (inputValue === ""){
        alert("You must write something!");
    }else {
        document.getElementById("todoList").appendChild(li);
        let zoey = {id:todo_arr.length,activity:inputValue,start_time:`${zeroPad(curr_date.getHours())}:${zeroPad(curr_date.getMinutes())}`};
        todo_arr.push(zoey);
        console.log("todoList",todo_arr)
    }
    inputTag.value = "";
  
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    // update todo and doing list
    temp_data = update_out();
    export_to_file(temp_data);
    deleteElm();
}
//Add checked task to doing list
function doingTask(idx){
    /* Fetched all checked li from todoList */
    const todoli = document.getElementsByClassName("checked");
    const doingLI = document.createElement("LI");
    
    if (typeof doingLI !== "undefined"){
        let curr_date = new Date();
        // doingLI.innerText = todoli[idx].innerText.replace('\n','').slice(0,-1);
        doingLI.innerText = todoli[idx].firstChild.nodeValue;
        //"remove" todo item
        // todoli[idx].remove();
        todoli[idx].style.display = "none";
        console.log(todoli,todoli[idx].innerText);
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        doingLI.appendChild(span);
        doingUL.appendChild(doingLI);
        let zoey = {id:idx, activity:todo_arr[idx].activity,
	 start_time:`${zeroPad(curr_date.getHours())}:${zeroPad(curr_date.getMinutes())}`,end_time:""};
        doing_arr.push(zoey);
        console.log("doing",doing_arr);
        temp_data = update_out();
        export_to_file(temp_data);
    }    
    deleteElm();//add click event listener
}

/* The following should be a function */
let clicks = 0;
doingUL.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        let curr_date = new Date();
        doing_arr[clicks]["end_time"] = `${zeroPad(curr_date.getHours())}:${zeroPad(curr_date.getMinutes())}`;
        // doingTask(clickCount);//Sends info to doing List
        console.log("doing clicks",clicks);
        clicks ++;
    }
}, false);

doingTitle = document.createElement("div");
doingTitle.innerHTML = "<h2>Doing List<br>" + myDate + "</h2>";
doingTitle.className = "header";
doingDiv.appendChild(doingTitle);
doingDiv.appendChild(doingList);
mainDiv.appendChild(doingDiv);
const pInfo = document.createElement("div");
pInfo.setAttribute("class","align-right");
pInfo.innerHTML = "<p>When a task is done dismiss it by clicking on it or on the X button</p>";
pInfo.style.padding = "10px";
mainDiv.appendChild(pInfo);

function update_out(){
    let todo = [], doing = [], check_value = false;
    let items = document.getElementById("todoList");
    for (let idx=0;idx < items.childNodes.length; idx++){
        // console.log("todoL",idx,items.childNodes[idx].firstChild);
        //.firstChild.data
        if (items.childNodes[idx].classList.value == "checked"){
            check_value = true;
        }else{ check_value = false;}
    }
    
    doingList.appendChild(doingUL);
    items = document.getElementById("doingList");
    for (idx =0; idx < items.childNodes.length;idx++){
        console.log("doing",idx,items.childNodes[idx]);
        if (items.childNodes[idx].classList.value == "checked"){
            check_value = true;
        }else{ check_value = false;} 
    }
    return {"date":myDate,"todo":todo_arr,"doing":doing_arr};
}
// onload
temp_data = update_out();
export_to_file(temp_data);
const dLink = document.getElementById("downLink");
dLink.innerHTML = "<img src='../assets/download.svg' width='20'/>";

