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
    },
*/
const projects=[
    {
        name: "Solar Physics Research",
        title: "Code repository for some of the tools I used as a graduate student.",
        description: "Code to calculate Sun's zenith angle, atmospherical influence on particles\
        coming from the Sun, neutron's survival probability and other variables used to determine \
        solar neutrons acceleration mechanism. It requires <a target='blank' href='https://root.cern.ch'>CERN's ROOT</a> (C++ framework)",
        language: "C++",
        image: "",
        repo: "https://github.com/ndlopez/solar_neutrons",
        demo:"https://https://ndlopez.github.io/pages/research.html",
        builtOn:2015
    },{
        name:"Unpublished website of Galileo Inc.",
        title:"Employee's daily routine webpage and Internship schedule webpage.",
        description:"It includes a home page, 3 pages for different types of employees at the company:\
        new graduates, foreigners, and working moms and one page to display the schedule of internship. \
        The Bootstrap CSS library is used to display better the HTML elements.",
        language:"HTML, JavaScript, CSS",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/galileo_web",
        demo:"https://ndlopez.github.io/galileo_web",
        builtOn:2018
    },{
        name:"Quotes, a CLI Application",
        title:"Display on the Terminal quotes from famous people.",
        description:"Similar to the <fortune> CLI app available on most linux repositiories, \
        this application displays a quote every time a Terminal window is open. \
        Data was scrapped using Python\'s module Scrapy from the website goodreads.com.",
        language:"Python",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/quotes",
        demo:"https://ndlopez.github.io/",
        builtOn:2020
    },{
        name:"NowPlaying on ThirdRock Radio",
        title:"Notification app to display current song playing on NASA's ThirdRock radio",
        description:"Gnome Extension, MacOS Notification App and xbar-plugin to display \
        the current song playing on ThirdRock (internet radio). The application makes a request to \
        the host site to check for updates every four minutes. No data are stored on device. \
        It requires cron scheduler to get updates and MacOS xbar to install the plugin.",
        language:"JavaScript, Python",
        image:"https://raw.githubusercontent.com/ndlopez/fetch_id3/main/assets/fmLaPaz_plugin_prev.png",
        repo:"https://github.com/ndlopez/fetch_id3/tree/main/xbar_plugin",
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
        repo:"https://github.com/ndlopez/",
        demo:"",
        builtOn:2021
    },{
        name:"WeatherApp",
        title:"Gnome Extension, MacOS Notification App to display current weather conditions.",
        description:"The Gnome extension and MacOS Notification App displays the current \
        and the next hour conditions for a certain location which can be changed in the Shell Script. \
        Data was scrapped from tenki.jp using a Shell script. A cron \
        script can be implemented to download and scrap data every day.",
        language: "JavaScript, Shell",
        image: "../assets/cloud-heavy.svg",
        repo: "https://github.com/ndlopez/weather_app",
        demo: "",
        builtOn: 2021
    },{
        name: "Gnome Utilities",
        title: "Gnome Extension to display devices information.",
        description: "Display on the top panel information about SSD/HDD/NVME temperature, uptime, \
        battery, headphone-jack and Wifi/LAN download status",
        language: "JavaScript, Shell",
        image: "https://raw.githubusercontent.com/ndlopez/gnome_utils/main/gnome_utils.png",
        repo: "https://github.com/ndlopez/gnome_utils",
        demo: "",
        builtOn: 2021
    },{
        name:"NagoyaBus",
        title:"Android application to search for the next departing bus",
        description:"Android Application developed in Java using Android Studio. The application \
        allows the user to input the departure time and bus stop and arrival bus stop in Japanese \
        and displays based on that info the next departing buses. At the moment, it is not possible \
        to make transfers between bus lines, that work is still under development. Data are from the \
        Nagoya City Transportation Bureau.",
        language:"Java",
        image:"../assets/cloud-heavy.svg",
        repo:"https://github.com/ndlopez/busApp",
        demo:"",
        builtOn:2021
    },{
        name:"Paiza Tests",
        title:"Solutions to some of the programming skill examinations offered by paiza.jp",
        description:"The site paiza.jp offers different levels to test programming skills. Given my \
        level, I tried some of the B and C levels (I got a 979 score [中級プログラマー]). \
        The repository also includes code to solve the 'Wordle' game",
        image:"https://img001.prntscr.com/file/img001/U6hzfAXXR7aoLUBHf2mgww.png",
        language:"Python, Ruby",
        repo:"htpps://github.com/ndlopez/paiza_test",
        demo:"",
        builtOn:2022
    },{
        name: "Jumble Game",
        title: "Unscramble the words.<br/>Web Application",
        description: "Inspired by NewsRadio - Arcade \
        Episode (S03EP04). The displayed words are the ones whose meaning I did not know from \
        the books: Pride and Prejudice by Jane Austen, Zealot by Reza Aslan and Flowers for Algernon \
        by Daniel Keyes. It is a little hard to guess the correct word, but the app helps the user by coloring the \
        RIGHT letter.",
        language: "JavaScript",
        image: "https://raw.githubusercontent.com/ndlopez/jumble_game/main/data/Jumble_Game_2022-04-02_2152.png",
        repo: "https://github.com/ndlopez/jumble_game",
        demo: "https://ndlopez.github.io/jumble_game",
        builtOn: 2022
    },{
        name:"Weather WebApp",
        title:"REST-api to display current and forecast weather conditions. Updating data can be done within the website.",
        description:"The website displays current conditions plus a bar-plot done using D3JS library.\
        CRUD operations can be performed within the website. \
        Data was scrapped from tenki.jp using a Shell script and feed into a MySQL database hosted \
        locally running Debian on Windows11. WSL setup can be found on the repository. A cron \
        script can be implemented to download and scrap data every day. Back-end is developed in \
        PHP, Python and MySQL. Front-End is developed in JavaScript",
        language: "PHP, JavaScript, MySQL, Shell",
        image: "https://raw.githubusercontent.com/ndlopez/webApp/main/static/access_to_api.png",
        repo: "https://github.com/ndlopez/webApp",
        demo: "",
        builtOn: 2022
    },{
        name:"Stream Player App",
        title:"Discover new music by listening to NASA's ThirdRock radio.",
        description:"Windows TaskBar Application. Displays the current song playing on ThirdRock radio. \
        Artwork data is fetched from a repository. Requires Windows Desktop Runtime v3.1, \
        available once granted permission to execute.",
        language:"C#",
        image:"https://raw.githubusercontent.com/ndlopez/NowPlaying/master/assets/now_playing.png",
        repo:"https://github.com/ndlopez/NowPlaying",
        demo:"https://github.com/ndlopez/NowPlaying/raw/master/pre_release/nowPlaying_new.zip",
        builtOn:2022
    },{
        name: "Stream Player WebUI",
        title: "Listen to and discover new music while working/coding. Four different audio streams are available: ThirdRock radio, 113.fm 181.fm, and LaPaz.fm",
        description: "Web application developed in JavaScript. Displays a music player with pre-defined \
        streams. Keyboard events are associated to Play/Pause/Stop buttons. Works on both Desktop and Mobile \
        platforms. A 'recently listened' playlist is created for LaPaz.fm page. Disclaimer: Artwork is not \
        available for all the audio streams. Some CORS issue with the provider.",
        language: "JavaScript, CSS",
        image: "https://raw.githubusercontent.com/ndlopez/web_player/main/assets/new_design.png",
        repo: "https://github.com/ndlopez/web_player",
        demo: "https://ndlopez.github.io/web_player/",
        builtOn: 2022
    },{
        name: "MyNotes",
        title: "Android note application. Notes are saved on device.",
        description: "大学卒業後、自動車部品メーカーのxx株式会社に入社。自動車エンジン部品の生産技術部門に配属され、7年間生産技術業務に従事。工程設計から保全まで幅広い工程を経験し、4年目には生産ラインの時産向上の目標を掲げ、生産ライン見直しを実施。現状を分析し、切削条件の変更等複数の仮説のシミュレーションと検証を繰り返し、試行錯誤の結果大幅な生産性の向上に結びつけることができた。6年目から現在に至るまでアジアの現地法人に出向し、現地メンバーと協業し、生産ラインの新規立ち上げと管理指導業務に従事",
        language: "Java",
        image: "",
        repo: "",
        demo: "",
        builtOn: 2022
    },{
        name: "JMA weather",
        title: "WebPage to display current weather conditions for Nagoya. Features also, Sun/Moon aparent \
        position in the sky.",
        description: "Display on a webpage current weather conditions and 5-day forecast for Nagoya. \
        All data (updated every 10 minutes) are from the Japanese Metereological Agency (www.jma.go.jp).",
        language: "JavaScript, CSS",
        image: "",
        repo: "https://github.com/ndlopez/ndlopez.github.io/",
        demo: "https://ndlopez.github.io/pages/jma_weather.html",
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
    document.getElementById("nav-menu").style.display = "none";
    //document.getElementById("go2Top").style.display="none";
}
function closeNav(myOBj) {
    document.getElementById(myOBj).style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("nav-menu").style.display = "block";
    //document.getElementById("go2Top").style.display="";
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
const mainDiv = document.querySelector("#projects");
const divRow = document.createElement("div");
//const divRow2 = document.createElement("div");
mainDiv.appendChild(divRow);
//mainDiv.appendChild(divRow2);
for(let idx=0;idx<projects.length;idx++){
    divRow.appendChild(createCards(idx));
}