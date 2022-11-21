//import { theseMonths } from "./build_data.js"; SyntaxError!
/* Fetching data from JMA.go.jp */
const toRad = Math.PI/180.0;
const jmaURL = "https://www.jma.go.jp/bosai/forecast/data/forecast/";
const city_code = [{name:"Nagoya",code:230000},{name:"Takayama",code:210000}];
//var city_idx = 0; // 0:Nagoya, 1:Takayama
// data per hour for current day here:
// https://www.jma.go.jp/bosai/amedas/data/point/51106/20221007_09.json
// format seems to be yyyymmdd_hh.json, hh< currHour, hh=0,3,6,9,...
// also https://www.jma.go.jp/bosai/amedas/#area_type=offices&area_code=230000&amdno=51106&format=table1h&elems=53414

const ico_url = "https://www.jma.go.jp/bosai/forecast/img/";
const radar_url = ["https://static.tenki.jp/static-images/radar/recent/pref-26-middle.jpg",
"https://www.jma.go.jp/bosai/nowc/m_index.html#zoom:11/lat:35.211116/lon:136.901665/colordepth:normal/elements:hrpns&slmcs"];
const sun_time = ["https://dayspedia.com/api/widget/city/11369/?lang=en",
"https://dayspedia.com/api/widget/city/4311/?lang=en"];

const hh = [6,12,18,23];

const theseMonths = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
// const theseDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const theseDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

let my_date = new Date();
function zero_pad(tit){return (tit<10)?"0"+tit:tit;}
const thisHour = zero_pad(my_date.getHours()) , thisMins = zero_pad(my_date.getMinutes());
//console.log("now:",thisHour,thisMins);
async function sleepy(msec){
    return new Promise(resolve =>setTimeout(resolve,msec));
}

disp_info(0);

function getDateHour(isoStr){
    // inStr: ISO format
    const gotDate = new Date(isoStr);
    return {"monty":gotDate.getMonth() + 1,"tag":gotDate.getDate(),"day":gotDate.getDay(),"heure":gotDate.getHours()};
}

