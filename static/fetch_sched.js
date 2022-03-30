/*  Display one random quote on the header and also
    fill the table with current schedule.
*/
"use strict";

const urlSched="https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/data/sched.json";

const urlQuote="https://raw.githubusercontent.com/ndlopez/quotes/main/data/goodreads_quotes.json";

disp_quote();

disp_sched();

async function disp_sched(){
    const key="one-day";
    const elem1 = "time",elem2="activity";
    const thisDay = await get_url_data(urlSched,key,elem1,elem2);

    var text ="";
    for (let idx=0; idx < thisDay["myTime"].length;idx++){        
        text += "<tr><td style='text-align:right;'>" + thisDay["myTime"][idx] + "</td><td>" + thisDay["myAct"][idx]+"</td></tr>";
    };
    document.getElementById("myday").innerHTML = text;
    //console.log(text);
}

async function disp_quote(){
    const key="quotes";
    const elem1 = "quote", elem2="author";
    const myQuote = await get_url_data(urlQuote,key,elem1,elem2);
    var text = "<cite>" + myQuote.quote + "</cite><br>by " + myQuote.author;
    document.getElementById("randQuote").innerHTML = text;
}
async function get_url_data(url,jsonKey,keyElm1,keyElm2){
    const response = await fetch(url);
    const data = await response.json();
    const myTime=[];
    const myAct=[];
    if (jsonKey === "quotes"){
        const randIdx = Math.floor(Math.random()*data[jsonKey].length);
        var quote=data[jsonKey][randIdx][keyElm1];
        var author=data[jsonKey][randIdx][keyElm2];
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