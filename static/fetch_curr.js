"use strict";

const url="https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/static/grep_tenki.csv";

var timeNow= new Date();
let hh = timeNow.getHours();
let mm = timeNow.getMinutes();
var text="";

const curr_weather=[];
//console.log(hh,mm);

//get_curr_data(String(hh));
display_info();

//console.log(curr_weather);
async function display_info(){
    await get_url_data(String(hh));
    text += "<h1>" + curr_weather[0][0] + " " + hh +":"+ mm + "<br>";
    text += " Now: " + curr_weather[0][2] + " " + curr_weather[0][3]+ "&#8451;</h1>";
    text += "<p> Rain " + curr_weather[0][5] + "mm, Chance: "+curr_weather[0][4] + "%<br>";
    text += "Humidity: " + curr_weather[0][6] + "%<br>";
    text += "Wind: " + curr_weather[0][7] +"m/s "+ curr_weather[0][8]+"</p>";

    document.getElementById("curr_weather").innerHTML = text;
}

async function get_url_data(curr_hour){
    const response = await fetch(url);
    const data = await response.text();

    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const this_weather = row.split(',');
        if (this_weather[1] === curr_hour){
            curr_weather.push(this_weather);
        }
        
    });
    //console.log(rows);
}