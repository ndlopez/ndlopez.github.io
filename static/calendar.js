const monthy = {1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
const day_en = {d0:"sun",d1:"mon",d2:"tue",d3:"wed",d4:"thu",d5:"fri",d6:"sat"};
const day_arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const timeNow = new Date();
let year = timeNow.getFullYear();
let monty = timeNow.getMonth() + 1;
let today = timeNow.getDate();
console.log("today",monty,today);
let feb_date = (year%4==0 && year%100 !=0)?29:28;
if(year%400 == 0){feb_date = 29};

const month_count={1:31,2:feb_date,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
const m_display=(monty<10)?"0" + String(monty):monty;
const last_day=new Date(year,monty-1,month_count[monty]).getDay();
const first_day=new Date(year,monty-1,1).getDay();
let w = 1;
let d = first_day;
//Markup
var txt = "";
txt+= '<h2 style="text-align:center;">' + monthy[monty] + '&emsp;' + year + '</h2>';
txt+= '<table summary="' + year + '/' + m_display + '/" class="calendar month' + 
monty + '">';
txt+= '<tr>';
txt+= '<th>Sun</th>';
txt+= '<th>Mon</th>';
txt+= '<th>Tue</th>';
txt+= '<th>Wed</th>';
txt+= '<th>Thu</th>';
txt+= '<th>Fri</th>';
txt+= '<th>Sat</th>';
txt+= '</tr>';
txt+= '<tr class="week1">';
for(let j=0;j<first_day;j++){
    txt+='<td>&nbsp;</td>';
}
for(let i=1;i<=month_count[monty];i++){
    if(d!=0 && (first_day+i)%7==1){
	w++;d=0;
	txt+='</tr>';
	txt+='<tr class="week' + w + '">';
    }
    
    let i_display = (i<10)?"0" + String(i):i;
    let day_count = (i%7==0)? Math.floor(i/7):Math.floor(i/7)+1;
    
    if(i == today){
        txt += '<td id="d' + year + m_display + i_display + '" class="' + 
        day_en['d'+d] + day_count + ' date' + i + ' today">' + i + '</td>';
    }else{
        txt+='<td id="d' + year + m_display + i_display + '" class="' +
        day_en['d'+d] + day_count + ' date' + i + '">' + i + '</td>';
    }
    d++;
}
for(let j=0;j<(6-last_day);j++){
    txt+='<td>&nbsp;</td>\n';
}
txt+='</tr>';
txt+='</table>';
document.write(txt);