function build_sun_pos(sunSetRise) {
    const sunset = [sunSetRise.sunset[0],sunSetRise.sunset[1]];
    const sunrise = [sunSetRise.sunrise[0],sunSetRise.sunrise[1]];
    const width = 330, height = 200;//px, 300x180, 120 for summer
    const rr = (sunset[0]-sunrise[0])*60 + (sunset[1]-sunrise[1]); //mins
    const x0 = (thisHour - sunrise[0])*60 + (thisMins - sunrise[1]);//mins
    var posX0Y0 = [0,0];
    
    //const pTitle = document.createElement("p");
    //pTitle.innerText = "SUN POSITION";
    const subDiv = document.createElement("div");
    subDiv.setAttribute("class","clearfix");
    subDiv.setAttribute("id","sun-pos");
    //subDiv.appendChild(pTitle);

    const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgGroup.setAttribute("width",width);
    svgGroup.setAttribute("height",height);
    svgGroup.setAttribute("x","0px");
    svgGroup.setAttribute("y","0px");
    if((thisHour >= sunset[0]) || (thisHour <= sunrise[0])){
        subDiv.style.backgroundImage = "url('../assets/clear_night.svg')"; 
    }else{
        //x0 <= rr
        const theta = Math.acos(1 - (2*x0/rr));//radians
        var my_off = 20;
        posX0Y0 = [x0*width/rr-my_off,height-0.5*width*Math.sin(theta)];//px
        console.log("thisPos", sunset, sunrise, rr,x0,0.5*width*Math.sin(theta),theta,posX0Y0);
        subDiv.style.backgroundImage = "url('../assets/clear_day.svg')";
        subDiv.style.backgroundColor = "#93c3ea";
    }
    
    const svgBkg = document.createElementNS('http://www.w3.org/2000/svg','rect');
    svgBkg.setAttribute("fill","#87ceeb");
    svgBkg.setAttribute("x",0);
    svgBkg.setAttribute("y",0);
    svgBkg.setAttribute("width",width);
    svgBkg.setAttribute("height",height);

    const svgCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    svgCircle.setAttribute("stroke","#2e4054");
    svgCircle.setAttribute("stroke-width","2");
    svgCircle.setAttribute("fill","transparent");//
    svgCircle.setAttribute("stroke-dasharray","2,10");//5,5; 10,10; 5,10; 20,10,5,5,5,10
    svgCircle.setAttribute("r",0.5*width-26);
    svgCircle.setAttribute("cx",0.5*width);
    svgCircle.setAttribute("cy",0.5*width);
    const svgLine = document.createElementNS('http://www.w3.org/2000/svg','rect');
    svgLine.setAttribute("x",0);//26
    svgLine.setAttribute("y",0.5*width);
    svgLine.setAttribute("stroke","#50653b");//059862 smbc color
    svgLine.setAttribute("fill","#50653b");//green
    svgLine.setAttribute("width",width);// -2*26
    svgLine.setAttribute("height",30);
    //svgLine.setAttribute("x2",width);svgLine.setAttribute("y2",0.5*width);
    /*
    var myPath = "M240 100 A40 40 40 10 90 100 0"; semicirc
    var myPath = "M3.034,56C18.629,24.513,52.554,2.687,91.9,2.687S165.172,24.513,180.766,56h3.033 
    C168.016,23.041,132.807,0.098,91.9,0.098C50.995,0.098,15.785,23.041,0.002,56H3.034z";*/
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    svgPath.setAttribute("id","road");
    svgPath.setAttribute("stroke","#2e4054");
    svgPath.setAttribute("stroke-width","2");
    svgPath.setAttribute("fill","#2e4054");//#E8B720
    //svgPath.setAttribute("stroke-dasharray","10,10");
    var myPath = "M100 180 L130 150 170 150 200 180Z";
    svgPath.setAttribute("d",myPath);

    var offset = 5; 
    if(thisHour<12){offset = -5;}
    /*const svgSun = document.createElementNS('http://www.w3.org/2000/svg','circle');
    svgSun.setAttribute("fill","#E8B720");svgSun.setAttribute("r",5);
    svgSun.setAttribute("cx",posX0Y0[0]-offset);svgSun.setAttribute("cy",posX0Y0[1]);*/
    
    const svgSun = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgSun.setAttribute("fill","#E8B720");
    svgSun.setAttribute("x",posX0Y0[0]-offset);
    svgSun.setAttribute("y",posX0Y0[1]);
    svgSun.setAttribute("font-size","36px");
    svgSun.textContent = "\u2600";//String.fromCodePoint(0x1F506);
    //for some reason not parsed :(
    /*const svgSubG = document.createElementNS('http://www.w3.org/2000/svg','g');
    svgSubG.setAttribute("font-size","30");svgSubG.setAttribute("fill","#ececec");
    svgSubG.textContent = '<text x="'+(0.1*width)+'" y="'+(0.25*width)+'">\u2601</text>'+
    '<text x="10" y="40">\u2601</text>';*/
    const svgCloud = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgCloud.setAttribute("x",0.25*width);
    svgCloud.setAttribute("y",0.1*height);
    svgCloud.setAttribute("font-size","24px");
    svgCloud.textContent = String.fromCodePoint(0x1F681);//"\u2601"; //cloud
    // String.fromCodePoint(0x1F681); emoji helicopter, 1F699, jeep
    const svgRunner = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgRunner.setAttribute("x",0.9*width);
    svgRunner.setAttribute("y",height-5);
    svgRunner.setAttribute("font-size","24px");
    svgRunner.textContent = String.fromCodePoint(0x1F6B4);
    const svgRise = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgRise.setAttribute("fill","#fff");
    svgRise.setAttribute("x",15);
    svgRise.setAttribute("y",0.5*width+28);
    svgRise.setAttribute("font-size","16px");
    svgRise.textContent = sunrise[0]+":"+sunrise[1];
    const svgSet = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgSet.setAttribute("fill","#fff");
    svgSet.setAttribute("x",width-46);
    svgSet.setAttribute("y",0.5*width+28);
    svgSet.setAttribute("font-size","16px");
    svgSet.textContent = sunset[0]+":"+sunset[1];

    const svgHour = document.createElementNS('http://www.w3.org/2000/svg','text');
    svgHour.setAttribute("fill","#fff");
    svgHour.setAttribute("x",0.86*width);
    svgHour.setAttribute("y",0.33*height);
    svgHour.setAttribute("font-size","13px");
    svgHour.textContent = thisHour + ":" + thisMins;
    //svgGroup.appendChild(svgBkg);
    //svgGroup.appendChild(svgLine);
    //svgGroup.appendChild(svgPath);
    svgGroup.appendChild(svgCloud);
    
    if((thisHour >= sunset[0]) || (thisHour <= sunrise[0])){
        svgGroup.appendChild(svgRunner);
    }else{
        svgGroup.appendChild(svgCircle);
        svgGroup.appendChild(svgRise);
        svgGroup.appendChild(svgSet);
        svgGroup.appendChild(svgSun);
    }
    svgGroup.appendChild(svgHour);
    //svgGroup.appendChild(svgSubG);    
    subDiv.appendChild(svgGroup);
    return subDiv;
}

