const info = {about: "Hello, I am Diego Lopez a Physicist, and occasional programmer who currently works in Aichi, Japan.<br>What it started as a hobby back in undergrad school (~2003) became a profession.<br>These days I mostly do data analysis (in Python and R) and more recently front-end (in JavaScript).<br/>Before joining the recruiting staff company, I was doing research at Nagoya University as a grad student.</p><p>I received a PhD in Astroparticle Physics from the Graduate School of Science at the University of Nagoya in Japan, under the supervision of Prof. Y. Matsubara and Dr. T. Sako.<br>My research was generously supported by the Monbukagakusho Scholarship offered by the Japanese Ministry of Education, Culture, Sports, Science and Technology.<br> My dissertation thesis consisted on the study of the acceleration mechanism of \'solar neutrons\' during solar flares. These particles are the by-products of the originally generated (gamma-rays, protons) after a solar flare occurred.</p><p>In other accomplishments, I obtained a M.Sc degree from the Graduate School of Science of Nagoya University.<br> My thesis consisted on particle identification using a prototype detector, under the supervision of also Prof. Y. Matsubara.<br>I also obtained a B.Sc degree in Physics with a minor in Mathematical methods from San Andres University in Bolivia.</p>"};
const titles = ["Tools","Interests","Music"];
const subTitles = ["Software","Hardware"];
const tools = [
    {
        item0: "OS: <a href='https://www.debian.org'>Debian</a> or <a href='https://www.getfedora.org'>Fedora</a>",
        item1: "Browser: <a target='_blank' href='https://www.firefox.com'>Firefox</a>",
        item2: "Search Engine: <a target='_blank' href='https://www.duckduckgo.com'>DuckDuckGo</a>",
        item3: "Editor: Mostly Emacs and VI, @Work VSCode and Notepad",
        item4: "Notes: Joplin and MacOS Notes",
        item5: "Music: VLC (streaming ThirdRock Radio and sometimes FM La Paz) or <a href='https://ndlopez.github.io/web_player'>webPlayer</a> I created"
    },{
        item0: "Personal: Panasonic Let'sNote CF-QV 12\" w/Linux Fedora 36",
        item1: "Work: NEC VersaPro 14\" w/Windows 10 Pro",
        item2: "Display: DELL 24in 1080p",
        item3: "Keyboard: Sony vaio VGP-UKB3JP, silver, full-size",
        item4: "Headphones: Bose AE2 w/remote",
        item5: "Portable HDD: io-data 2TB silver",
    }
];//hp Z23n 1080p
const musik = [
    {artist: "Beethoven", song: "Moonlight"},
    {artist: "Phantogram", song: "You don't get me high anymore"},
    {artist: "Dave Matthews Band", song: "You & Me"},
    {artist: "Beach Weather", song: "Sex, Drugs, Etc."},
    {artist: "Beach House", song: "Once Twice Melody"},
    {artist: "Arcade Fire", song: "Unconditional"},
    {artist: "OK Go", song: "Get Over It"},
    {artist: "Bob Moses", song: "Love Brand New"},
    {artist: "NeedtoBreathe", song: "Into the Mistery"},
    {artist: "Kongos", song: "Take it from Me"},
    {artist: "The Shins", song: "So now what / New slang"},
    {artis: "Carole King", song: "Anyone at all"},
    {artist: "lovelytheband", song: "these are my friends"},
    {artist: "Cigarettes After Sex", song: "Apocalypse"},
    {artist: "Oleander", song: "Why I'm here"},
    {artist: "Mazzy Star", song: "Fade into you"},
    {artist: "Simon and Garfunkel", song: "The Boxer"},
    {artist: "Dave Matthews Band", song: "Crash Into Me"},
    {artist: "Fitz and the Tantrums", song: "I Just Wanna Shine"},
    {artist: "Sneaker Pimps", song: "6 Underground"},
    {artist: "Ashe", song: "Moral of the Story"},
    {artist: "Of Monsters and Men", song: "Dirty paws"},
    {artist: "I DONT KNOW HOW BUT THEY FOUND ME", song: "Leave Me Alone"},
    {artist: "Tame Impala", song: "Lost in yesterday"},
    {artist: "Sleigh Bells", song: "Crush"},
    {artist: "The head and the heart", song: "Virginia"},
    {artist: "Modest Mouse",song: "Lampshades on Fire"},
    {artist: "Joywave", song: "We Are All We Need"},
    {artist: "Stone Temple Pilots", song: "Vasoline"},
    {artist: "White Town", song:"Your Woman"},
    {artist: "The Airborne Toxic Event",song: "Changing"},
    {artist: "WALK THE MOON",song: "Kamikaze"},
    {artist: "Donato Espinoza", song: "Pre-sentimiento"},
    {artist: "Eddy Navia", song: "Copagira"}
]; //AJR - Burn The House Down
const interests = {
    main:["High-energy physics"," Astronomy"," Electronics"],
    hobby:["Programming"," Cycling"," Hiking"," Reading"]};

//console.log(tools[0]["item0"]);
// the idea is:
// <details><summary><h2>Musik</h2></summary><ul><li>...</ul></details>
const mainDiv = document.getElementById("aboutMe"); // createElement("section");
mainDiv.setAttribute("class","clearfix");
function createTitle(elm,text){
    /* This func should return <summary><h2> */
    const h2Title = document.createElement(elm);
    h2Title.innerText = text;
    return h2Title;
}

function buildList(jdx){
    let ulElm = document.createElement("ul");
    for (item in tools[jdx]){
        let liElm = document.createElement("li");
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
    let ulElm = document.createElement("ul");
    for (item in interests){
        let liElm = document.createElement("li");
        liElm.innerText = interests[item];
        ulElm.appendChild(liElm);
    }
    return ulElm;
}
mainDiv.appendChild(getList());

mainDiv.appendChild(createTitle("h2",titles[2]));

let ulElm = document.createElement("ul");

musik.forEach(list =>{
    let liElm = document.createElement("li");
    var auxVar = "";
    for (let key in list){
        auxVar += list[key] + " - ";
    }
    liElm.innerHTML = auxVar;
    ulElm.appendChild(liElm);
});

mainDiv.appendChild(ulElm);

//document.body.appendChild(mainDiv);
