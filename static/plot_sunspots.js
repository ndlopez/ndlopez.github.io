/*SILSO data: Sunspot daily number*/
const spots_url = "https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/data/sunspot_number.csv";
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#sunspots")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv(spots_url,
  function(d){return {date: d3.timeParse("%Y-%m-%d")(d.date), value: d.spotNum}},
  function(data){
      // Add X axis --> it is a date format xValue = d3.utcParse("%Y-%m-%d %H:%M:%S")(d.time_tag);
      const x = d3.scaleTime()
      .domain(d3.extent(data,(d)=>{return d.date;}))
      .range([ 0, width ]);
      svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
      
      // Add Y axis
      const y = d3.scaleLinear()
      .domain([0,d3.max(data,(d)=>{return +d.value; })])
      .range([ height, 0 ]);
      svg.append("g")
      .call(d3.axisLeft(y));
      svg.append("path")
      .data(data)
      .attr("fill","none")
      .attr("stroke","steelblue")
      .attr("stroke-width",1.5)
      .attr("d",d3.line()
          .x((d)=>{return x(d.date);})
          .y((d)=>{return y(d.value);}));
      //console.log(data);
  });
