/* Resume contents */
const titles = ["Education","Work Experience","Skills","Presentations and Workshops"]

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
            period: "2022-04 - 2022-08",
            job : ["Operational Research: Implemented a tool to improve suppliers routing in Python.",
            "Build mobile version of Flask/React autonomous robot control tool."] 
        },{
            position: "Python and MySQL Mentor",
            place: "Galileo Co. Ltd.",
            location: "Nagoya, Japan",
            period: "2022-01 - 2022-03",
            job : ["Mentored one employee in Python and MySQL.",
            "Set up a local server and a DB to access data within the network.",
            "Implemented a REST-api in PHP to perform CRUD operations."]
        },{
            position: "Lead Programmer",
            place: "CFKobo LLC",
            location: "Nagoya, Japan",
            period: "2021-05 - 2021-12",
            job: ["Using a GigE camera SDK implemented in C# new functions to control hardware and record video and images.",
            "Lead and Mentored a team of 3 novice developers to develop a monitoring system to acquire data from sensors and upload them to a remote server provided by the client.",
            "Sensor calibration to send/receive data using BLE communication device."]
        },{
            position: "Python Programmer",
            place: "Toyota Motors Corporation Kamigo Plant",
            location: "Remote",
            period:"2020-10 - 2021-03",
            job: ["Aided in designing and implementing new tools for a GUI Python application."]
        },{
            position: "Jr. Data Analyst",
            place:"IVIS Inc.(Intelligent Vision and Imaging Systems)",
            location: "Toyota Motors Corporation, Toyota, Japan",
            period:"2018-07 - 2020-06",
            job: ["CAE software operator (Fluid Dynamics Analysis)", 
            "Implemented new tools (scripts) to connect pipelines to a cluster of computers.",
            "Implemented a simulation written in C-like code to test a new tool to improve driving conditions."]
        },{
            position: "Jr. Physicist",
            place:"IBTEN (Bolivia Nuclear Regulatory Commission)",
            location: "La Paz, Bolivia",
            period:"2009-01 - 2009-09",
            job: ["Calibrated radionucleid instruments using Gamma-ray sources.",
            "Performed Gamma-ray spectroscopy of several samples (metal scraps)."]
        }],
    invited:[
        {
            place: "Geophysics Department, Universidad Nacional Autonoma de Mexico, Mexico",
            period: "2010-10-2010-11",
            job: ["Set up protoype experiment atop Mt.Sierra Negra (4600 masl)","Set data acquisition software to perform cosmic-ray measurements and monitor environment."]
        },{
            place: "Fermi National Laboratory, Illinois, USA — ",
            period: "2011-02-2011-03",
            job: ["Dismantle a high-energy physics detector (MiniBooNE experiment).","Set up data-acquisition equipment to be packed and sent to Mexico"]
        },{
            place: "Astrophysics Department, INAOE, Puebla, Mexico — ",
            period: "2012-03-2012-05",
            job:["Dismantle experimental setup of high-energy physics detector (SciBar)","Set atop Mt. Sierra Negra (4600m a.s.l.) SciBar and make first cosmic-ray measurements.","Monitor environment and electronic equipment at high-altitude."]
        } 
    ],
}
];

console.log(content[0].education[1].title);

function createTitle(jdx){
    var h2Title = document.createElement("h2");
    h2Title.innerHTML = titles[jdx];
    return h2Title;
}
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

thisSection.appendChild(createTitle(0));
var eduList = document.createElement("ul");
for(let idx=0; idx < content[0].education.length; idx++){
    eduList.appendChild(createList(idx));
}
thisSection.appendChild(eduList);

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
thisSection.appendChild(createTitle(1));
var wList = document.createElement("ul");
for (let idx=0;idx < content[0].work.length;idx++){
    wList.appendChild(workList(idx));
}
thisSection.appendChild(wList);
document.body.appendChild(thisSection);
