const default_length = 10;
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "23456789";
const sym = "!#$%&-_@[]";

function pswdgen(){
    let mystr = "";
    let lenValue = document.getElementById("passLen").value;
    let smallCaps = document.getElementById("lowers").checked;
    let addNumbers = document.getElementById("numbers").checked;
    let addSymbols = document.getElementById("symbols").checked;
    const nump = (lenValue)?(lenValue):(default_length);
    console.log(lenValue,smallCaps,addNumbers,addSymbols);
    if (smallCaps == "true"){
        txt = txt + txt.toLowerCase();
    }
    if (numbers == "false"){
        num = "";
    }
    if (symbols == "false"){
        sym = "";
    }
    mystr = num + txt + sym;
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