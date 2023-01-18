const urlQuote="https://raw.githubusercontent.com/ndlopez/quotes/main/quotes/data/goodreads_quotes.json";

disp_quote();

async function disp_quote(){
    const key="quotes";
    const elem1 = "quote", elem2="author";
    const myQuote = await get_url_data(urlQuote,key,elem1,elem2);
    const text = "<cite>" + myQuote.quote + "</cite><br>by " + myQuote.author;
    document.getElementById("randQuote").innerHTML = text;
}

async function get_url_data(url,jsonKey,keyElm1,keyElm2){
    const response = await fetch(url);
    const data = await response.json();
    const myTime=[];
    const myAct=[];
    if (jsonKey === "quotes"){
        const randIdx = Math.floor(Math.random()*data[jsonKey].length);
        const quote=data[jsonKey][randIdx][keyElm1];
        const author=data[jsonKey][randIdx][keyElm2];
        //console.log(data["quotes"][randIdx]["quote"]);
        return {quote,author};
    }
    //console.log(rows);
}
