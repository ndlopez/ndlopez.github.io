const tools = [
{software:[{
    os: "Debian or Fedora",
    browser:"Firefox",
    search : "DuckDuckGo",
    coding: "Mostly Emacs and VI, sometimes VSCodium",
    note: "Simplenote",
    music: "VLC (streaming ThirdRock Radio and sometimes FM La Paz)"
}],
hardware: [{
    personal: "Panasonic Let'sNote CF-QV 12\" w/Linux Fedora 36",
    work: "Dell Vostro 13\" w/Windows 11 Pro",
    spare: "MacBook Pro 15\" w/MacOS 10.15",
    display: "hp Z23n 1080p",
    keyboard: "Sony vaio VGP-UKB3JP, silver, full-size",
    headphones: "Bose AE2 w/remote",
}]
}];

const interests = [{
    pro:["High-energy physics","Astronomy","electronics"],
    personal:["Web design","cycling","hiking","reading"],
}];

const public = [{
    paper:[{
        title:"A faster and more reliable data acquisition system for the full performance of the SciCRT",
        authors:"Y.Sasai, ..., D.Lopez",
        journal: "Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment",
        date: "2017-06-11",
    },{
        title: "Search for solar neutrons during the maximum activity of solar cycle 24",
        authors:"D.Lopez, Y.Matsubara, ...",
        journal:"Proceedings of the 34th Int. Cosmic Ray Conf. in The Hague, The Netherlands",
        date:"2016-08-18"
    },{
        title: "Simultaneous observation of solar neutrons from the ISS and High mountain observatories in association with a flare on July 8, 2014",
        authors:"Y.Muraki, D.Lopez, ...",
        journal:"Solar Physics",
        date:"2016-04-21"
    },{
        title: "Estimates of the neutron emission during large solar flares in the rising and maximum period of solar cycle 24",
        authors:"D.Lopez, Y.Matsubara, Y.Muraki, T.Sako, J.F. Valdes",
        journal:"Astroparticle Physics",
        date:"2016-03-01"
    },{
        title: "Search for solar neutrons at Mount Chacaltaya associated with M- and X-class flares during the rising period of solar cycle 24",
        authors:"D.Lopez and Y.Matsubara",
        journal:"Earth, Planets and Space",
        date:"2015-12-03"
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
        title: "Particle Identification using a prototype detector",
        authors:"D.Lopez",
        journal:"Thesis submitted for M.Sc. in Astrophysics, Nagoya University",
        date:"2012-03",
        link: "Available as a compendium of MSc theses from the Solar-Terrestrial Environment Laboratory, Nagoya University, Jun 2012"
    },{
        title: "Analisis de Eventos asociados con una fulguracion solar",
        authors:"D.Lopez",
        journal:"Bachelor thesis submitted for BSc in Physics, San Andres University",
        date: "2008-06",
        link: "Available at the Central Library of San Andres University (in Spanish)"
    }],
    awards:[{
        title: "Monbukagakusho Scholarship awarded by the Japanese Gov. MEXT",
        period: "2009-10~2015-03",
        amount: "150000 JPY",
        comment: "Full scholarship for pursuing a higher degree at Nagoya University"
    },{
        title: "Honour Diploma for outstanding performance during 2003 Autumn term",
        period: "2004",
        amount :"",
        comment: "Physics Department, Science Faculty, San Andres University"
    },{
        title: "Honour Diploma for the thermodynamics experiment 'The Drinking Bird'",
        period: "2002-07",
        amount: "",
        comment: "Physics Department, Science Faculty, San Andres University"
    }]
}];
const work_exp = [{
    position: "Programmer",
    place: "TMC Kamigo Plant, Toyota, Japan",
    period: "2022-04 - 2022-08",
    job : ["Operational Research: Implemented a tool to improve suppliers routing in Python.","Build mobile version of Flask/React autonomous robot control tool."] 
},{
    position: "Programming Mentor",
    place: "Galileo Inc., Nagoya, Japan",
    period: "2021-12-2022-03",
    job : ["Mentored one employee in Python and MySQL.","Set up a local server and a DB to access data within the network.","Implemented a REST-api in PHP to perform CRUD operations."]
},{
    position: "Lead Programmer",
    place: "CF Kobo, Nagoya, Japan",
    period: "2021-05-2021-12",
    job: ["Using a GigE camera SDK implemented in C# new functions to control hardware and record video and images.","Lead and Mentored a team of 3 novice developers to develop a monitoring system to acquire data from sensors and upload them to a remote server provided by the client.","Sensor calibration to send/receive data using small communication device."]
},{
    position: "Programmer",
    place: "TMC Kamigo Plant, Toyota, Japan",
    period: "2020-10-2021-03",
    job:["Aided in designing and implementing new tools for a GUI Python application. Tests were made on site."]
},{
    position: "Jr. Data Analyst",
    place: "IVIS (Intelligent Vision and Imaging Systems), Toyota, Japan",
    period: "2018-07-2020-06",
    job: ["CAE software operator (Fluid Dynamics Analysis)", "Implemented new tools (scripts) to connect pipelines to a cluster of computers.","Implemented a simulation written in C-like code to test a new tool to improve driving conditions."]
},{
    position: "Jr. Physicist",
    place: "IBTEN (National Nuclear Regulatory Institution), Bolivia",
    period: "2009-01-2009-09",
    job: ["Calibrated radionucleid instruments using Gamma-ray sources.","Performed Gamma-ray spectroscopy of several samples (metal scraps)."]
}];

const invite = [{
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
}];