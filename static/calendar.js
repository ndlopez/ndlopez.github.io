const monthy = {1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
const day_arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const timeNow = new Date();
let year = timeNow.getFullYear();
let monty = timeNow.getMonth() + 1;
const today = timeNow.getDate();
console.log("today",monty,today);
let feb_date = (year%4==0 && year%100 !=0)?29:28;
if(year%400 == 0){feb_date = 29};

const month_count={1:31,2:feb_date,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
/* Although it might not be a good way to storage months/days its better */
const months = [{month: "January",days:31},{month:"February",days:feb_date},
{month:"March",days:31},{month:"April",days:30},{month:"May",days:31},{month:"June",days:30},{month:"July",days:31},{month:"August",days:31},{month:"September",days:30},{month:"October",days:31},{month:"November",days:30},{month:"December",days:31}];
console.log(months[monty-1].month,months[monty-1].days);

const last_day = new Date(year,monty-1,month_count[monty]).getDay();
const first_day = new Date(year,monty-1,1).getDay();
let w = 1;
let d = first_day;
//Markup
let txt = "";
txt+= '<h2 style="text-align:center;">' + monthy[monty] + '&emsp;' + year + '</h2>';
txt+= '<table summary="' + year + '/' + String(monty).padStart(2, '0') + '/" class="calendar month' + 
monty + '"><tr>';
day_arr.forEach(element => {
    txt+= "<th>" + element + "</th>";    
});
txt+= '</tr><tr class="week1">';
for(let j=0;j<first_day;j++){
    txt+='<td>&nbsp;</td>';
}
for(let idx=1;idx<=month_count[monty];idx++){
    if(d!=0 && (first_day+idx)%7==1){
        w++;d = 0;
        txt+='</tr>';
        txt+='<tr class="week' + w + '">';
    }
    
    //let i_display = (idx<10)?"0" + String(idx):idx;
    let day_count = (idx%7==0)? Math.floor(idx/7):Math.floor(idx/7)+1;
    
    if(idx == today){
        txt += '<td id="d' + year + String(monty).padStart(2, '0') + String(idx).padStart(2, '0') + '" class="' + 
        day_arr[d] + day_count + ' date' + idx + ' today">' + idx + '</td>';
    }else{
        txt+='<td id="d' + year + String(monty).padStart(2, '0') + String(idx).padStart(2, '0') + '" class="' +
        day_arr[d] + day_count + ' date' + idx + '">' + idx + '</td>';
    }
    d++;
}
for(let j=0;j<(6-last_day);j++){
    txt+='<td>&nbsp;</td>\n';
}
txt+='</tr>';
txt+='</table>';
document.write(txt);
