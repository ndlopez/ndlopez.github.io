const projects=[
    {
        name:"Company Website",
        title:"Employees Page",
        description:"Unpublished website of Galileo Inc. \
        It includes a home page, 3 pages for different types of employees at the company:\
        new graduates, foreigners, and working moms and one page to display the schedule of internship.",
        language:"HTML, CSS, SVG, JavaScript",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/galileo",
        demo:"https://ndlopez.github.io/pages/galileo/index.html",
        builtOn:2018
    },{
        name:"Quotes",
        title:"CLI Application",
        description:"Display on the Terminal quotes from famous people. Data was scrapped using \
        Python\'s module Scrapy from goodreads.com.",
        language:"Shell, Python, Ruby, JavaScript",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/quotes",
        demo:"https://ndlopez.github.io/",
        builtOn:2020
    },{
        name:"NowPlaying",
        title:"Notification app",
        description:"Gnome extension, MacOS Notification and Windows TaskBar Application. It displays \
        the current song playing on FM La Paz. The application makes a request to the host site to \
        check for updates every four minutes.",
        language:"JavaScript, C#",
        image:"https://raw.githubusercontent.com/ndlopez/NowPlaying/master/assets/now_playing.png",
        repo:"https://github.com/ndlopez/fmLaPazNow",
        demo:"",
        builtOn:2020
    },{
        name:"PassAdm",
        title:"Password Administrator",
        description:"Desktop and Android Application. The first one developed using Python\'s \
        module Tkinter and data recorded in a JSON file. The latter one developed in Java using \
        Android Studio, data is stored on device using SQLite. Both applications can generate \
        passwords, passphrases and PINs.",
        language:"Python, Java",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/passAdm",
        demo:"",
        builtOn:2021
    },{
        name:"WeatherApp",
        title:"Display current weather",
        description:"Website and Gnome Extension. The 1st one displays current conditions plus \
        a bar-plot done using D3JS. The latter is a notification app that displays the current hour \
        and the next hour conditions. Data was scrapped from tenki.jp using a Shell script.",
        language:"JavaScript, PHP, Python",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/weather_app",
        demo:"https://ndlopez.github.io/",
        builtOn:2020
    },{
        name:"NagoyaBus",
        title:"Display next departing bus",
        description:"Android Application developed in Java using Android Studio. Data is from the \
        Nagoya City Transportation Bureau. The application allows the user to input departure and \
        arrival bus stop in Japanese and displays based on that input the next departing buses. \
        It is not possible to make transfers between bus lines, that work is still in construction.",
        language:"Java",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/busApp",
        demo:"",
        builtOn:2021
    },{
        name:"Paiza Tests",
        title:"Programming skill test",
        description:"The site paiza.jp offers different levels to test programming skills. Given my \
        level, I tried some of the C and B level.",
        image:"https://img001.prntscr.com/file/img001/U6hzfAXXR7aoLUBHf2mgww.png",
        language:"Python, Ruby",
        repo:"htpps://github.com/ndlopez/paiza_test",
        demo:"",
        builtOn:2022
    },{
        name:"Jumble Game",
        title:"Scrambled words",
        description:"Web Application developed in JavaScript and inspired by NewsRadio - Arcade \
        Episode (S03EP04). The displayed words are the ones whose meaning I did not know from \
        two books: Pride and Prejudice by Jane Austen and Zealot by Reza Aslan.",
        language:"JavaScript, Ruby",
        image:"https://raw.githubusercontent.com/ndlopez/jumble_game/main/data/Jumble_Game_2022-04-02_2152.png",
        repo:"htpps://github.com/ndlopez/jumble_game",
        demo:"https://ndlopez.github.io/jumble_game",
        builtOn:2022
    },{
        name:"NagoyaBus",
        title:"Display the next departing bus",
        description:"Web Application currently in develope using Vue.js.",
        language:"JavaScript",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/busApp",
        demo:"htpps://ndlopez.github.io/",
        builtOn:2022
    }
];
//console.log(projects[0].name,projects.length);

function createCards(jdx){
    var divCol = document.createElement("div");
    divCol.setAttribute("class","column3");
    var divCard = document.createElement("div");
    divCard.setAttribute("class","card");
    var txt = "<img src = '"+projects[jdx].image + "' onclick=\"openNav('myNav" + jdx + "')\">";
    txt += "<div class='container'><h4><b>"+projects[jdx].name+"</b></h4><p>";
    txt += projects[jdx].title+"<br><span>"+projects[jdx].language+"</span></p></div>";
    //txt += "<br>"+projects[jdx].builtOn
    divCard.innerHTML = txt;
    divCol.appendChild(divCard);
    document.body.appendChild(addDivs(jdx));
    //divCol.innerHTML = txt;
    return divCol;
}
/*open and close modal*/
function openNav(myOBj) {
    //document.getElementById(myOBj).style.width = "100%";
    document.getElementById(myOBj).style.display = "block";
    document.body.style.overflow = "hidden";
    //document.getElementById("go2Top").style.display="none";
}
function closeNav(myOBj) {
    document.getElementById(myOBj).style.display = "none";
    document.body.style.overflow = "auto";
    //document.getElementById("go2Top").style.display="";
}
function addDivs(_val){
    const secDiv = document.createElement("div");
    secDiv.id = "myNav" + _val;
    secDiv.className = "proj_stats";
    secDiv.innerHTML=`<a href='javascript:void(0)' class='closeBtn' onclick="closeNav('myNav${_val}')">&times;</a>`;
	secDiv.innerHTML += "<div><h2 class='header'>" + projects[_val].name + "</h2></div>";
    secDiv.innerHTML += "<div><div class='column'><img src='" +
    projects[_val].image + "'><p>Screenshot of main window</p></div><div class='column mod-content'><h3>"+ 
    projects[_val].title + "</h3><p>" + projects[_val].description + "</p><ul><li>Project Repository</li><li><a href='"+
    projects[_val].repo + "'>Available here.</a></li><li>Live Demo: <a href='" + 
    projects[_val].demo + "'>please click here</a></li>" +
    "<li> Language: " + projects[_val].language + 
    "</li><li>Built on: "+ projects[_val].builtOn+ "</li></ul></div></div>";
    return secDiv;
}
const mainDiv = document.querySelector("#projects");
const divRow1 = document.createElement("div");
const divRow2 = document.createElement("div");
mainDiv.appendChild(divRow1);
mainDiv.appendChild(divRow2);
for(let idx=0;idx<projects.length;idx++){
    if(idx < 5){
        divRow1.appendChild(createCards(idx));
    }else{
        divRow2.appendChild(createCards(idx));
    }
}