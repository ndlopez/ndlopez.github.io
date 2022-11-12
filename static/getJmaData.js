//import { theseMonths } from "./build_data.js"; SyntaxError!
/* Fetching data from JMA.go.jp */
const jmaURL = "https://www.jma.go.jp/bosai/forecast/data/forecast/";
const city_code = [{name:"Nagoya",code:230000},{name:"Takayama",code:210000}];
const city_idx = 0; // 0:Nagoya, 1:Takayama
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

var thisHour = new Date().getHours();

async function sleepy(msec){
    return new Promise(resolve =>setTimeout(resolve,msec));
}
disp_info();

function getDateHour(isoStr){
    // inStr: ISO format
    const gotDate = new Date(isoStr);
    return {"monty":gotDate.getMonth() + 1,"tag":gotDate.getDate(),"day":gotDate.getDay(),"heure":gotDate.getHours()};
}

async function disp_info(){
    await sleepy(1500);
    const gotData = await get_data();
    var myMin = gotData.temp[1][2];
    var myMax = gotData.temp[1][3];
    if(myMax === undefined){
        myMax = gotData.temp[1][1];
        myMin = gotData.temp[1][0];
    }
    var texty = "";
    const gotTime = await getTimes();//fetch sun rise/set
    //sunrise/sunset + wind info
    const weathernfo = document.getElementById("curr_weather");
    var jennaDiv = document.createElement("div");
    jennaDiv.setAttribute("class","clearfix");
    jennaDiv.style.background = "url(../assets/daylen.svg) no-repeat";
    jennaDiv.style.backgroundPosition = "50% 0%";
    jennaDiv.setAttribute("id","sunRiseSet");
    texty = "<div class='column3 float-left'><img src='../assets/sunrise.svg' width=32/><p class='no-margin'>"+gotTime.sunrise[0]+":"+gotTime.sunrise[1]+
    "</p></div><div class='column3 float-left'><h3>"+ gotData.wind[0] +
    "</h3></div><div class='column3 float-left'><img src='../assets/sunset.svg' width=32/><p class='no-margin'>" + 
    gotTime.sunset[0]+":"+gotTime.sunset[1] + "</p></div>";
    jennaDiv.innerHTML = texty;
    weathernfo.appendChild(jennaDiv);
    
    const nowTenki = document.getElementById("now_weather");
    if(nowTenki !== null){
        var kaisa="";
        if(thisHour <= parseInt(gotTime.sunset[0])){
            kaisa = "<img src='" + ico_url+gotData.icon[0] +
            ".svg' onerror='this.onerror=null;this.src=\"../assets/cloudy_all.svg\"'/><br/>";
        }else{
            kaisa = "<img src='../assets/cloudy_night.svg'/>";
        }
        nowTenki.innerHTML = kaisa + gotData.weather[0];
    }
    /* today rain Prob*/
    const rainP = document.getElementById("rainProb");
    if(rainP !== null){
        rainP.innerText = gotData.rain[1][0] + "%";
    }
    /* today wind info */
    /*const winds = document.getElementById("wind_info");
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
    //create as many group div as forecast are available
    for(let idx=1;idx<gotData.forecast[0].length;idx++){
        const groupDiv = document.createElement("div");
        groupDiv.setAttribute("class","row");

        var aux = getDateHour(gotData.forecast[0][idx]);
        var tempMin = gotData.forecast[2][idx], tempMax = gotData.forecast[3][idx];
        texty = "<div class='column3 float-left' style='margin:0;border-radius:inherit;'><div class='row-date'>" + 
        "<h2 class='col-date float-left'>"+ aux.tag + "</h2><div class='col-date float-left' style='text-align:left;padding-left:0;'><p><strong>"+theseDays[aux.day] + 
        "</strong></p><p><small>"+theseMonths[aux.monty-1]+"</small></p></div></div></div>";

        texty += "<div class='column3 float-left' style='text-align:right;'><img src='"+
        ico_url+ gotData.forecast[1][idx]+
        ".svg' onerror='this.onerror=null;this.src=\"../assets/cloudy_all.svg\"'/></div>";

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
    var sofy = getDateHour(gotData.forecast[0][0]);
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
async function get_data(){
    var my_url = jmaURL+city_code[city_idx].code+".json";
    const response = await fetch(my_url);
    const data = await response.json();
    //0: currDay, 1: nextDay, 2:dayAfter2moro
    const place = data[1].timeSeries[1].areas[city_idx].area.name;
    var upTime = data[0].timeSeries[0].timeDefines;
    var thisWeather = data[0].timeSeries[0].areas[city_idx].weathers;
    var weatherIcon = data[0].timeSeries[0].areas[city_idx].weatherCodes;
    var winds = data[0].timeSeries[0].areas[city_idx].winds;
    var rainTimes = data[0].timeSeries[1].timeDefines;//6:every 6hrs
    var rainProb = data[0].timeSeries[1].areas[city_idx].pops;//6 data
    var tempTimes = data[0].timeSeries[2].timeDefines;//max/min only
    var temp = data[0].timeSeries[2].areas[city_idx].temps;//currDay:0,1; nextDay:2,3
    //weekly forecast
    var weekDates = data[1].timeSeries[0].timeDefines;// 7dates
    var weekIcons = data[1].timeSeries[0].areas[city_idx].weatherCodes; // 7 code Icons
    //var weekTempDates = data[1].timeSeries[1].timeDefines; //7dates
    var weekTempMin = data[1].timeSeries[1].areas[city_idx].tempsMin;
    var weekTempMax = data[1].timeSeries[1].areas[city_idx].tempsMax;
    //console.log(currWeather[0],weatherIcon);
    return {"location":place,"time":upTime,"weather":thisWeather,"icon":weatherIcon,
    "wind":winds,"rain":[rainTimes,rainProb],"temp":[tempTimes,temp],
    "forecast":[weekDates,weekIcons,weekTempMin,weekTempMax]};
}

/*async function getIconCodes(){
    const resp = await fetch("../data/w_codes.json");
    const data = await resp.json();
    return data;
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