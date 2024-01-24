const default_length = 10;
const words = "https://raw.githubusercontent.com/ndlopez/scrapped/main/data/book_words.txt";
const abc = "qwertyuiopzxcvbnmasdfghjkl";
let num="98745632", sym="!#$%&-_@";

let inp = document.getElementById('passLen');
let outp = document.querySelector('output');
outp.innerHTML = inp.value;

inp.addEventListener('input',()=>{
    outp.innerHTML = inp.value;
},false);

const radBtns = document.querySelectorAll("input[type='radio']");

let sw_pass = true;

radBtns.forEach(button =>{
    button.onclick = ()=>{
        if(button.id == "phrase"){
            sw_pass = true;
            //console.log("clicked",button.id);
        }else{
            sw_pass = false;
            //console.log("clicked",button.id);
        }
    }
});

get_option();

async function get_option(){
    const genBtn = document.getElementById("gen_btn");
    let valPhrase = await disp_words();
    genBtn.addEventListener("click",()=>{
        if (sw_pass){
            get_option(); // callback
            document.getElementById("pass").innerHTML = valPhrase;
            // console.log("Button clicked",valPhrase);
        }else{
            pswdgen();
        }        
    });
}

function pswdgen(){
    let mystr = "",auxStr="";
    num= ""; sym = "";
    // const thisLen = document.getElementById("gotLen");
    let lenValue = document.getElementById("passLen").value;
    let smallCaps = document.querySelector("#lowers");
    let addNumbers = document.querySelector("#numbers");
    let addSymbols = document.querySelector("#symbols");
    const nump = (lenValue)?(lenValue):(default_length);
    // thisLen.innerText = nump;
    // console.log(lenValue,smallCaps.checked,addNumbers.checked,addSymbols.checked);
    if (smallCaps.checked){
        auxStr = abc + abc.toUpperCase();
    }else{
        auxStr = abc;
    }
    if (numbers.checked){
        num = "98745632";
    }
    if (symbols.checked){
        sym = "!#$%&-_@";
    }
    mystr = auxStr + num + sym;
    // console.log(mystr);
    let pasw="";
    //var tot=txt.length+num.length+sym.length;
    let ent1;
    while (pasw.length < nump) {
        ent1 = Math.floor(mystr.length*Math.random());
        pasw += mystr.charAt(ent1);
    }
    document.getElementById("pass").innerHTML = pasw;
}

function copy_to_clipboard(){
    const getText = document.getElementById("pass");
    navigator.clipboard.writeText(getText.innerText);
    // console.log("yourPass",getText.innerText);
    alert("Generated password was copied to clipboard");
}

const rand_idx = (abi) => Math.floor(Math.random()*abi.length); 
async function disp_words(){
    let maxim = 3; // max num words
    const myWords = await get_url_data(words);
    let text = "", mystr=num + sym;
    for (let idx=0; idx < maxim; idx++){
        text += myWords[rand_idx(myWords)] + mystr.charAt(rand_idx(mystr));
    }
    console.log("phrase:",text.length);
    return text;
}

async function get_url_data(url){
    let fiveChars = [];
    const response = await fetch(url);
    const data = await response.text();
    const rows = data.split('\n');
    rows.forEach(row=>{
        if(row.length < 6){
            fiveChars.push(row);
        }
    });
    return fiveChars;
}
