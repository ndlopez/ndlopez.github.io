/* Resume contents */
const titles = ["Education","Work Experience","Invited Researcher","Skills"];
const subTitles = ["Programming","Spoken Languages"];

const content = {
    about:"Hello, I am Diego, a physicist living in Kobe, Japan.<br> What it started as a \
    hobby back in undegraduate school became a profession (programmer).<br> I do mostly \
    back-end (Python, some PHP) and most recently front-end (JavaScript). <br>I am passionate about \
    cosmic-rays, nuclear physics and electronics.<br> Since April 2022 I started an internship as a programmer for TMC at the Kamigo Plant.",
    education:[
        {
            title: "Doctorate",
            university: "Institute for Space-Earth Environmental Research, Nagoya University",
            location: "Nagoya, Japan",
            year: "Astroparticle Physics, March 2016",
            area: "Solar Physics, solar flares, particle acceleration mechanism",
            advisor: "Prof. Y. Matsubara"
        },{
            title: "Master of Science",
            university: "Solar-Terrestrial Environment Laboratory, Nagoya University",
            location: "Nagoya, Japan",
            year: "Astroparticle Physics, March 2012",
            area: "Cosmic-rays, particle identification",
            advisor: "Prof. Y. Matsubara"
        },{
            title: "Bachelor of Science",
            university: "Universidad Mayor de San Andres",
            location: "La Paz, Bolivia",
            year: "Physics, December 2008",
            area: "Solar Physics",
            advisor: "Prof. Nicolas Martinic"
        }],
    programming:[
        {
            lang: "C",
            skill: "can code without reference",
            level: "Intermediate",
        },{
            lang: "Python",
            skill: "can code without reference",
            level: "Intermediate",
        },{
            lang: "JavaScript",
            skill: "can code without reference",
            level: "Intermediate",
        },{
            lang: "Java, PHP, C++",
            skill: "can code with reference",
            level: "Beginner"
        }
    ],
    language:[
        {
            lang: "Spanish",
            skill: "Native",
            level: "can read, write and listen.",
        },{
            lang: "English",
            skill: "Fluent",
            level: "can read, write and listen.",
        },{
            lang: "Japanese",
            skill: "Business Level",
            level: "can read and listen, and can write simple paragraphs",
        },{
            lang: "German",
            skill: "Beginner",
            level: "basic greetings and asking for directions",
        }],
    work:[
        {
            position: "Programmer",
            place: "Toyota Motors Corporation Kamigo Plant",
            location: "Kamigo, Toyota, Japan",
            period: "Apr 2022 - Aug 2022",
            job : ["Operational Research: Implemented a tool to improve suppliers routing in Python.",
            "Build mobile version of Flask/React autonomous robot control tool."] 
        },{
            position: "Python and MySQL Mentor",
            place: "Galileo Co. Ltd.",
            location: "Nagoya, Japan",
            period: "Jan 2022 - Mar 2022",
            job : ["Mentored one employee in Python and MySQL.",
            "Set up a local server and a DB to access data within the network.",
            "Implemented a REST-api in PHP to perform CRUD operations."]
        },{
            position: "Lead Programmer",
            place: "CFKobo LLC",
            location: "Nagoya, Japan",
            period: "May 2021 - Dec 2021",
            job: ["Using a GigE camera SDK implemented in C# new functions to control hardware and record video and images.",
            "Lead and Mentored a team of 3 novice developers to develop a monitoring system to acquire data from sensors and upload them to a remote server provided by the client.",
            "Sensor calibration to send/receive data using BLE communication device."]
        },{
            position: "Python Programmer",
            place: "Toyota Motors Corporation Kamigo Plant",
            location: "Remote",
            period:"Oct 2020 - Mar 2021",
            job: ["Aided in designing and implementing new tools for a GUI Python application."]
        },{
            position: "Jr. Data Analyst",
            place:"IVIS Inc.(Intelligent Vision and Imaging Systems)",
            location: "Toyota Motors Corporation, Toyota, Japan",
            period:"Jul 2018 - Jun 2020",
            job: ["CAE software operator (Fluid Dynamics Analysis)", 
            "Implemented new tools (scripts) to connect pipelines to a cluster of computers.",
            "Implemented a simulation written in C-like code to test a new tool to improve driving conditions."]
        },{
            position: "Jr. Physicist",
            place:"IBTEN (Bolivia Nuclear Regulatory Commission)",
            location: "La Paz, Bolivia",
            period:"Jan 2009 - Sep 2009",
            job: ["Calibrated radionucleid instruments using Gamma-ray sources.",
            "Performed Gamma-ray spectroscopy of several samples (metal scraps)."]
        }],
    invited:[
        {
            place: "Geophysics Department, Universidad Nacional Autonoma de Mexico, Mexico",
            period: "Oct 2010 - Nov 2010",
            job: ["Set up protoype experiment atop Mt.Sierra Negra (4600 masl)","Set data acquisition software to perform cosmic-ray measurements and monitor environment."]
        },{
            place: "Fermi National Laboratory, Illinois, USA",
            period: "Feb 2011 - Mar 2011",
            job: ["Dismantle a high-energy physics detector (MiniBooNE experiment).","Set up data-acquisition equipment to be packed and sent to Mexico"]
        },{
            place: "Astrophysics Department, INAOE, Puebla, Mexico",
            period: "Mar 2012 - May 2012",
            job:["Dismantle experimental setup of high-energy physics detector (SciBar)","Set atop Mt. Sierra Negra (4600m a.s.l.) SciBar and make first cosmic-ray measurements.","Monitor environment and electronic equipment at high-altitude."]
        } 
    ],
};

