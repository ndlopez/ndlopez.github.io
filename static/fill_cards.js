const projects=[
    {
        name:"Unpublished website of Galileo Inc.",
        title:"Employee's daily routine webpage and Internship schedule webpage.<br>Click for more...",
        description:"It includes a home page, 3 pages for different types of employees at the company:\
        new graduates, foreigners, and working moms and one page to display the schedule of internship. \
        The Bootstrap CSS library is used to display better the HTML elements.",
        language:"JavaScript, CSS, HTML",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/galileo",
        demo:"https://ndlopez.github.io/pages/galileo/index.html",
        builtOn:2018
    },{
        name:"Quotes, a CLI Application",
        title:"Display on the Terminal quotes from famous people.",
        description:"Similar to the <fortune> CLI app available on most linux repositiories, \
        this application displays a quote every time a Terminal window is open. \
        Data was scrapped using Python\'s module Scrapy from the website goodreads.com.",
        language:"Python, JavaScript",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/quotes",
        demo:"https://ndlopez.github.io/",
        builtOn:2020
    },{
        name:"NowPlaying",
        title:"Notification app to display current song playing on FM La Paz",
        description:"Gnome extension and Windows TaskBar Application. It displays \
        the current song playing on FM La Paz (an internet radio). The application makes a request to \
        the host site to check for updates every four minutes. No data is stored on device. The repository also \
        also includes a Notification App for MacOS, it requires cron scheduler to get updates.",
        language:"JavaScript, C#",
        image:"https://raw.githubusercontent.com/ndlopez/NowPlaying/master/assets/now_playing.png",
        repo:"https://github.com/ndlopez/fmLaPazNow",
        demo:"",
        builtOn:2020
    },{
        name:"PassAdm",
        title:"Desktop and Android App to Generate and Manage Passwords",
        description:"Desktop and Android Application. The first purpose of this application is to solve\
         the daunting task of generating a strong password on the fly. At the touch of a button \
        the user can generate random passwords, passphrases and pins. Both applications allow the user \
        to store their accounts on device protected by a main password and perform CRUD operations. The desktop app \
        was developed in Python using the Tkinter module. The user data is recorded in a JSON file. Whereas, the \
        Android app was developed in Java using Android Studio. The user data is stored on device using \
        a SQLite database.",
        language:"Python, Java",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/passAdm",
        demo:"",
        builtOn:2021
    },{
        name:"WeatherApp",
        title:"Website and Gnome Extension to display current weather conditions.",
        description:"The website displays current conditions plus a bar-plot done using D3JS library. \
        The Gnome extension is a notification app that displays the current \
        and the next hour conditions. Data was scrapped from tenki.jp using a Shell script. A cron \
        script can be implemented to download and scrap data every day. Back-end is developed in \
        PHP, Python, and MySQL. A Windows 10 widget is in development in C#.",
        language:"Shell, JavaScript",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/weather_app",
        demo:"https://ndlopez.github.io/",
        builtOn: 2021
    },{
        name: "Linux/UNIX info tools",
        title: "Gnome Extension to display OS information.",
        description: "Display on the top panel information about SDD/HDD temperature, uptime, battery status,headphone-jack status and Wifi/LAN download status",
        language: "JavaScript, Shell",
        image: "../assets/cloud-heavy.svg",
        repo: "https://github.com/ndlopez/weather_app",
        demo: "",
        builtOn: 2021
    },{
        name:"NagoyaBus",
        title:"Android application to search for the next departing bus",
        description:"Android Application developed in Java using Android Studio. The application \
        allows the user to input the departure time and bus stop and arrival bus stop in Japanese \
        and displays based on that info the next departing buses. At the moment, it is not possible \
        to make transfers between bus lines, that work is still under development. Data is from the \
        Nagoya City Transportation Bureau.",
        language:"Java",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/busApp",
        demo:"",
        builtOn:2021
    },{
        name:"Paiza Tests",
        title:"Test for programming skills",
        description:"The site paiza.jp offers different levels to test programming skills. Given my \
        level, I tried some of the C and B level. The repository also includes code to solve the 'Wordle' \
        game",
        image:"https://img001.prntscr.com/file/img001/U6hzfAXXR7aoLUBHf2mgww.png",
        language:"Python, Ruby",
        repo:"htpps://github.com/ndlopez/paiza_test",
        demo:"",
        builtOn:2022
    },{
        name: "Jumble Game",
        title: "Unscramble the words.",
        description: "Web Application developed in JavaScript. Inspired by NewsRadio - Arcade \
        Episode (S03EP04). The displayed words are the ones whose meaning I did not know from \
        the books: Pride and Prejudice by Jane Austen, Zealot by Reza Aslan and Flowers for Algernon \
        by Daniel Keyes. It is a little hard to guess the correct word, but the app helps the user by coloring the \
        RIGHT letter.",
        language: "JavaScript",
        image: "https://raw.githubusercontent.com/ndlopez/jumble_game/main/data/Jumble_Game_2022-04-02_2152.png",
        repo: "htpps://github.com/ndlopez/jumble_game",
        demo: "https://ndlopez.github.io/jumble_game",
        builtOn: 2022
    }
];
/*,{
    name: "NagoyaBus",
    title: "Display the next departing bus",
    description: "Web Application currently in development.",
    language: "JavaScript",
    image: "../assets/cloud-heavy.svg",
    repo: "https://github.com/ndlopez/busApp",
    demo: "htpps://ndlopez.github.io/",
    builtOn: 2022
}*/
//console.log(projects[0].name,projects.length);
//Refer to this girl's site https://danajanoskova.sk/
function createCards(jdx){
    var divCol = document.createElement("div");
    divCol.setAttribute("class","column3");
    var divCard = document.createElement("div");
    divCard.setAttribute("class","card");
    var buildNav = "openNav('myNav" + jdx + "')";
    divCard.setAttribute("onclick",buildNav);
    //var txt = "<img src = '"+projects[jdx].image + "' onclick=\"openNav('myNav" + jdx + "')\">";
    var txt = "<div class='container'><h3>"+projects[jdx].name+"</h3><p>";
    txt += projects[jdx].title+"</p></div><div class='small'><p>"+projects[jdx].language+"</p></div>";
    //txt += "<br>"+projects[jdx].builtOn
    divCard.innerHTML = txt;
    divCol.appendChild(divCard);
    document.body.appendChild(addDivs(jdx));
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
const divRow = document.createElement("div");
//const divRow2 = document.createElement("div");
mainDiv.appendChild(divRow);
//mainDiv.appendChild(divRow2);
for(let idx=0;idx<projects.length;idx++){
    divRow.appendChild(createCards(idx));
}