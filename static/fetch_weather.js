/* Fetch data from url
Use such data to make a d3js plot.
*/
"use strict";

const url="https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/data/grep_tenki.csv";

var timeNow= new Date();
let hh = timeNow.getHours();
let mm = timeNow.getMinutes();
var text="";

const curr_weather=[];
//console.log(hh,mm);

display_info();

//console.log(curr_weather);
async function display_info(){
    const myData = await get_url_data(String(hh));
    //console.log(myData.curr_weather);
    text += "<h1>" + myData.curr_weather[0][0] + "<br>";
    text += hh +":"+ mm + " " + myData.curr_weather[0][2] + " " + myData.curr_weather[0][3]+ "&#8451;</h1>";
    text += "<p> Rain " + myData.curr_weather[0][5] + "mm, Chance: "+myData.curr_weather[0][4] + "%<br>";
    text += "Humidity: " + myData.curr_weather[0][6] + "%<br>";
    text += "Wind: " + myData.curr_weather[0][7] +"m/s "+ myData.curr_weather[0][8]+"</p>";

    document.getElementById("curr_weather").innerHTML = text;

    /* chart.js plot */

    //function update(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: myData.hour,
            datasets: [{
                label: 'Local temperature',
                data: myData.temp,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            fill:false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    //}
}

async function get_url_data(curr_hour){
    const hour=[],temp=[],humid=[],wind=[];
    
    const response = await fetch(url);
    const data = await response.text();

    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const this_weather = row.split(',');
        if (this_weather[1] === curr_hour){
            curr_weather.push(this_weather);
        }
        hour.push(this_weather[1]);
        temp.push(this_weather[3]);
        humid.push(this_weather[6]);
        wind.push(this_weather[7]);
    });
    return {curr_weather, hour, temp, humid, wind};
}