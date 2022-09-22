/* Fetching data from JMA.go.jp */
const jma_url = "https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json";

disp_info();

async function disp_info(){
    const gotData = await get_data();
    const myDiv = document.getElementById("jma_weather");
    myDiv.innerHTML = "<h2>"+gotData+"</h2>";
}
async function get_data(){
    const response = await fetch(jma_url);
    const data = await response.json();
    console.log(data[0].timeSeries[0].areas[0].weathers[0]);
    return data[0].timeSeries[0].areas[0].weathers[0];
}

const getweatherCodes = () => {
    fetch("../data/weather_code.json")
        .then(response => {
            return response.json()
        })
        // .then(jsondata => console.log(jsondata))
}