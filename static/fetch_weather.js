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

var newHour = String(hh);
var newMin = String(mm);
if(hh > 0 && hh < 10){newHour = "0" + String(hh);}
if(mm < 10){newMin = "0" + String(mm);}
display_info();

//console.log(curr_weather);
async function display_info(){
    const myData = await get_url_data(newHour);
    //console.log(myData.curr_weather);
    text += "<h2>" + myData.curr_weather[0][0] +" "+ newHour +":"+ newMin + "</h2>";
    text += "<h1>" + myData.curr_weather[0][2].replace(/"/g,"") + " " + myData.curr_weather[0][3]+ "&#8451;</h1>";
    document.getElementById("curr_weather").innerHTML = text;

    text = "<p>RAIN</p><div class='rounded'><h2>" + myData.curr_weather[0][4] + "%<br>"+myData.curr_weather[0][5] + " mm</h2></div>";
    document.getElementById("curr_weather_rain").innerHTML = text;

    text = "<p>HUMIDITY</p><div class='rounded'><h2><br>" + myData.curr_weather[0][6] + "%</h2></div>";
    document.getElementById("curr_weather_humid").innerHTML = text;

    text = "<p>WIND</p><div class='rounded'><h2>" + myData.curr_weather[0][7] +"m/s<br>"+ myData.curr_weather[0][8].replace(/"/g,"") + "</h2></div>";
    document.getElementById("curr_weather_wind").innerHTML = text;

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
    
    
    console.log(myData.hour[4],myData.temp[4],myData.humid[4]);
    /* D3js plot 
    Thanks to  https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3    */
    const data=[];
    data.push(myData.hour,myData.temp,myData.humid,myData.wind,myData.windDir);
    /* this was the problem, the data was not transposed*/
    const trData =data[0].map((_,colIdx)=> data.map(row => row[colIdx]));

    //console.log(trData);
    // Set Dimensions
    const xSize = 500;//390;
    const ySize = 500;
    const margin = 40;
    const xMax = xSize - margin*2;
    const yMax = ySize - margin*2;
    const newVal = 0;
    // Append SVG Object to the Page
    const svg = d3.select("#weather_bar")
    .append("svg").attr("width",xSize).attr("height",ySize)
    .append("g")
    .attr("transform","translate(" + margin + "," + margin + ")");

    // X Axis
    const x = d3.scaleBand()
    .domain(data[0])
    .range([0, xMax])
    .padding(0.2);
    
    svg.append("g")
    .attr("transform", "translate(0," + newVal + ")")
    .call(d3.axisTop(x));

    // Y Axis
    const y = d3.scaleLinear()
    .domain([d3.min(data[1])-1,d3.max(data[1])])
    .range([ yMax, 0]);

    svg.append("g")
    .call(d3.axisLeft(y));

    // Dots. It finally worked!! 2022-03-28 21:40
    /*svg.append('g')+"&#176;"
    .selectAll("dot")
    .data(trData).enter()
    .append("circle")
    .attr("cx", function (d) { return x(d[0]); } )
    .attr("cy", function (d) { return d[1]-40; } )
    .attr("r", 3)
    .style("fill", "#2e4054");*/
    
    //Bars. It finally worked!! 2022-03-28 22:00
    svg.append("g")
    .selectAll(".bar")
    .data(trData).enter()
    .append("rect")
    .attr("class","bar")
    .attr("x",(d)=>{return x(d[0]);})
    .attr("y",(d)=>{return y(d[1]);})
    .attr("width",x.bandwidth())
    .transition().ease(d3.easeLinear)
    .duration(1500).delay((d,i)=>{return i*100;})
    .attr("height",(d)=>{return yMax -y(d[1]);});
    /*is pointless on mobile
    .on("mouseover",function(d,i){
        d3.select(this).attr("class","highlight");
        d3.select(this)
        .transition().duration(400)
        .attr("width",x.bandwidth() + 5)
        .attr("y",function(d){return y(d[1])-10;})
        .attr("height",function(d){return yMax - y(d[1])+10;})
        svg.append("text")
        .attr("class","val")
        .attr("x",(d)=>{return x(d[0]);})
        .attr("y",(d)=>{return y(d[1])-10;})
        .text(d[1][3]);
    })
    .on("mouseout",function(d,i){
        d3.select(this).attr("class","bar");
        d3.select(this).transition().duration(400)
        .attr("width",x.bandwidth())
        .attr("y",(d)=>{return y(d[1]);})
        .attr("height",(d)=>{return yMax - y(d[1]);})
        d3.selectAll(".val").remove();
    })*/
    //.attr("fill", "#fff");
    svg.append("g")
    .selectAll(".txtHumid")
    .data(trData).enter()
    .append("text")
    .attr("class","txtHumid")
    .text(function(d){return d[2]+"%";})
    .attr("text-anchor","middle")
    .attr("x",function(d){
        return x(d[0])+13;/*+13 */})
    .attr("y",function(d){return y(d[1])+20;})
    .attr("font-family","sans-serif")
	.attr("font-size","11px");

    svg.append("g")
    .selectAll(".txtWind")
    .data(trData).enter()
    .append("text")
    .attr("class","txtWind")
    .text(function(d){return d[3]+"m/s";})
    .attr("text-anchor","middle")
    .attr("x",function(d){
        return x(d[0])+13;})
    .attr("y",function(d){return yMax + 10;})
    .attr("font-family","sans-serif")
	.attr("font-size","11px");

    svg.append("g")
    .selectAll(".txtWindDir")
    .data(trData).enter()
    .append("text")
    .attr("class","txtWindDir")
    .text(function(d){return d[4];})
    .attr("text-anchor","middle")
    .attr("x",function(d){
        return x(d[0])+13;})
    .attr("y",function(d){return yMax + 30;})
    .attr("font-family","sans-serif")
	.attr("font-size","11px");
}

function onMouseOver(d,i){
    d3.select(this).attr("class","highlight");
    d3.select(this)
    .transition().duration(400)
    .attr("width",x.bandwidth() + 5)
    .attr("y",function(d){return y(d[1])-10;})
    .attr("height",function(d){return yMax - y(d[1])+10;})
    svg.append("text")
    .attr("class","val")
    .attr("x",(d)=>{return x(d[0]);})
    .attr("y",(d)=>{return y(d[1])-15;})
    .text((d)=>{return [ 'S'+ d[1] ];});
}

function onMouseOut(d,i){
    d3.select(this).attr("class","bar");
    d3.select(this).transition().duration(400)
    .attr("width",x.bandwidth())
    .attr("y",(d)=>{return y(d[1]);})
    .attr("height",(d)=>{return yMax - y(d[1]);})
    d3.selectAll(".val").remove();
}
/*Using chart.js do this https://www.chartjs.org/docs/latest/samples/area/radar.html */
async function get_url_data(curr_hour){
    const hour=[], temp=[], humid=[], wind=[], windDir = [];
    //const weather=[], rainProb=[], rainMM=[];
    
    const response = await fetch(url);
    const data = await response.text();

    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const this_weather = row.split(',');
        //console.log(this_weather);
        if (this_weather[1] === curr_hour){
            curr_weather.push(this_weather);
        }
        if (this_weather[1] >= curr_hour){
            hour.push(parseInt(this_weather[1]));
            /*weather.push(this_weather[2]);*/
            temp.push(parseFloat(this_weather[3]));
            /*rainProb.push(parseInt(this_weather[4]));
            rainMM.push(parseInt(this_weather[5]));*/
            humid.push(parseInt(this_weather[6]));
            wind.push(parseInt(this_weather[7]));
            windDir.push(this_weather[8].replace(/"/g,""));
        }
    });
    return {curr_weather,hour,temp,humid,wind,windDir};
}
function update(selVar){
    alert("Error","This is not the "+ selVar + " you r looking for.");
}
