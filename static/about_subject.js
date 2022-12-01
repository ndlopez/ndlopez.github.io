const titles = ["Tools","Interests","Music"];
const subTitles = ["Software","Hardware"];
const tools = [
    {
        item0: "OS: <a href='https://www.debian.org'>Debian</a> or <a href='https://www.getfedora.org'>Fedora</a>",
        item1: "Browser: <a target='_blank' href='www.firefox.com'>Firefox</a>",
        item2: "Search Engine: <a target='_blank' href='https://www.duckduckgo.com'>DuckDuckGo</a>",
        item3: "IDE: Mostly Emacs and VI, sometimes VSCodium",
        item4: "Notes: Joplin",
        item5: "Music: VLC (streaming ThirdRock Radio and sometimes FM La Paz)"
    },{
        item0: "Personal: Panasonic Let'sNote CF-QV 12\" w/Linux Fedora 36",
        item1: "Work: Dell Vostro 13\" w/Windows 11 Pro",
        item2: "MacBook Pro 15\" w/MacOS 10.15",
        item3: "Display: hp Z23n 1080p",
        item4: "Keyboard: Sony vaio VGP-UKB3JP, silver, full-size",
        item5: "Headphones: Bose AE2 w/remote",
    }
];

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
