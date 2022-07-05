/*  Display weather conditions.

Written by DLopez (CopyLeft 2022-06-18)
Fetch data from url and make a d3js plot.
Should probably add a 2nd axis like this:
http://www.d3noob.org/2013/01/using-multiple-axes-for-d3js-graph.html

Progress ring is based on:
https://codepen.io/jeremenichelli/pen/vegymB and
https://dev.to/vaibhavkhulbe/let-s-make-and-wear-those-css-3-progress-rings-2ngf

Weather icons are from:
https://www.foreca.com/public/images/symbols/n440.svg

Refer to the following to make a line plot
https://datawanderings.com/2019/10/28/tutorial-making-a-line-chart-in-d3-js-v-5/

Refer to :
Search how to make a gauge meter and a drop in svg
https://hongkiat.github.io/svg-meter-gauge/

<div class="clearfix">
    <img alt="Current radar image over Tokai region. Courtesy of tenki.jp" class="img2" src="https://static.tenki.jp/static-images/radar/recent/pref-26-middle.jpg">
    <--img id="weather-img" src="https://wttr.in/Nagoya_0pq_transparency=200_lang=en.png" alt="Wetter in Nagoya" />
    <p>Data from wttr.in</p->
</div>
*/
"use strict";

const url="https://raw.githubusercontent.com/ndlopez/ndlopez.github.io/main/data/grep_tenki.csv";

let timeNow= new Date();
let hh = timeNow.getHours();
let mm = timeNow.getMinutes();
var text="";
const curr_weather=[];

var newHour = String(hh);
var newMin = String(mm);
if(hh > 0 && hh < 10){newHour = "0" + String(hh);}
if(mm < 10){newMin = "0" + String(mm);}
const toRadians = Math.PI/180.0;
const maxValue = 6; //m/s when 10m/s too many scales, should display half

function getMaxMin(dataArray){
    let max = 0;
    let min = 50;
    var outArr = [];

    dataArray.forEach(el => {
        if (el > max){
            max = el;
        }
        if (el < min){
            min = el;
        }
    });
    outArr.push(max);
    outArr.push(min);
    return outArr;
}

function buildProgressCircle(percent,title,texty) {
    let radius = 52;
    const pTitle = document.createElement("p");
    pTitle.innerText = title;
    const subDiv = document.createElement("div");
    subDiv.setAttribute("class","column3 float-left");
    subDiv.appendChild(pTitle);
    const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    const svgBkgCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    svgGroup.setAttribute("width","120");
    svgGroup.setAttribute("height","120");//180
    svgCircle.setAttribute("class","progress-ring-circle");
    svgCircle.setAttribute("id","frontCircle");
    svgCircle.setAttribute("stroke","#cc274c");
    svgCircle.setAttribute("stroke-width","5");
    svgCircle.setAttribute("stroke-linecap","round");
    svgCircle.setAttribute("fill","transparent");
    svgCircle.setAttribute("r",radius);
    svgCircle.setAttribute("cx","60");
    svgCircle.setAttribute("cy","60");//90
    svgBkgCircle.setAttribute("class","progress-ring-circle");
    svgBkgCircle.setAttribute("stroke","#bed2e0");
    svgBkgCircle.setAttribute("stroke-width","4");
    svgBkgCircle.setAttribute("stroke-dasharray","10,10");
    svgBkgCircle.setAttribute("fill","transparent");
    svgBkgCircle.setAttribute("r",radius);
    svgBkgCircle.setAttribute("cx","60");
    svgBkgCircle.setAttribute("cy","60");//90
    svgGroup.appendChild(svgBkgCircle);
    svgGroup.appendChild(svgCircle);
    
    var circumference = radius * 2 * Math.PI;
    svgCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    svgCircle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - percent / 100 * circumference;
    svgCircle.style.strokeDashoffset = offset;
    subDiv.appendChild(svgGroup);
    var subDivVal = document.createElement("div");
    subDivVal.setAttribute("class","value");
    subDivVal.innerHTML = texty;
    subDiv.appendChild(subDivVal);

    return subDiv;
}