async function disp_info(kat){
    await sleepy(1500);
    const gotData = await get_data(kat);
    var myMin = gotData.temp[1][2];
    var myMax = gotData.temp[1][3];
    if(myMax === undefined){
        myMax = gotData.temp[1][1];
        myMin = gotData.temp[1][0];
    }
    var texty = "";
    const city_name = document.getElementById("this_place");
    if (city_name !== null){
        document.title = gotData.location + "天気";
        city_name.innerText = gotData.location;
    }
    const gotTime = await getTimes();//fetch sun rise/set
    //sunrise/sunset + wind info
    const weathernfo = document.getElementById("curr_weather");
    //if(thisHour <= gotTime.sunset[0]){
    weathernfo.appendChild(build_sun_pos(gotTime));
    //}
    
    /*var jennaDiv = document.createElement("div");
    jennaDiv.setAttribute("class","clearfix");
    jennaDiv.style.background = "url(../assets/daylen.svg) no-repeat";
    jennaDiv.style.backgroundPosition = "50% 0%";
    jennaDiv.setAttribute("id","sunRiseSet");
    texty = "<div class='column3 float-left'><img src='../assets/sunrise.svg' width=32/><p class='no-margin'>"+gotTime.sunrise[0]+":"+gotTime.sunrise[1]+
    "</p></div>" + "<div class='column3 float-left'><h3>"+ gotData.wind[0] +
    "</h3></div><div class='column3 float-left'><img src='../assets/sunset.svg' width=32/><p class='no-margin'>" + 
    gotTime.sunset[0]+":"+gotTime.sunset[1] + "</p></div>";
    jennaDiv.innerHTML = texty;
    weathernfo.appendChild(jennaDiv);*/
    
    const nowTenki = document.getElementById("now_weather");
    if(nowTenki !== null){
        var kaisa="";
        if((thisHour >= parseInt(gotTime.sunset[0])) || (thisHour <= parseInt(gotTime.sunrise[0]))){
            kaisa = "<img src='../assets/cloudy_night.svg'/><br/>";
        }else{
            kaisa = "<img src='" + ico_url + gotData.icon[0] +
            ".svg' onerror='this.onerror=null;this.src=\"../assets/cloudy_all.svg\"'/><br/>";
        }
        nowTenki.innerHTML = kaisa + gotData.weather[0] + "<br/>" + gotData.wind[0];
    }
    /* today rain Prob*/
    const rainP = document.getElementById("rainProb");
    if(rainP !== null){
        rainP.innerText = gotData.rain[1][0] + "%";
    }
    /* today wind info 
    const winds = document.getElementById("wind_info");
    if(winds !== null){winds.innerHTML = gotData.wind[0];}*/
    const radarImg = document.getElementById("radar_img");
    if(gotData.rain[1][0] > 0){
        // put a radar img from tenki.jp
        radarImg.innerHTML = '<p>Click on the img for 1hour forecast</p><a href="' + 
        radar_url[1] + '" title="Redirects to JMA.go.jp" target="_blank"><img src="' + radar_url[0] + '"></a>';
    }
    //when parsing currCond only: var currWeather = gotData.weather[1].split("　");
    /*for(let idx=0;idx<gotData.weather.length;idx++){
        var currWeather = gotData.weather[idx].split("　");
        texty += "<h2>"+gotData.time[idx].slice(0,10)+" "+currWeather[0]+"<img src='"+ico_url+gotData.icon[idx]+".svg'/></h2>";}*/
    /* Weekly forecast Max/Min*/
    const colDiv = document.getElementById("forecaster");
    var init_idx = 2;
    if(thisHour >= 11){init_idx=1;}
    //create as many group div as forecast are available
    for(let idx = init_idx;idx < gotData.forecast[0].length; idx++){
        const groupDiv = document.createElement("div");
        groupDiv.setAttribute("class","row");

        var aux = getDateHour(gotData.forecast[0][idx]);
        var tempMin = gotData.forecast[2][idx], tempMax = gotData.forecast[3][idx];
        texty = "<div class='column3 float-left' style='margin:0;border-radius:inherit;'><div class='row-date'>" + 
        "<h2 class='col-date float-left'>"+ aux.tag + "</h2><div class='col-date float-left' style='text-align:left;padding-left:0;'><p><strong>"+theseDays[aux.day] + 
        "</strong></p><p><small>"+theseMonths[aux.monty-1]+"</small></p></div></div></div>";

        texty += "<div class='column3 float-left' style='text-align:right;'><img src='"+
        ico_url+ gotData.forecast[1][idx]+
        ".svg' onerror='this.onerror=null;this.src=\"../assets/overcast.svg\"'/></div>";

        /*if(idx==0){ tempMin = myMin;tempMax = myMax; }*/
        texty += "<div class='column3 float-left'><h4>"+tempMin+"&#8451; | "+tempMax+"&#8451;</h4></div>";
        if((idx == 1) && (gotData.wind[2] != undefined)){
            //should apply after 11AM
            texty += "<p style='text-align:center;'>"+gotData.weather[2]+"、"+gotData.wind[2]+"</p>";
        }
        groupDiv.innerHTML = texty;
        colDiv.appendChild(groupDiv);
    }

    /* 2moro forecast + rain Prob */
    const myDiv = document.getElementById("foreDiv");
    const headTitle = document.createElement("h2");
    var this_idx = 1;//Before 11AM 0:today, 1: tomorrow
    if(thisHour >= 11){this_idx = 0;}     
    var sofy = getDateHour(gotData.forecast[0][this_idx]);
    headTitle.innerText = "Tomorrow: " + theseDays[sofy.day] + ", " + theseMonths[sofy.monty-1] +
    " " + sofy.tag;
    myDiv.appendChild(headTitle);

    const iconElm = document.createElement("div");
    iconElm.setAttribute("class","column float-left");
    texty = "<br/><p>"+gotData.weather[1] +"</p><p>"+gotData.wind[1]+"</p>";
    
    texty += "<span>Min "+ myMin +"&#8451; | Max "+ myMax+"&#8451;</span>";
    iconElm.innerHTML = "<img src='"+ico_url+gotData.icon[1]+
    ".svg' onerror='this.onerror=null;this.src=\"../assets/cloudy_all.svg\"'/>"+
    texty;
    
    const tempElm = document.createElement("div");//tomorrow temp
    tempElm.setAttribute("class","column float-left");
    texty = "";
    let jdx = gotData.rain[0].length-1;
    let kdx = 0;
    var textW = "<p>降水確率[%]</p><div class='row'>";
    for(let idx = jdx-3;idx < jdx+1;idx++){
        const get_date = getDateHour(gotData.rain[0][idx]);
        texty += "<p class='col4'>"+get_date.heure+" - "+hh[kdx]+"<br/>"+gotData.rain[1][idx]+"%</p>";
        //console.log(gotData.rain[0].length,texty);
	    kdx++;
    }
    texty += "</div>";
    tempElm.innerHTML = textW + texty;
    myDiv.appendChild(iconElm);
    myDiv.appendChild(tempElm);
    //console.log("forecast:",gotData.forecast);
}

