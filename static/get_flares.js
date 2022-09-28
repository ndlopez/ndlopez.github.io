const flares_latest = "https://services.swpc.noaa.gov/json/goes/primary/xray-flares-latest.json";

latest_xrays();

async function latest_xrays(){
    const titles = ["current","begin","max","end"];
    const data = await get_noaa();
    const mainDiv = document.getElementById("latest_event");
    const myList = document.createElement("table");

    myList.setAttribute("id","myday");

    var texty = "<tr><th></th><th>time</th><th>class</th></tr>";
    texty += "<tr><td>current</td><td>"+data["time_tag"]+"</td><td>"+data["current_class"]+"</td></tr>";
    texty += "<tr><td>start</td><td>"+data["begin_time"]+"</td><td>"+data["begin_class"]+"</td></tr>";
    texty += "<tr><td>maximum</td><td>"+data["max_time"]+"</td><td>"+data["max_class"]+"</td></tr>";
    texty += "<tr><td>end</td><td>"+data["end_time"]+"</td><td>"+data["end_class"]+"</td></tr>";
    myList.innerHTML = texty;
    mainDiv.appendChild(myList);
}
async function get_noaa(){
    const response = await fetch(flares_latest);
    const latest= await response.json();
    return latest[0];
}