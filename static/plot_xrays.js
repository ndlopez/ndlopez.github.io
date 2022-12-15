/*GOES 16 xrays 01~0.8nm*/
const xrays_url = "https://services.swpc.noaa.gov/json/goes/primary/xrays-3-day.json";
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.json(xrays_url,
    function(d){
        console.log(d);
        return {date: d3.timeParse()(d.time_tag),value:d.value}
    },
    function(data){
         // Add X axis --> it is a date format
        var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ height, 0 ]);
        svg.append("g")
        .call(d3.axisLeft(y));
    });
