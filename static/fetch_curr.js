"use strict";

const url="https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/static/grep_tenki.csv";

var timeNow= new Date();
let hh = timeNow.getHours();
let mm = timeNow.getMinutes();
var text="";
//console.log(hh,mm);

get_curr_data(String(hh));

async function get_curr_data(curr_hour){
    const response = await fetch(url);
    const data = await response.text();
    //console.log(data);

    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const curr_weather = row.split(',');
        if (curr_weather[1] === curr_hour){
            //console.log(curr_weather);
            text += "<h3>" + curr_weather[0] + " " + hh +":"+ mm + "<br>";
            text += " Now: " + curr_weather[2] + " " + curr_weather[3]+ "&#8451;</h3>";
            text += "<p> Rain " + curr_weather[5] + "mm, Chance: "+curr_weather[4] + "%<br>";
            text += "Humidity: " + curr_weather[6] + "%<br>";
            text += "Wind: " + curr_weather[7] +"m/s "+ curr_weather[8]+"</p>";

            document.getElementById("curr_weather").innerHTML = text;
        }
        
    });
    //console.log(rows);
}