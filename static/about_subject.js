const titles = ["Tools","Interests","Publications","Awards and Honours","Music"];
const subTitles = ["Software","Hardware","Papers","Posters","Theses"]
const tools = [
    {
        item0: "OS: Debian or Fedora",
        item1: "Browser: Firefox",
        item2: "Search Engine: DuckDuckGo",
        item3: "IDE: Mostly Emacs and VI, sometimes VSCodium",
        item4: "Notes: Simplenote",
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

const public = {
    interests:{
        pro:["High-energy physics","Astronomy","electronics"],
        personal:["Web design","cycling","hiking","reading"],
    },
    paper:[{
        title:"A faster and more reliable data acquisition system for the full performance of the SciCRT",
        authors:"Y.Sasai, Y.Matsubara, Y. Itow, D.Lopez, et.al.",
        journal: "Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment",
        date: "2017-06-11",
        doi: "https://doi.org/10.1016/j.nima.2016.12.060"
    },{
        title: "Search for solar neutrons during the maximum activity of solar cycle 24",
        authors:"D.Lopez, Y.Matsubara, Y.Muraki, T.Sako",
        journal:"Proceedings of the 34th Int. Cosmic Ray Conf. in The Hague, The Netherlands",
        date:"2016-08-18",
        doi: "https://pos.sissa.it/archive/conferences/236/115/ICRC2015_115.pdf"
    },{
        title: "Simultaneous observation of solar neutrons from the ISS and High mountain observatories in association with a flare on July 8, 2014",
        authors:"Y.Muraki, D.Lopez, K.Koga, et.al.",
        journal:"Solar Physics",
        date:"2016-04-21",
        doi: "DOI 10.1007/s11207-016-0887-0"
    },{
        title: "Estimates of the neutron emission during large solar flares in the rising and maximum period of solar cycle 24",
        authors:"D.Lopez, Y.Matsubara, Y.Muraki, T.Sako, J.F. Valdes",
        journal:"Astroparticle Physics",
        date:"2016-03-01",
        doi: "https://doi.org/10.1016/j.astropartphys.2015.12.004"
    },{
        title: "Search for solar neutrons at Mount Chacaltaya associated with M- and X-class flares during the rising period of solar cycle 24",
        authors:"D.Lopez and Y.Matsubara",
        journal:"Earth, Planets and Space",
        date:"2015-12-03",
        doi:"DOI 10.1186/s40623-015-0222-2"
    },{
        title: "Observaci\'on simult\'anea de neutrones solares en asociacion con una fulguracion solar del 7 de septiembre de 2005",
        authors: "Y. Ricaldi, P. Miranda, D. Lopez, R. Bustos",
        journal: "Revista Boliviana de Fisica 13, 29-32, 2007",
        date: "2007-10",
        doi: "http://www.fiumsa.edu.bo/rbf/numero13.pdf"
    }],
    poster:[{
        title: "Solar-neutron monitoring using Chacaltaya Neutron Monitor during the maximum of solar cycle 24",
        authors:"D.Lopez, Y.Matsubara, T.Sako",
        conf:"2013 International CAWSES Symposium",
        venue: "Nagoya, Japan",
        date:"2013-11-28"
    },{
        title: "Enviromental monitoring of the mini-SciCR prototype detector",
        authors:"D.Lopez",
        conf:"40th Astronomy and Particle Physics Summer School for graduate students",
        venue: "Gamagori, Japan",
        date:"2010-08-12"
    }],
    theses:[{
        title: "Estimation of the neutron emission during large solar flares of solar cycle 24",
        authors:"D.Lopez",
        journal:"Thesis submitted for PhD in Astroparticle Physics, Nagoya University",
        date:"2016-02",
        link:"https://www.nagoya-u/nul"
    },{
        title: "Particle Identification by using mini-SciCR detector at Mount Sierra Negra in Mexico",
        authors:"D.Lopez",
        journal:"Thesis submitted for M.Sc. in Astrophysics, Nagoya University",
        date:"2012-03",
        link: "Available as a compendium of MSc theses from the Solar-Terrestrial Environment Laboratory, Nagoya University, Jun 2012"
    },{
        title: "Analisis de Eventos producidos por neutrones solares detectados en Monte Chacaltaya",
        authors:"D.Lopez",
        journal:"Bachelor thesis submitted for BSc in Physics, San Andres University",
        date: "2007-10",
        link: "Available at the Central Library of San Andres University (in Spanish)"
    }],
    awards:[{
        title: "Monbukagakusho Scholarship awarded by the Japanese Gov. MEXT",
        period: "2009-10~2015-03",
        amount: "150000 JPY /month",
        comment: "Full scholarship for pursuing a higher degree at Nagoya University"
    },{
        title: "Honour Diploma for outstanding performance during 2003 Spring and 2004 Fall terms",
        period: "2004",
        amount :"",
        comment: "Physics Department, Science Faculty, San Andres University"
    },{
        title: "Honour Diploma for the thermodynamics experiment 'The Drinking Bird'",
        period: "2002-07",
        amount: "",
        comment: "Physics Department, Science Faculty, San Andres University"
    }]
};
//console.log(tools[0]["item0"]);
const mainDiv = document.createElement("section");
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
        liElm.innerText = tools[jdx][item];
        ulElm.appendChild(liElm);
    }
    return ulElm;
}

mainDiv.appendChild(createTitle("h2",titles[0]));
for (let idx=0;idx<tools.length;idx++){
    mainDiv.appendChild(createTitle("h3",subTitles[idx]))
    mainDiv.appendChild(buildList(idx));
}
document.body.appendChild(mainDiv);