function semiGaugeMeter(value,title,htmlTxt){
    //Path - Text - Path
    const maxValue = 6; //m/s when 10 too many scales, should display half
    const pTitle = document.createElement("p");
    pTitle.innerText = title;
    const subDiv = document.createElement("div");
    subDiv.setAttribute("class","column3 float-left");
    subDiv.appendChild(pTitle);
    const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    const svgBkgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    
    svgGroup.setAttribute("width","120");
    svgGroup.setAttribute("height","180");
    svgPath.setAttribute("class","gauge-value");
    svgPath.setAttribute("id","frontCircle");
    svgPath.setAttribute("stroke","#cc274c");
    svgPath.setAttribute("stroke-width","5");
    svgPath.setAttribute("stroke-linecap","round");
    svgPath.setAttribute("fill","none");

    //calc circ_path based on MaxValue = 6m/s
    var myPath = "";
    let radius = 50;
    
    var angle = (value/maxValue)*180;//231.566;
    
    var dx = 0;
    if (value < (maxValue/2)){
        dx = 10 + radius*(1 - Math.cos(angle*toRadians));
    }else{
        angle = 180 - angle;//231.566
        dx = 60 + radius*Math.cos(angle*toRadians);
    }
    var dy = 68 - radius*Math.sin(angle*toRadians); //68

    myPath = "M 10 68 A 50 50 0 0 1 " + String(dx) + " "+ String(dy);
    
    svgPath.setAttribute("d",myPath);//60 18
    //console.log(value,angle,dx,dy,myPath);//"M 15 90 A 50 50 0 0 1 95.35 32.64"

    svgBkgPath.setAttribute("class","gauge-dial");
    svgBkgPath.setAttribute("stroke","#bed2e0");
    svgBkgPath.setAttribute("stroke-width","4");
    svgBkgPath.setAttribute("stroke-linecap","round");
    svgBkgPath.setAttribute("fill","none");
    svgBkgPath.setAttribute("d","M 10 68 A 50 50 0 0 1 110 68");//105 90

    //Adding text to SVG
    for (let index = 0; index <= maxValue; index++) {
        var thisAng = index/maxValue*180;
        var rr = 30;
        /*switch(index){
            3 scales only
            case 0:
                yy = 68;myOff = 15;break;
            case 1:
                yy = 32;myOff = 10;break;
            case 2:
                yy = 68;myOff = -5;break;
            default:
                yy= 70;
        }*/

        var xx = 0;
        if(index < (maxValue/2)){
            xx = 20 + rr*(1-Math.cos(thisAng*toRadians));
        }else{
            thisAng = 180 - thisAng;
            xx = 60 + rr*Math.cos(thisAng*toRadians);
        }
        if (index == maxValue/2){
            xx = 55;
        }
        var yy = 68 - rr*Math.sin(thisAng*toRadians);
        var myText = buildSVGtext(xx,yy,index);
        svgGroup.appendChild(myText);
    }
    
    svgGroup.appendChild(svgBkgPath);
    svgGroup.appendChild(svgPath);    

    subDiv.appendChild(svgGroup);
    var subDivVal = document.createElement("div");
    subDivVal.setAttribute("class","value");
    subDivVal.innerHTML = htmlTxt;
    subDiv.appendChild(subDivVal);

    return subDiv;
}

