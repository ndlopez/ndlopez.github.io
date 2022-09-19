/* Resume contents */
const titles = ["Education","Work Experience","Invited Researcher","Skills"]

const content = [
    {about:"Hello, I am Diego, a physicist living in Kobe, Japan.<br> What it started as a \
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
            lang: "C/C++",
            skill: "Can code with reference",
            level: "Intermediate",
        },{
            lang: "Python",
            skill: "Can code with reference",
            level: "Intermediate",
        },{
            lang: "JavaScript",
            skill: "Can code with reference",
            level: "Intermediate",
        },{
            lang: "Java",
            skill: "Can code with reference",
            level: "Beginner"
        }
    ],
    language:[
        {
            lang: "Spanish",
            level: "Native",
            info: "Can read, write and listen."
        },{
            lang: "English",
            level: "Fluent",
            info: "Can read, write and listen."
        },{
            lang: "Japanese",
            level: "Business",
            info: "Can read and understand 80%, can listen and understand 90%, \
            can write simple paragraphs",
        },{
            lang: "German",
            level: "Beginner",
            info: "Basic greetings and asking for directions",
        }],
    work:[
        {
            position: "Programmer",
            place: "Toyota Motors Corporation Kamigo Plant",
            location: "Kamigo, Toyota, Japan",
            period: "April 2022 - August 2022",
            job : ["Operational Research: Implemented a tool to improve suppliers routing in Python.",
            "Build mobile version of Flask/React autonomous robot control tool."] 
        },{
            position: "Python and MySQL Mentor",
            place: "Galileo Co. Ltd.",
            location: "Nagoya, Japan",
            period: "January 2022 - March 2022",
            job : ["Mentored one employee in Python and MySQL.",
            "Set up a local server and a DB to access data within the network.",
            "Implemented a REST-api in PHP to perform CRUD operations."]
        },{
            position: "Lead Programmer",
            place: "CFKobo LLC",
            location: "Nagoya, Japan",
            period: "May 2021 - December 2021",
            job: ["Using a GigE camera SDK implemented in C# new functions to control hardware and record video and images.",
            "Lead and Mentored a team of 3 novice developers to develop a monitoring system to acquire data from sensors and upload them to a remote server provided by the client.",
            "Sensor calibration to send/receive data using BLE communication device."]
        },{
            position: "Python Programmer",
            place: "Toyota Motors Corporation Kamigo Plant",
            location: "Remote",
            period:"October 2020 - March 2021",
            job: ["Aided in designing and implementing new tools for a GUI Python application."]
        },{
            position: "Jr. Data Analyst",
            place:"IVIS Inc.(Intelligent Vision and Imaging Systems)",
            location: "Toyota Motors Corporation, Toyota, Japan",
            period:"July 2018 - June 2020",
            job: ["CAE software operator (Fluid Dynamics Analysis)", 
            "Implemented new tools (scripts) to connect pipelines to a cluster of computers.",
            "Implemented a simulation written in C-like code to test a new tool to improve driving conditions."]
        },{
            position: "Jr. Physicist",
            place:"IBTEN (Bolivia Nuclear Regulatory Commission)",
            location: "La Paz, Bolivia",
            period:"January 2009 - September 2009",
            job: ["Calibrated radionucleid instruments using Gamma-ray sources.",
            "Performed Gamma-ray spectroscopy of several samples (metal scraps)."]
        }],
    invited:[
        {
            place: "Geophysics Department, Universidad Nacional Autonoma de Mexico, Mexico",
            period: "October 2010 - November 2010",
            job: ["Set up protoype experiment atop Mt.Sierra Negra (4600 masl)","Set data acquisition software to perform cosmic-ray measurements and monitor environment."]
        },{
            place: "Fermi National Laboratory, Illinois, USA",
            period: "February 2011 - March 2011",
            job: ["Dismantle a high-energy physics detector (MiniBooNE experiment).","Set up data-acquisition equipment to be packed and sent to Mexico"]
        },{
            place: "Astrophysics Department, INAOE, Puebla, Mexico",
            period: "March 2012 - May 2012",
            job:["Dismantle experimental setup of high-energy physics detector (SciBar)","Set atop Mt. Sierra Negra (4600m a.s.l.) SciBar and make first cosmic-ray measurements.","Monitor environment and electronic equipment at high-altitude."]
        } 
    ],
}
];

console.log(content[0].education[1].title);

function createH2Title(jdx){
    var h2Text = document.createElement("h2");
    h2Text.innerText = titles[jdx];
    return h2Text;
}
//Education
function createList(jdx){
    var thisElm = document.createElement("li");
    const initData = content[0].education[jdx];
    var texty = "<h3>" + initData.title+"</h3>"
    texty += "<p>" + initData.year+"</p><p>"+
    initData.university+"</p>Research Area: "+
    initData.area+"</p><p>Advisor: "+initData.advisor+"</p>";
    thisElm.innerHTML = texty;
    return thisElm;
}
var thisSection = document.createElement("section");
thisSection.setAttribute("class","clearfix");

thisSection.appendChild(createH2Title(0));
var eduList = document.createElement("ul");
for(let idx=0; idx < content[0].education.length; idx++){
    eduList.appendChild(createList(idx));
}
thisSection.appendChild(eduList);

//Work exp
function workList(jdx){
    var thisElm = document.createElement("li");
    var olElm ="";
    const initData = content[0].work[jdx];
    for (let idx= 0; idx < initData.job.length; idx++){
        olElm += "<li>"+initData.job[idx]+"</li>";
    }
    var texty = "<h3>" + initData.position + "</h3>";
    texty += "<p><strong>"+ initData.place + "</strong> — <em>" +
    initData.period+"</em></p><ol>" + olElm + "</ol>";
    thisElm.innerHTML = texty;
    return thisElm;
}
thisSection.appendChild(createH2Title(1));
var wList = document.createElement("ul");
for (let idx=0;idx < content[0].work.length;idx++){
    wList.appendChild(workList(idx));
}
thisSection.appendChild(wList);

// invited
function inviteList(jdx){
    const initData = content[0].invited[jdx];
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
thisSection.appendChild(createH2Title(2));
var vList = document.createElement("ul");
vList.appendChild(inviteList(0));
thisSection.appendChild(vList);
document.body.appendChild(thisSection);