async function get_data(jdx){
    var my_url = jmaURL + city_code[jdx].code + ".json";
    const response = await fetch(my_url);
    const data = await response.json();
    //0: currDay, 1: nextDay, 2:dayAfter2moro
    const place = data[1].timeSeries[1].areas[jdx].area.name;
    var upTime = data[0].timeSeries[0].timeDefines;
    var thisWeather = data[0].timeSeries[0].areas[jdx].weathers;
    var weatherIcon = data[0].timeSeries[0].areas[jdx].weatherCodes;
    var winds = data[0].timeSeries[0].areas[jdx].winds;
    var rainTimes = data[0].timeSeries[1].timeDefines;//6:every 6hrs
    var rainProb = data[0].timeSeries[1].areas[jdx].pops;//6 data
    var tempTimes = data[0].timeSeries[2].timeDefines;//max/min only
    var temp = data[0].timeSeries[2].areas[jdx].temps;//currDay:0,1; nextDay:2,3
    //weekly forecast
    var weekDates = data[1].timeSeries[0].timeDefines;// 7dates
    var weekIcons = data[1].timeSeries[0].areas[jdx].weatherCodes; // 7 code Icons
    //var weekTempDates = data[1].timeSeries[1].timeDefines; //7dates
    var weekTempMin = data[1].timeSeries[1].areas[jdx].tempsMin;
    var weekTempMax = data[1].timeSeries[1].areas[jdx].tempsMax;
    //console.log(currWeather[0],weatherIcon);
    return {"location":place,"time":upTime,"weather":thisWeather,"icon":weatherIcon,
    "wind":winds,"rain":[rainTimes,rainProb],"temp":[tempTimes,temp],
    "forecast":[weekDates,weekIcons,weekTempMin,weekTempMax]};
}

/*async function getIconCodes(){
    const resp = await fetch("../data/w_codes.json");
    const data = await resp.json();return data;
}*/

function convTime(unixT){
    const myTime = new Date(unixT *1000);
    var minut = myTime.getMinutes();
    if(minut < 10){
        minut = "0" + minut;
    }
    return [myTime.getHours(), minut];
}

async function getTimes(){
    const response = await fetch(sun_time[1]);
    const data = await response.json();
    let sunRise = data["sunrise"];
    let sunSet = data["sunset"];
    
    return {"sunrise":convTime(sunRise),"sunset":convTime(sunSet)}; 
}