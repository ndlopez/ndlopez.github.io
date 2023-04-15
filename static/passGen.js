const default_length = 10;
const words = "https://raw.githubusercontent.com/ndlopez/jumble_game/main/data/book_words.txt";
const abc = "qwertyuiopzxcvbnmasdfghjkl";
let num, sym;

let inp = document.getElementById('passLen');
let outp = document.querySelector('output');
outp.innerHTML = inp.value;

inp.addEventListener('input',()=>{
    outp.innerHTML = inp.value;
},false);

const radBtns = document.querySelectorAll("input[type='radio']");

let sw_pass = true;

radBtns.forEach(button =>{
    /* is not necessary to assign an event to every "option"
    Phrase:onclick use disp_words as async and display on h2 tag*/
    button.onclick = ()=>{
        if(button.id == "phrase"){
            sw_pass = true;
            console.log("clicked",button.id);
        }else{
            sw_pass = false;
            console.log("clicked",button.id);
        }
    }
});

get_option();

async function get_option(){
    const genBtn = document.getElementById("gen_btn");
    let valPhrase = await disp_words();
    genBtn.addEventListener("click",()=>{
        if (sw_pass){
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
    console.log(lenValue,smallCaps.checked,addNumbers.checked,addSymbols.checked);
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
    
    let pasw="", hole="";
    //var tot=txt.length+num.length+sym.length;
    let ent1;
    while (hole.length < nump) {
        ent1 = Math.floor(mystr.length*Math.random()*Math.random());
        pasw += mystr.charAt(ent1);
        hole = pasw;
    }
    // return pasw;	//pasw is a string!
    // const num2 = hole.length;
    document.getElementById("pass").innerHTML = hole;
}

function copy_to_clipboard(){
    const getText = document.getElementById("pass");
    navigator.clipboard.writeText(getText.innerText);
    // console.log("yourPass",getText.innerText);
    alert("Generated password was copied to clipboard");
}

const rand_idx = (abi) => Math.floor(Math.random()*abi.length); 
async function disp_words(){
    // max num words: 4
    const myWords = await get_url_data(words);
    let text = "";
    for (let idx=0; idx < 4; idx++){
        text += myWords[rand_idx(myWords)] + " "
    }
    // console.log(text,text.length);
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