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

display_info('temp');

//console.log(curr_weather);
async function display_info(selVar){
    const myData = await get_url_data(String(hh));
    //console.log(myData.curr_weather);
    text += "<h1>" + myData.curr_weather[0][0] + "<br>";
    text += hh +":"+ mm + " " + myData.curr_weather[0][2] + " " + myData.curr_weather[0][3]+ "&#8451;</h1>";
    text += "<p> Rain " + myData.curr_weather[0][5] + "mm, Chance: "+myData.curr_weather[0][4] + "%<br>";
    text += "Humidity: " + myData.curr_weather[0][6] + "%<br>";
    text += "Wind: " + myData.curr_weather[0][7] +"m/s "+ myData.curr_weather[0][8]+"</p>";

    document.getElementById("curr_weather").innerHTML = text;

    /* chart.js plot */
    /*const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
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
                y: {beginAtZero: true}
            }
        }
    });*/
    console.log(myData.hour);
    /* D3js plot */
    // Set Dimensions
    const xSize = 500; 
    const ySize = 500;
    const margin = 40;
    const xMax = xSize - margin*2;
    const yMax = ySize - margin*2;
    // Append SVG Object to the Page
    const svg = d3.select("#weather_bar")
    .append("svg").attr("width",xSize).attr("height",ySize)
    .append("g")
    .attr("transform","translate(" + margin + "," + margin + ")");

    // X Axis
    const x = d3.scaleLinear()
    .domain([0,23])
    .range([0, xMax]);

    svg.append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x));

    // Y Axis
    const y = d3.scaleLinear()
    .domain([0,d3.max(myData.temp)])
    .range([ yMax, 0]);

    svg.append("g")
    .call(d3.axisLeft(y));

    // Dots
    svg.append('g')
    .selectAll("dot")
    .data(myData).enter()
    .append("circle")
    .attr("cx", function (d) { return d.hour[0]; } )
    .attr("cy", function (d) { return d.temp[0]; } )
    .attr("r", 3)
    .style("fill", "Red");


}
/*Using chart.js do this https://www.chartjs.org/docs/latest/samples/area/radar.html */
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
        hour.push(parseInt(this_weather[1]));
        temp.push(parseFloat(this_weather[3]));
        //humid.push(parseInt(this_weather[6]));
        //wind.push(parseInt(this_weather[7]));
    });
    return {curr_weather,hour, temp};
}
function update(selVar){
    alert("Sorry couldnt display "+selVar + " at this moment");
}