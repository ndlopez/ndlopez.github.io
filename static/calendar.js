const monthy = {1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
const day_arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const timeNow = new Date();
let year = timeNow.getFullYear();
let monty = timeNow.getMonth() + 1;
let today = timeNow.getDate();
console.log("today",monty,today);
let feb_date = (year%4==0 && year%100 !=0)?29:28;
if(year%400 == 0){feb_date = 29};

const month_count={1:31,2:feb_date,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
/* Although it might not be a good way to storage months/days its better */
const months = [{month: "January",days:31},{month:"February",days:feb_date},
{month:"March",days:31},{month:"April",days:30},{month:"May",days:31},{month:"June",days:30},{month:"July",days:31},{month:"August",days:31},{month:"September",days:30},{month:"October",days:31},{month:"November",days:30},{month:"December",days:31}];
console.log(months[monty-1].month,months[monty-1].days);

const m_display=(monty<10)?"0" + String(monty):monty;
const last_day=new Date(year,monty-1,month_count[monty]).getDay();
const first_day=new Date(year,monty-1,1).getDay();
let w = 1;
let d = first_day;
//Markup
var txt = "";
txt+= '<h2 style="text-align:center;">' + monthy[monty] + '&emsp;' + year + '</h2>';
txt+= '<table summary="' + year + '/' + m_display + '/" class="calendar month' + 
monty + '"><tr>';
day_arr.forEach(element => {
    txt+= "<th>" + element + "</th>";    
});
txt+= '</tr><tr class="week1">';
for(let j=0;j<first_day;j++){
    txt+='<td>&nbsp;</td>';
}
for(let i=1;i<=month_count[monty];i++){
    if(d!=0 && (first_day+i)%7==1){
        w++;d = 0;
        txt+='</tr>';
        txt+='<tr class="week' + w + '">';
    }
    
    let i_display = (i<10)?"0" + String(i):i;
    let day_count = (i%7==0)? Math.floor(i/7):Math.floor(i/7)+1;
    
    if(i == today){
        txt += '<td id="d' + year + m_display + i_display + '" class="' + 
        day_arr[d] + day_count + ' date' + i + ' today">' + i + '</td>';
    }else{
        txt+='<td id="d' + year + m_display + i_display + '" class="' +
        day_arr[d] + day_count + ' date' + i + '">' + i + '</td>';
    }
    d++;
}
for(let j=0;j<(6-last_day);j++){
    txt+='<td>&nbsp;</td>\n';
}
txt+='</tr>';
txt+='</table>';
document.write(txt);
