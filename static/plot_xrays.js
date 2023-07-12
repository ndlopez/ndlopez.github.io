/*GOES 16 xrays 01~0.8nm

https://observablehq.com/@d3/line-chart/2?intent=fork

*/
const xrays_url = "https://services.swpc.noaa.gov/json/goes/primary/xrays-3-day.json";
// set the dimensions and margins of the graph
const margin = {top: 10, right: 10, bottom: 30, left: 35},
   width = 460 - margin.left - margin.right,
   height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#xrays-long")
 .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g")
   .attr("transform",
         "translate(" + margin.left + "," + margin.top + ")");

let idx = 0; 
d3.json(xrays_url,
 function(data){
   // Add X axis --> it is a date format xValue = d3.utcParse("%Y-%m-%d %H:%M:%S")(d.time_tag);
   // d3.time.format("%Y-%m-%d %H:%M:%S").parse;
   const xValue = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");
   const x = d3.scaleTime()
   .domain(d3.extent(data,(d,i)=>{ if (i%2 == 0) {
     //console.log(i,xValue(d.time_tag)); 
     return xValue(d.time_tag);}}))
   .range([ margin.left, width - margin.right]);

   svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x));
   
   const lines = d3.line()
       .x((d,i)=>{if(i % 2 == 0) {
         console.log(xValue(d.time_tag),x(xValue(d.time_tag)));
         return x(xValue(d.time_tag));}})
       .y((d,i)=>{if(i % 2 == 0) {
         console.log(d.flux * 1e+8, y(d.flux * 1e+8));
         return y(d.flux * 1e+8);}})
   // Add Y axis
   // d3.max(data,(d,i)=>{if(i%2==0){return d.flux*1e+8;}})
   const y = d3.scaleLinear()
   .domain([1, d3.max(data,(d,i)=>{if(i%2==0){return d.flux*1e+8;}})])
   .range([height - margin.bottom, margin.top]);

   svg.append("g")
   .call(d3.axisLeft(y));
   svg.append("path")
   .attr("fill","none")
   .attr("stroke","steelblue")
   .attr("stroke-width",1.5)
   .attr("d",lines(data));
   //console.log("really?",data);
 });