function buildGaugeMeter(value,title,htmlTxt){
    //Path - Text - Path
    const radius = 50;
    const pTitle = document.createElement("p");
    pTitle.innerText = title;
    const subDiv = document.createElement("div");
    subDiv.setAttribute("class","column3 float-left");
    subDiv.appendChild(pTitle);
    const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    const svgBkgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    
    svgGroup.setAttribute("width","120");
    svgGroup.setAttribute("height","180");
    svgPath.setAttribute("class","gauge-value");
    svgPath.setAttribute("id","frontCircle");
    svgPath.setAttribute("stroke","#cc274c");
    svgPath.setAttribute("stroke-width","5");
    svgPath.setAttribute("stroke-linecap","round");
    svgPath.setAttribute("fill","none");

    var posXY = buildPath(value,radius,10);
    var myPath = "M 15 90 A 50 50 0 " + posXY[2] + " 1 " + posXY[0] + " "+ posXY[1];
    svgPath.setAttribute("d",myPath);//60 18
    console.log(value,posXY[0],myPath);//"M 15 90 A 50 50 0 0 1 95.35 32.64"

    svgBkgPath.setAttribute("class","gauge-dial");
    svgBkgPath.setAttribute("stroke","#bed2e0");
    svgBkgPath.setAttribute("stroke-width","4");
    svgBkgPath.setAttribute("stroke-linecap","round");
    //svgBkgPath.setAttribute("stroke-dasharray","10,10");
    svgBkgPath.setAttribute("fill","none");
    svgBkgPath.setAttribute("d","M 15 90 A 50 50 0 1 1 105 90");//105 90
    
    /*Droplet
    M28.344 17.768L18.148 1.09L8.7 17.654c-2.2 3.51-2.392 8.074-.081 11.854c3.285 5.373 10.363 7.098 15.811 3.857c5.446-3.24 7.199-10.22 3.914-15.597z
    */
    //Adding scale to SVG_gauge_meter
    for (let index = 0; index <= maxValue; index++) {
        //var thisAng = 0;//index/maxValue*180;
        const rr = 30;
        var xx = 0;

        /* if(index < (maxValue/2)){xx = 20 + rr*(1-Math.cos(thisAng*toRadians));}
        else{thisAng = 180 - thisAng;xx = 60 + rr*Math.cos(thisAng*toRadians);} */
        var pos = buildPath(index,rr,20);
        xx = pos[0];
        if (index == maxValue/2){xx = 55;}
        
        var yy = pos[1];
        if(index == maxValue){xx = 85;}
        const myText = buildSVGtext(xx,yy,index);
        svgGroup.appendChild(myText);
    }
    
    svgGroup.appendChild(svgBkgPath);
    svgGroup.appendChild(svgPath);    

    subDiv.appendChild(svgGroup);
    const subDivVal = document.createElement("div");
    subDivVal.setAttribute("class","value");
    subDivVal.innerHTML = htmlTxt;
    subDiv.appendChild(subDivVal);

    return subDiv;
}

function buildPath(inValue,radio,xOffset){
    //calc circ_path based on MaxValue = 6m/s
    var beta = 0; 
    var dx = 0;

    if (inValue < (maxValue/2)){
        beta = inValue * 38.614 - 25.842;
        dx = xOffset + radio*(1 - Math.cos(beta*toRadians));
    }else{
        beta = 90 - (inValue - 3)*38.614;
        //angle = 180 - angle;//231.566
        dx = 60 + radio*Math.cos(beta*toRadians);
    }
    var flag = 0;
    var dy = 68 - radio*Math.sin(beta*toRadians); //68

    if (inValue == 0){dy=90;}
    if (inValue == 6){
        flag = 1;
        dx = 105;
        dy = 90;
    }
    if (inValue == 5){flag = 1;}
    //thisPath = "M 15 90 A 50 50 0 " + flag + " 1 " + String(dx) + " "+ String(dy);

    var arr = [];
    arr.push(dx);
    arr.push(dy);
    arr.push(flag);
    return arr;
}

function buildSVGtext(dx,dy,text){
    const svgText = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgText.setAttribute("x",dx);
    svgText.setAttribute("y",dy);
    svgText.setAttribute("fill","#bed2e0");
    svgText.setAttribute("font-family","Verdana");
    svgText.setAttribute("font-size","large");
    svgText.textContent = String(text);
    return svgText
}

