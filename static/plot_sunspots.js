/*SILSO data: Sunspot daily number*/
const spots_url = "https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/data/sunspot_number.csv";
// const spots_url = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#sunspots").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

const dateParser = d3.timeParse("%Y-%m-%d");
const x = d3.scaleTime().range([ 0, width ]);
const y = d3.scaleLinear().range([ height, 0 ]);

d3.csv(spots_url,function(error,data){
  console.log(data);
  if(error)throw error;
  data.forEach((d)=>{
    d.date = dateParser(d.date);
    d.value = +d.spotNum;
  });
  x.domain(d3.extent(data,(d)=>{return d.date;}));
  y.domain([0,d3.max(data,(d)=>{return +d.value; })]);

  svg.append("path")
      .datum(data)
      .attr("fill","none")
      .attr("stroke","steelblue")
      .attr("stroke-width",1.5)
      .attr("d",d3.line()
          .x((d)=>{ return x(d.date); })
          .y((d)=>{ return y(d.value); }));
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));
});

async function display(){
  const myData = await get_spots_data();
  const mod_data = [];
  mod_data.push(myData.date,myData.spots);
  const trData =mod_data[0].map((_,colIdx)=> mod_data.map(row => row[colIdx]));
  console.log(trData);
}

async function get_spots_data(){
  const date = [], spots = [];
  const response = await fetch(spots_url);
  const data = await response.text();
  const lines = data.split('\n').slice(1);
  lines.forEach(row =>{
    const this_data = row.split(',');
    date.push(d3.timeParse("%Y-%m-%d")(this_data[0]));
    spots.push(this_data[1]);
  });
  return {date,spots};
}