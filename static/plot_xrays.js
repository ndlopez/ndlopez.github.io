/*GOES 16 xrays 01~0.8nm*/
const xrays_url = "https://services.swpc.noaa.gov/json/goes/primary/xrays-3-day.json";
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#xrays-long")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.json(xrays_url,
    function(data){
        // Add X axis --> it is a date format xValue = d3.utcParse("%Y-%m-%d %H:%M:%S")(d.time_tag);
        var xValue="";
        const x = d3.scaleTime()
        .domain(d3.extent(d3.map(data,(d)=>{return d.time_tag;})))
        .range([ 0, width ]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
        
        // Add Y axis
        const y = d3.scaleLinear()
        .domain([1e-8, 1e-2])
        .range([ height, 0 ]);
        svg.append("g")
        .call(d3.axisLeft(y));
        svg.append("path")
        .data(data)
        .attr("fill","none")
        .attr("stroke","steelblue")
        .attr("stroke-width",1.5)
        .attr("d",d3.line()
            .x((d)=>{return x(d.time_tag);})
            .y((d)=>{return y(d.flux);}));
        //console.log(data);
    });
