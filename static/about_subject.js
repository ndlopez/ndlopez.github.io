const titles = ["Tools","Interests","Music"];
const subTitles = ["Software","Hardware"];
const tools = [
    {
        item0: "OS: <a href='https://www.debian.org'>Debian</a> or <a href='https://www.getfedora.org'>Fedora</a>",
        item1: "Browser: <a target='_blank' href='https://www.firefox.com'>Firefox</a>",
        item2: "Search Engine: <a target='_blank' href='https://www.duckduckgo.com'>DuckDuckGo</a>",
        item3: "Editor: Mostly Emacs and VI, sometimes VSCodium",
        item4: "Notes: Joplin and own-build",
        item5: "Music: VLC (streaming ThirdRock Radio and sometimes FM La Paz) or <a href='https://ndlopez.github.io/web_player'>webPlayer</a> app I created"
    },{
        item0: "Personal: Panasonic Let'sNote CF-QV 12\" w/Linux Fedora 36",
        item1: "Work: NEC VersaPro 14\" w/Windows 10 Pro",
        item2: "Display: DELL 24in 1080p",
        item3: "Keyboard: Sony vaio VGP-UKB3JP, silver, full-size",
        item4: "Headphones: Bose AE2 w/remote",
        item5: "Portable HDD: io-data 2TB silver",
    }
];//hp Z23n 1080p

const interests = {
    main:["High-energy physics","Astronomy","Electronics"],
    hobby:["Programming","Cycling","Hiking","Reading"]};

//console.log(tools[0]["item0"]);
const mainDiv = document.getElementById("aboutMe"); // createElement("section");
mainDiv.setAttribute("class","clearfix");
function createTitle(elm,text){
    var h2Title = document.createElement(elm);
    h2Title.innerText = text;
    return h2Title;
}

function buildList(jdx){
    var ulElm = document.createElement("ul");
    for (item in tools[jdx]){
        var liElm = document.createElement("li");
        //console.log("thisData",tools[jdx][item]);
        liElm.innerHTML = tools[jdx][item];
        ulElm.appendChild(liElm);
    }
    return ulElm;
}

mainDiv.appendChild(createTitle("h2",titles[0]));
for (let idx=0;idx<tools.length;idx++){
    mainDiv.appendChild(createTitle("h3",subTitles[idx]))
    mainDiv.appendChild(buildList(idx));
}

mainDiv.appendChild(createTitle("h2",titles[1]));
//console.log(titles[1]);
function getList(){
    var ulElm = document.createElement("ul");
    for (item in interests){
        var liElm = document.createElement("li");
        liElm.innerText = interests[item];
        ulElm.appendChild(liElm);
    }
    return ulElm;
}
mainDiv.appendChild(getList());
//document.body.appendChild(mainDiv);
