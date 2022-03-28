/*Weather bars plot
Pulling data from <ndlopez>'s Github
https://raw.githubusercontent.com/ndlopez/weather_app/main/data/
*/
var timeNow = new Date();
let currHour = timeNow.getHours();
var margin = {top:10,right:20,bottom:50,left:30},
w = 400 - margin.left - margin.right,
h = 400 - margin.top - margin.bottom;

var svg2=d3.select("#weather_bar")
.append("svg")
/*.attr('width',w+margin.left+margin.right)*/
.attr('height',h+margin.top+margin.bottom)
.append("g")
.attr("transform",`translate(${margin.left},${margin.top})`);

// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, w ])
  .padding(0.2);
var xAxis = svg2.append("g")
  .attr("transform", "translate(0," + h + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ h, 0]);
var yAxis = svg2.append("g")
  .attr("class", "myYaxis")

function update(selectedVar){
  //document.getElementsByClassName("selectBtn") = "#cc274c";
  document.getElementById(selectedVar).style.backgroundColor = "#cc274c";
  //document.getElementById("weather_bar").style.backgroundColor = "white";

  d3.csv("https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/data/grep_tenki.csv",function(data){
    // X axis
    x.domain(data.map(function(d) { 
      if(d.hour >= currHour){return d.hour;}
    }))
    xAxis.transition().duration(1000).call(d3.axisBottom(x))

    // Add Y axis
    y.domain([0, d3.max(data, function(d,i) { 
      if(i+1 >= currHour){return +d[selectedVar];} }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

    thisColor=[];
    myColor=["#98A2A9","#CC274C"];

    // variable uMap data to existing bars
    var uMap = svg2.selectAll("rect")
      .data(data)
    // update bars
    uMap
      .enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(1000)
        .attr("x", function(d) { if(d.hour >= currHour){return x(d.hour);} })
        .attr("y", function(d,i) { 
          if(i+1 >= currHour){return y(d[selectedVar]);} })
        .attr("width", x.bandwidth())
        .attr("height", function(d,i) { 
          if(i+1 >= currHour){return h - y(d[selectedVar]);} })
        .attr("fill", "#2e4054")
  })
}
update('temp');