//console.log(content.education[1].title);

function createTitle(elm,thisText){
    var h2Text = document.createElement(elm);
    h2Text.innerText = thisText;
    return h2Text;
}
//Education researchGate color #40ba9b
function createList(jdx){
    var thisElm = document.createElement("li");
    const initData = content.education[jdx];
    var texty = "<h3>" + initData.title+"</h3>"
    texty += "<p>" + initData.year+"</p><p>"+
    initData.university+"</p>Research Area: "+
    initData.area+"</p><p>Advisor: "+initData.advisor+"</p>";
    thisElm.innerHTML = texty;
    return thisElm;
}
var thisSection = document.createElement("section");
thisSection.setAttribute("class","clearfix");

thisSection.appendChild(createTitle("h2",titles[0]));
var eduList = document.createElement("ul");
for(let idx=0; idx < content.education.length; idx++){
    eduList.appendChild(createList(idx));
}
thisSection.appendChild(eduList);

//Work exp
function workList(jdx){
    var thisElm = document.createElement("li");
    var olElm ="";
    const initData = content.work[jdx];
    for (let idx= 0; idx < initData.job.length; idx++){
        olElm += "<li>"+initData.job[idx]+"</li>";
    }
    var texty = "<h3>" + initData.position + "</h3>";
    texty += "<p><strong>"+ initData.place + "</strong> — <em>" +
    initData.period+"</em></p><ol>" + olElm + "</ol>";
    thisElm.innerHTML = texty;
    return thisElm;
}
thisSection.appendChild(createTitle("h2",titles[1]));
var wList = document.createElement("ul");
for (let idx=0;idx < content.work.length;idx++){
    wList.appendChild(workList(idx));
}
thisSection.appendChild(wList);

// invited
function inviteList(jdx){
    const initData = content.invited[jdx];
    var olElm = "";
    var thisElm = document.createElement("li");
    var texty = "<h3>" + initData.place + "</h3>";
    texty += "<p>" + initData.period + "</p>";
    for(let idx=0; idx < initData.job.length; idx++)
        olElm += "<li>" + initData.job[idx]+"</li>";
    texty += "<ol>"+olElm+ "</ol>";
    thisElm.innerHTML = texty;
    return thisElm;

}
thisSection.appendChild(createTitle("h2",titles[2]));
var vList = document.createElement("ul");
for (let idx=0; idx < content.invited.length;idx++)
    vList.appendChild(inviteList(idx));
thisSection.appendChild(vList);

// skills
thisSection.appendChild(createTitle("h2",titles[3]));
function skillList(skillText){
    var thisElm = document.createElement("li");
    var texty = skillText.lang + ", " + skillText.skill;
    thisElm.innerText = texty;
    return thisElm;
}

function getSkill(mySkill){
    var skList = document.createElement("ul");
    for(let idx=0;idx<mySkill.length;idx++)
        skList.appendChild(skillList(mySkill[idx]));
    return skList;
}
const skillData = [content.programming,content.language];
for(let jdx=0;jdx<2;jdx++){
    thisSection.appendChild(createTitle("h3",subTitles[jdx]));
    thisSection.appendChild(getSkill(skillData[jdx]));
}

document.body.appendChild(thisSection);
