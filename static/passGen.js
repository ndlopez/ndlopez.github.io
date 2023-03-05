const default_length = 10;
const words = "https://raw.githubusercontent.com/ndlopez/jumble_game/main/data/book_words.txt";
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num, sym;

let inp = document.getElementById('passLen');
let outp = document.querySelector('output');
outp.innerHTML = inp.value;

inp.addEventListener('input',()=>{
    outp.innerHTML = inp.value;
},false);

function pswdgen(){
    let mystr = "",auxStr="";
    // const thisLen = document.getElementById("gotLen");
    let lenValue = document.getElementById("passLen").value;
    let smallCaps = document.querySelector("#lowers");
    let addNumbers = document.querySelector("#numbers");
    let addSymbols = document.querySelector("#symbols");
    const nump = (lenValue)?(lenValue):(default_length);
    // thisLen.innerText = nump;
    console.log(lenValue,smallCaps.checked,addNumbers.checked,addSymbols.checked);
    if (smallCaps.checked){
        auxStr = ABC + ABC.toLowerCase();
    }else{
        auxStr = ABC;
    }
    if (numbers.checked){
        num = "23456789";
    }else{
        num = "";
    }
    if (symbols.checked){
        sym = "!#$%&-_@[]";
    }else{
        sym = "";
    }
    mystr = num + auxStr + sym;
    
    let pasw="";let hole="";
    //var tot=txt.length+num.length+sym.length;
    let ent1,ent2,ent3;
    while (hole.length < nump) {
        ent1=Math.floor(mystr.length*Math.random()*Math.random());
        pasw += mystr.charAt(ent1);
        hole = pasw;
    }
    //return pasw;	//pasw is a string!
    const num2 = hole.length;
    /*ent2=0;
    while(pasw.length<nump){
        ent1=Math.floor(Math.random()*num2);
        if(ent1==ent2){	ent2=ent1; }
        else{ hole+=pasw.charAt(ent1);}
    }*/
    //hole+=i;
    document.getElementById("pass").innerHTML = hole;
}

function copy_to_clipboard(){
    const getText = document.getElementById("pass");
    
    navigator.clipboard.writeText(getText.innerText);
    // console.log("yourPass",getText.innerText);
    alert("Generated password was copied to clipboard");
}

async function disp_sched(){
    const thisDay = await get_url_data(urlSched,key,elem1,elem2);

    var text ="";
    for (let idx=0; idx < thisDay["myTime"].length;idx++){        
        text += "<tr><td style='text-align:right;'>" + thisDay["myTime"][idx] + "</td><td>" + thisDay["myAct"][idx]+"</td></tr>";
    };
    document.getElementById("myday").innerHTML = text;
    //console.log(text);
}

async function get_url_data(url,jsonKey,keyElm1,keyElm2){
    const response = await fetch(url);
    const data = await response.json();
    const myTime = [];
    const myAct = [];
    if (jsonKey === "quotes"){
        const randIdx = Math.floor(Math.random()*data[jsonKey].length);
        const quote = data[jsonKey][randIdx][keyElm1];
        const author = data[jsonKey][randIdx][keyElm2];
        //console.log(data["quotes"][randIdx]["quote"]);
        return {quote,author};
    }else{
        const table = data[jsonKey];
        table.forEach(row => {
            //console.log(row[keyElm1]);
            myTime.push(row[keyElm1]);
            myAct.push(row[keyElm2]);
        });
        return {myTime,myAct};
    }
    //console.log(rows);
}