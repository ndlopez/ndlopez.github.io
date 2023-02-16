const default_length = 10;
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
    // returns a number between 0 and 9
    //var num2=Math.floor(Math.random() * 10);
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