const projects=[
    {
        name:"Company Website",
        title:"Employees Page",
        description:"Unpublished website of Galileo Inc. \
        It includes a home page and 3 pages for different types of employees at the company:\
        new graduates, foreigners, and working moms",
        language:"HTML, CSS, SVG, JavaScript",
        image:"logo192.png",
        link:"https://ndlopez.github.io/galileo",
        builtOn:2018
    },{
        name:"Quotes",
        title:"CLI Application",
        description:"Display on the Terminal quotes from famous people. Data was scrapped using \
        Python\'s module Scrapy from the goodreads.com website.",
        language:"Shell, Python, Ruby, JavaScript",
        image:"logo192.png",
        link:"https://github.com/ndlopez/quotes",
        builtOn:2020
    },{
        name:"NowPlaying",
        title:"Notification app",
        description:"Gnome extension and Windows TaskBar Application. It displays the current song \
        playing on FM La Paz. Every four minutes a request is made to the host site to check for updates.",
        language:"JavaScript, C#",
        image:"https://raw.githubusercontent.com/ndlopez/NowPlaying/master/assets/now_playing.png",
        link:"https://github.com/ndlopez/fmLaPazNow",
        builtOn:2020
    },{
        name:"PassAdm",
        title:"Password Administrator",
        description:"Desktop and Android Application. The first one developed using Python\'s \
        module Tkinter and data recorded in a JSON file. The latter one developed in Java using \
        Android Studio, data is stored on device using SQLite. Both applications can generate \
        passwords, passphrases and PINs. Recorded data is displayed on a separate window.",
        language:"Python, Java",
        image:"logo192.png",
        link:"https://github.com/ndlopez/passAdm",
        builtOn:2021
    },{
        name:"WeatherApp",
        title:"Display current weather",
        description:"Website and Gnome Extension. The 1st one displays current conditions plus \
        a bar-plot done using D3JS. The latter is a notification app that displays the current hour \
        and the next hour conditions. Data was scrapped from tenki.jp using a Shell script.",
        language:"JavaScript, PHP, Python",
        image:"logo192.png",
        link:"https://github.com/ndlopez/weather_app",
        builtOn:2020
    },{
        name:"NagoyaBus",
        title:"Display next departing bus",
        description:"Android Application developed in Java using Android Studio. Data is from the \
        Nagoya City Transportation Bureau. The application allows the user to input departure and \
        arrival bus stop in Japanese and displays based on that inpt the next departing buses.",
        language:"Java",
        image:"logo192.png",
        link:"https://github.com/ndlopez/busApp",
        builtOn:2021
    },{
        name:"Paiza Tests",
        title:"Programming skill test",
        description:"B level programming skill tests",
        image:"https://img001.prntscr.com/file/img001/U6hzfAXXR7aoLUBHf2mgww.png",
        language:"Python, Ruby",
        link:"htpps://github.com/ndlopez/paiza_test",
        builtOn:2022
    },{
        name:"Jumble Game",
        title:"Scrambled words",
        description:"Web Application developed in JavaScript. The displayed words are the ones \
        whose meaning I did not know from two books: Pride and Prejudice by Jane Austen and Zealot \
        by Reza Aslan. Inspired by NewsRadio Season3 Episode4.",
        language:"JavaScript, Ruby",
        image:"https://raw.githubusercontent.com/ndlopez/jumble_game/main/data/Jumble_Game_2022-04-02_2152.png",
        link:"https://ndlopez.github.io/jumble_game",
        builtOn:2022
    },{
        name:"NagoyaBus",
        title:"Display the next departing bus",
        description:"Web Application currently developing using Vue.js.",
        language:"JavaScript",
        image:"logo192.png",
        link:"https://github.com/ndlopez/busApp",
        builtOn:2022
    }
];
//console.log(projects[0].name,projects.length);

function createCards(jdx){
    var divCol = document.createElement("div");
    divCol.setAttribute("class","column3");
    var divCard = document.createElement("div");
    divCard.setAttribute("class","card");
    var txt = "<img src = '"+projects[jdx].image;
    txt += "'><div class='container'><h4><b>"+projects[jdx].name+"</b></h4><p>";
    txt += projects[jdx].title+"<br><span>"+projects[jdx].language+"</span></p></div>";
    //txt += "<br>"+projects[jdx].builtOn
    divCard.innerHTML = txt;
    divCol.appendChild(divCard);
    //divCol.innerHTML = txt;
    return divCol;
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
/* Add Modal pages for each card*/