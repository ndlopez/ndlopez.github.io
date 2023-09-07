//js

const theseDays = ["日 ","月 ","火 ","水 ","木 ","金 ","土 "];

const currTime = new Date();
const svgObj = document.getElementById("clock");
svgObj.style.setProperty('--start-seconds',currTime.getSeconds());
svgObj.style.setProperty('--start-minutes',currTime.getMinutes());
svgObj.style.setProperty('--start-hours',currTime.getHours() % 12);

let marks = "";
for (let idx = 0; idx < 11; idx++) {
   marks+= '<line x1="15" y1="0" x2="16" y2="0" />';
}
let txt = '<text x="0" y="0" class="dateText texty">'+theseDays[currTime.getDay()]+ currTime.getDate()+'</text>';
let txt12 = '<text x="0" y="0" class="text12 texty">12</text>';
let index = '<line x1="0" y1="0" x2="9" y2="0" class="hour" /><line x1="0" y1="0" x2="13" y2="0" class="minute" /><line x1="0" y1="0" x2="16" y2="0" class="seconds" /><circle cx="20" cy="20" r="0.7" class="pin" />';
svgObj.innerHTML = '<circle cx="20" cy="20" r="19" /><g class="marks">' + marks + '</g>' + txt + txt12 + index;
//console.log(txt);