const iconArray = ["sunny","sunny_cloudy","cloudy","overcast","rainy","thunderstorm","sleet","snow","clear"];
display_info();

//console.log(curr_weather);
async function display_info(){
    const myData = await get_url_data(newHour);
    //console.log(myData.curr_weather);
    const data=[];
    data.push(myData.hour,myData.temp,myData.humid,myData.wind,myData.windDir);
    /* this was the issue, the data was not transposed*/
    const trData =data[0].map((_,colIdx)=> data.map(row => row[colIdx]));

    var currCond = myData.curr_weather[0][2].replace(/"/g,"");
    //var textImg = "<img src='assets/";
    switch(currCond){
        case "晴れ":
            currCond = "<img src='assets/sunny.svg' alt='" + currCond + "'/>";
            break;
        case "曇り":
            currCond = "<img src='assets/cloudy.svg' alt='" + currCond + "'/>";
            break;
        case "小雨":
        case "弱雨":
            currCond = "<img src='assets/overcast.svg' alt='" + currCond + "'/>";
            break;
        case "雨":
            currCond = "<img src='assets/rainy.svg' alt='" + currCond + "'/>";
            break;
        case "強雨":
            currCond = "<img src='assets/thunderstorm.svg' alt='" + currCond + "'/>";
            break;
        default:
            currCond = "<img src='assets/sunny_cloudy.svg' alt='" + currCond + "'/>";
            /* Not considered yet, sleet and snow */
    }
    //currCond = textImg + "alt='" + currCond + "'/>"
    /* Special case when it's sunny and less 6hrs and over 19hrs */
    if(currCond === "<img src='assets/sunny.svg' alt='晴れ'/>" && (hh > 18 || hh < 6)){
        currCond = "<img src='assets/clear.svg' alt='晴れ'/>";
    }
    if(currCond === "<img src='assets/cloudy.svg' alt='曇り'/>" && (hh > 18 || hh < 6)){
        currCond = "<img src='assets/cloudy_night.svg' alt='Cloudy'/>";
    }
    //text += "<h2 class='align-left'>Kobe Weather<br><br>";
    let maxmin = getMaxMin(data[1]);//the date: myData.curr_weather[0][0]
    text += "<h2 class='align-left'>&emsp;"+ newHour +":"+ newMin + "</h2>";
    text += "<div class='clearfix'><span class='large'>" + myData.curr_weather[0][3] + 
    "&#8451;&emsp;"+myData.curr_weather[0][2].replace(/"/g,"")+"&emsp;</span>"+ currCond + 
    "<h3>Max "+ maxmin[0] + "&#8451;&emsp;Min " + maxmin[1] +  "&#8451;</h3></div>";
    document.getElementById("curr_weather").innerHTML = text;

    var detailsDiv = document.getElementById("weather_details");

    text = "<h2><br>" + myData.curr_weather[0][4] + "%<br>"+myData.curr_weather[0][5] + " mm</h2>";
    var rainDiv = buildProgressCircle(myData.curr_weather[0][4],"RAIN",text);
    detailsDiv.appendChild(rainDiv);

    text = "<h2><br><br>" + myData.curr_weather[0][6] + "%</h2>";
    var humidDiv = buildProgressCircle(myData.curr_weather[0][6],"HUMIDITY",text);
    detailsDiv.appendChild(humidDiv);

    text = "<h3>m/s</h3><h2>"+ myData.curr_weather[0][8].replace(/"/g,"") + "</h2>";
    //text = "<h2>" + myData.curr_weather[0][7] +"m/s<br>"+ myData.curr_weather[0][8].replace(/"/g,"") + "</h2>";
    var windDiv = buildGaugeMeter(myData.curr_weather[0][7],"WIND",text);
    detailsDiv.appendChild(windDiv);

    /* there used 2be a chart.js plot, code moved @EOF*/    
    
    //console.log(myData.hour[4],myData.temp[4],myData.humid[4]);
    /* D3js plot 
    Thanks to  https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3    */
    const containDiv = document.getElementById("weather_bar");
    const leftDiv = document.createElement("div");
    leftDiv.setAttribute("id","leftAxis");
    leftDiv.setAttribute("class","column-left float-left");
    const rightDiv = document.createElement("div");
    rightDiv.setAttribute("id","rightAxis");
    rightDiv.setAttribute("class","column-third float-left");


    const centerDiv = document.createElement("div");
    centerDiv.setAttribute("class","column-right float-left");
    const outerDiv = document.createElement("div");
    outerDiv.setAttribute("class","outer");
    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class","inner");

    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id","mainPlot");

    innerDiv.appendChild(mainDiv);
    outerDiv.appendChild(innerDiv);
    centerDiv.appendChild(outerDiv);
    containDiv.appendChild(leftDiv);
    containDiv.appendChild(centerDiv);
    containDiv.appendChild(rightDiv);


    //Build D3Js plot
    //console.log(trData);
    // Set Dimensions
    const xSize = 750;//390;
    const ySize = 450;
    const margin = 40;
    const xMax = xSize - 0;//margin
    const yMax = ySize - margin*2;
    const newVal = 0;
    // Append SVG axis to LeftDiv humidity
    const svgRight = d3.select("#rightAxis")
    .append("svg").attr("width",35).attr("height",ySize)
    .append("g")
    .attr("transform","translate(" + 10 + "," + margin + ")");    
    // Y Axis for humidity
    const yHumid = d3.scaleLinear()
    .domain([d3.min(data[2])-10,d3.max(data[2])])//100 displayed as 10
    .range([ yMax, 0]);
    
    svgRight.append("g")
    .call(d3.axisRight(yHumid));
    //add "%" to right axis
    svgRight.append("g")
    .append("text")
    .text("%")
    .attr("x",10)
    .attr("y",-10);//-5

    //yAxis for temperature
    const svgLeft = d3.select("#leftAxis")
    .append("svg").attr("width",36).attr("height",ySize)
    .append("g")
    .attr("transform","translate(" + 35 + "," + margin + ")");//margin,margin

    const yTemp = d3.scaleLinear()
    .domain([d3.min(data[1])-1,d3.max(data[1])+1])
    .range([ yMax, 0]);
    svgLeft.append("g").attr("class","tempAxis")
    .call(d3.axisLeft(yTemp));

    //Append "C" to Y axis
    svgLeft.append("g")
    .attr("class","tempAxis")
    .append("text")
    .text("\u2103")
    .attr("x",-24)
    .attr("y",yMax+20); //@bottom yMax +15 //top -10

    // Append MainSVG Object to the Page
    const svg = d3.select("#mainPlot")
    .append("svg").attr("width",xSize).attr("height",ySize)
    .append("g")
    .attr("transform","translate(" + 10 + "," + margin + ")");
    //22
    //X axis linear
    const xLinear = d3.scaleTime()
    .domain(d3.extent(data,(d)=>{return d[0];}))
    .range([0, xMax]);

    // X Axis band
    const x = d3.scaleBand()
    .domain(data[0])
    .range([0, xMax])
    .padding(0.3);//band width 0.1
    
    svg.append("g")
    .attr("transform", "translate(0," + newVal + ")")
    .call(d3.axisTop(x));//to display the X axis on top
    
    // Y Axis
    /*const y = d3.scaleLinear()//doesnt work
    .domain([d3.min(data[1])-1,d3.max(data[1])])
    .range([ yMax, 0]);*/
    //svg.append("g").call(d3.axisLeft(y));

    // Dots. It finally worked!! 2022-03-28 21:40
    svg.append('g') //+"&#176;"
    .selectAll("dot")
    .data(trData).enter()
    .append("circle")
    .attr("cx", function (d) { return x(d[0])+13; } )
    .attr("cy", function (d) { return yTemp(d[1]); } )
    .attr("r", 5)
    .style("fill", function(d,i){
        if(i > hh){return "#bed2e0";}else{return "#cc274c";}});
    
    //Bars. It finally worked!! 2022-03-28 22:00
    svg.append("g") /*.attr("class","inner_plot")*/
    .selectAll(".bar")
    .data(trData).enter()
    .append("rect")
    .attr("class","bar")
    .attr("x",(d)=>{return x(d[0]);})
    .attr("y",(d)=>{return yHumid(d[2]);})
    .attr("width",x.bandwidth())
    .attr("fill",function(d,i){
        if(i < hh){return "#cc274c40";}else{return "#bed2e030";}})
    .attr("rx",8)
    .transition().ease(d3.easeLinear)
    .duration(1500).delay((d,i)=>{return i*100;})
    .attr("height",(d)=>{return yMax -yHumid(d[2]);});
 
    var adjHeight=-11;
    svg.append("g")
    .selectAll(".txtTemp")
    .data(trData).enter()
    .append("text")
    .attr("class","txtTemp")
    .text(function(d,i){
        if((i%2)===0){
        return d[1]+"\u2103";}})   //d[2]+"%" //&#176;
    .attr("text-anchor","middle")
    .attr("x",function(d){
        return x(d[0])+13;})
    .attr("y",function(d,i){
        return yTemp(d[1]) +adjHeight;})
    .attr("font-family","sans-serif")
	.attr("font-size","11px");
    /* Diff heights for each Temp
    .attr("y",function(d,i){
        if((i%2) === 0){adjHeight=-11;}
        else{adjHeight=18;}
        return yTemp(d[1])+adjHeight;})
    */
    //offset = x()+13,yMax -1
    svg.append("g")
    .selectAll(".txtWind")
    .data(trData).enter()
    .append("text")
    .attr("class","txtWind")
    .text(function(d){return d[3]+"m";})
    .attr("text-anchor","middle")
    .attr("x",function(d){
        return x(d[0])+11;})
    .attr("y",function(d){return yMax -2;})
    .attr("font-family","sans-serif")
	.attr("font-size","11px");

    adjHeight = 0;
    svg.append("g")
    .selectAll(".txtWindDir")
    .data(trData).enter()
    .append("text")
    .attr("class","txtWindDir")
    .text(function(d){return d[4];})
    .attr("text-anchor","middle")
    .attr("x",function(d){
        return x(d[0])+13;})
    .attr("y",(d,i)=>{
        if((i % 2) === 0){adjHeight=23;
        }else{adjHeight =38;}
        return yMax + adjHeight;})
    .attr("font-family","sans-serif")
	.attr("font-size","11px");
}

function onMouseOver(d,i){
    //not useful on mobile
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
    //not useful on mobile
    d3.select(this).attr("class","bar");
    d3.select(this).transition().duration(400)
    .attr("width",x.bandwidth())
    .attr("y",(d)=>{return y(d[1]);})
    .attr("height",(d)=>{return yMax - y(d[1]);})
    d3.selectAll(".val").remove();
}

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
        //if (this_weather[1] >= 6 && this_weather[1] <= 20 ){
        hour.push(parseInt(this_weather[1]));
        temp.push(parseFloat(this_weather[3]));
        /*weather.push(this_weather[2]);rainProb.push(parseInt(this_weather[4]));
        rainMM.push(parseInt(this_weather[5]));*/
        humid.push(parseInt(this_weather[6]));
        wind.push(parseInt(this_weather[7]));
        windDir.push(this_weather[8].replace(/"/g,""));
        //}
    });
    return {curr_weather,hour,temp,humid,wind,windDir};
}

/*Using chart.js do this https://www.chartjs.org/docs/latest/samples/area/radar.html */
/* Build a chart using Chart.js 
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myData.hour,
            datasets: [{
                label: 'Local temperature',data: myData.temp,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',borderWidth: 1
            }]
        },
        options: {
            fill:false,scales: {y: {beginAtZero: true}}
        }
    });
*/
