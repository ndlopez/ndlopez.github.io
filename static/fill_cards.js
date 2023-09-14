/*
    DLopez small programming projects
{
    name:"Numerical Analysis in C",
    title:"Code repository for FIS340. Numerical Analysis for Physicists.",
    description:"It includes several code samples to solve numerically some problems in Thermodynamics and \
    Electromagnetism. Data Analysis algorithms are also included.",
    language:"C",
    image:"../assets/cloud-heavy.svg",
    repo:"https://github.com/ndlopez/num_anl/",
    demo:"",
    builtOn:2004
    },{
    name: "NagoyaBus",
    title: "Display the next departing bus",
    description: "Web Application currently in development.",
    language: "JavaScript",
    image: "../assets/cloud-heavy.svg",
    repo: "https://github.com/ndlopez/busApp",
    demo: "htpps://ndlopez.github.io/",
    builtOn: 2022
}
*/
//console.log(projects[0].name,projects.length);
//Refer to this girl's site https://danajanoskova.sk/

const mainDiv = document.querySelector("#projects");
const divRow = document.createElement("div");
//const divRow2 = document.createElement("div");
//mainDiv.appendChild(divRow2);
createCards();
async function createCards(){
    const projects = await get_list();
    for(let idx=0;idx<projects.length;idx++){
        divRow.appendChild(buildCards(idx));
    }
    function buildCards(jdx){
        const divCol = document.createElement("div");
        divCol.setAttribute("class","column3");
        const divCard = document.createElement("div");
        divCard.setAttribute("class","card");
        const buildNav = "openNav('myNav" + jdx + "')";
        divCard.setAttribute("onclick",buildNav);
        //var txt = "<img src = '"+projects[jdx].image + "' onclick=\"openNav('myNav" + jdx + "')\">";
        let txt = "<div class='container'><h3>"+projects[jdx].name+"</h3><p>";
        txt += projects[jdx].title+"</p></div><div class='small'><p>"+projects[jdx].language+"</p></div>";
        //txt += "<br>"+projects[jdx].builtOn
        divCard.innerHTML = txt;
        divCol.appendChild(divCard);
        document.body.appendChild(addDivs(jdx));
        return divCol;
    }
    
    function addDivs(_val){
        const secDiv = document.createElement("div");
        secDiv.id = "myNav" + _val;
        secDiv.className = "proj_stats";
        secDiv.innerHTML=`<a href='javascript:void(0)' class='closeBtn' onclick="closeNav('myNav${_val}')">&times;</a>`;
        secDiv.innerHTML += "<div><h2 class='header'>" + projects[_val].name + "</h2></div>";
        secDiv.innerHTML += "<div><div class='column'><img class='hero' src='" +
        projects[_val].image + "' alt='Screenshot of main window'><p>Main window</p></div><div class='column mod-content'><h3>"+ 
        projects[_val].title + "</h3><p>" + projects[_val].description + "</p><div><p class='col4'><a href='"+
        projects[_val].repo + "'><img src='../assets/github-logo.svg'/></a><br/>repo</p><p class='col4'><a href='" + 
        projects[_val].demo + "'><img src='../assets/firefox-browser.svg' width='32'/></a><br/>demo</p>" +
        "<p class='col4'><img src='../assets/laptop-code.svg' width='40'/><br/>" + projects[_val].language + 
        "</p><p class='col4'><img src='../assets/calendar-alt.svg' width='28'/><br/>"+ projects[_val].builtOn+ 
        "</p></div></div></div>";
        return secDiv;
    }
    mainDiv.appendChild(divRow);
}
/*open and close modal*/
function openNav(myOBj) {
    //document.getElementById(myOBj).style.width = "100%";
    document.getElementById(myOBj).style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("nav-menu").style.display = "none";
    //document.getElementById("go2Top").style.display="none";
}
function closeNav(myOBj) {
    document.getElementById(myOBj).style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("nav-menu").style.display = "block";
    //document.getElementById("go2Top").style.display="";
}

async function get_list(){
    const proj_url = "https://raw.githubusercontent.com/ndlopez/scrapped/main/data/projects.json";
    try {
        const resp = await fetch(proj_url);
        const data = await resp.json();
        // console.log("gotThis",data["projects"]);
        return data["projects"];
    } catch (error) {
        alert("sorry, no projects are available");
    }
}