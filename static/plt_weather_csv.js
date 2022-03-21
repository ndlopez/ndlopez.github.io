/*Weather bars plot
Pulling data from <ndlopez>'s Github
https://raw.githubusercontent.com/ndlopez/weather_app/main/data/
*/
var timeNow = new Date();
let currHour = timeNow.getHours();
var maxTemp = 20;
var margin = {top:10,right:20,bottom:50,left:20},
w = 400 - margin.left - margin.right,
h = 400 - margin.top - margin.bottom;

var svg2=d3.select("#weather_bar")
.append("svg")
.attr('width',w+margin.left+margin.right)
.attr('height',h+margin.top+margin.bottom)
.append("g")
.attr("transform",`translate(${margin.left},${margin.top})`);

d3.csv("static/grep_tenki.csv",function(data){
  var xScale=d3.scaleBand().range([0,w])
  .domain(data.map(function(d){
    if(d.hour > currHour){
    console.log(d.hour);
    return d.hour;}}))
  .padding(0.2);

svg2.append("g")
.attr("transform","translate(0,"+h+")")
.call(d3.axisBottom(xScale))
.selectAll("text")
.attr("transform","translate(-10,0)rotate(-45)")
.style("text-anchor","end");

thisColor=[];
myColor=["#98A2A9","#CC274C"];
var yScale=d3.scaleLinear().domain([0,maxTemp]).range([h,0]);
svg2.append("g").call(d3.axisLeft(yScale));
svg2.selectAll("bar")
.data(data).enter()
.append("rect")
.attr("x",function(d){
  if (d.hour > currHour) {
    thisColor.push(myColor[0]);
    return xScale(d.hour);
  }
  /*else {thisColor.push(myColor[1]);}*/
  })
.attr("width",xScale.bandwidth())
.attr("fill",myColor[1])
.attr("height",function(d){return h-yScale(0);})
.attr("y",function(d){return yScale(0);})

console.log(thisColor);

randIdx=Math.floor(Math.random()*thisColor.length);
svg2.selectAll("rect")
.transition()
.duration(800)
.attr("y",function(d,i){
  if (i > currHour){
  return yScale(d.temp);}})
.attr("height",function(d){return h-yScale(d.temp);})
.delay(function(d,i){return(i*100)})
});
