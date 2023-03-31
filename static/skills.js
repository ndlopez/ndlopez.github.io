/* Resume contents */
const titles = ["Education","Work Experience","Invited Researcher","Skills","Publications","Awards and Honours"];
const subTitles = ["Programming","Spoken Languages","Papers","Posters","Theses"];

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
            area: "Cosmic-rays, particle tracking and identification",
            advisor: "Prof. Y. Matsubara"
        },{
            title: "Bachelor of Science",
            university: "Facultad de Ciencias Puras y Naturales, Universidad Mayor de San Andr&eacute;s",
            location: "La Paz, Bolivia",
            year: "Physics, December 2008",
            area: "Solar Physics",
            advisor: "Prof. N. Martinic"
        }],
    programming:[
        {
            lang: "Bash, CSS",
            skill: "can code without reference",
            level: "Advanced",
        },{
            lang: "C, Python, JavaScript",
            skill: "can code without reference",
            level: "Intermediate",
        },{
            lang: "Databases (MySQL)",
            level: "Intermediate",
            skill: ""
        },{
            lang: "GNU Linux/Unix Administration",
            level: "Intermediate",
            skill: ""
        },{
            lang: "Java, PHP, C++, C#",
            skill: "can code with reference",
            level: "Beginner"
        },{
    	    lang: "VBA (Visual Basic for Applications) and PostgreSQL",
	        level: "Learning",
	        skill: ""
	}
    ],
    language:[
        {
            lang: "Spanish",
            level: "Native",
            skill: "can read, write and listen.",
        },{
            lang: "English",
            level: "Fluent",
            skill: "can read, write and listen.",
        },{
            lang: "Japanese",
            level: "Business Level",
            skill: "can read and listen, and can write simple paragraphs",
        },{
            lang: "German",
            level: "Beginner",
            skill: "basic greetings and asking for directions",
        }],
    work:[
	{   position: "Current Position: CFD Analyst",
	    place: "Toyoda Gosei Kitajima Technical Center",
	    location: "Inazawa, Aichi, Japan",
	    period: "Jan 2023 - ",
	    job: ["Main: CAE software operator and CFD analyst", "Sub: Python, VBA programmer, and provide technical support."]
	},{
            position: "Programmer",
            place: "Toyota Motors Corporation Kamigo Plant",
            location: "Kamigo, Toyota, Japan",
            period: "Apr 2022 - Sep 2022",
            job : ["Operational Research: Implemented a tool to improve suppliers routing in Python.",
            "Built mobile version of Flask/React autonomous robot control tool.", "To improve image recognition tool, aided with object annotations."] 
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
            "Lead and Mentored a team of 3 developers to develop a monitoring system to acquire data from sensors and upload them to a remote server provided by the client.",
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
            place: "Astrophysics Department, INAOE, Puebla, Mexico",
            period: "Mar 2012 - May 2012",
            job:["Dismantle experimental setup of high-energy physics detector (SciBar)","Set atop Mt. Sierra Negra (4600m a.s.l.) SciBar and make first cosmic-ray measurements.","Monitor environment and electronic equipment at high-altitude."]
        },{
            place: "Fermi National Laboratory, Illinois, USA",
            period: "Feb 2011 - Mar 2011",
            job: ["Dismantle a high-energy physics detector (MiniBooNE experiment).","Set up data-acquisition equipment to be packed and sent to Mexico"]
        },{
            place: "Geophysics Department, Universidad Nacional Autonoma de Mexico, Mexico",
            period: "Oct 2010 - Nov 2010",
            job: ["Set up protoype experiment atop Mt.Sierra Negra (4600 masl)","Set data acquisition software to perform cosmic-ray measurements and monitor environment."]
        }, 
    ],
};

const public = {
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
        title: "Observaci&oacute;n simult&aacute;nea de neutrones solares en asociaci&oacute;n con una fulguraci&oacute;n solar del 7 de Septiembre de 2005",
        authors: "Y. Ricaldi, P. Miranda, D. Lopez, R. Bustos",
        journal: "Revista Boliviana de F&iacute;sica 13, 29-32, 2007",
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
        title: "An&aacute;lisis de eventos producidos por neutrones solares detectados en el Monte Chacaltaya",
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
    var texty = skillText.level + ": " + skillText.lang;
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

//publications
thisSection.appendChild(createTitle("h2",titles[4]));
function buildPublic(jdx){
    var pList = document.createElement("div");
    const initData = public.paper[jdx];
    var texty = "";
    for(item in initData){
        if(item == "doi"){
            texty +="";
        }else{
            if(item == "title"){
            texty += "<a class='title' href='" + initData["doi"] + "'>[" + (jdx + 1) +
            "] " + initData[item] + "</a>";
            }else{
                texty += "<p>" + initData[item] +"</p>";
            }
        }        
    }
    pList.innerHTML = texty;
    return pList;
}
for(let idx =0; idx < public.paper.length; idx++){
    thisSection.appendChild(buildPublic(idx));
}

document.body.appendChild(thisSection);
