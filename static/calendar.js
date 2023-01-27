const timeNow = new Date();
var y = timeNow.getFullYear();
var m = timeNow.getMonth()+1;
let today = timeNow.getDate();
console.log("today",m,today);
var feb_date=(y%4==0 && y%100 !=0)?29:28;
if(y%400==0){feb_date=29};
var monthy={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
var month_count={1:31,2:feb_date,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
var day_en={d0:"sun",d1:"mon",d2:"tue",d3:"wed",d4:"thu",d5:"fri",d6:"sat"};
var m_display=(m<10)?"0"+String(m):m;
var last_day=new Date(y,m-1,month_count[m]).getDay();
var first_day=new Date(y,m-1,1).getDay();
var w=1;
var d=first_day;
//Markup
var txt="";
txt+='<h2 style="text-align:center;">'+monthy[m]+'&emsp;'+y+'</h2>';
txt+='<table summary="'+y+'/'+m_display+'/" class="calendar month'+m+'">';
txt+='<tr>';
txt+='<th>Sun</th>';
txt+='<th>Mon</th>';
txt+='<th>Tue</th>';
txt+='<th>Wed</th>';
txt+='<th>Thu</th>';
txt+='<th>Fri</th>';
txt+='<th>Sat</th>';
txt+='</tr>';
txt+='<tr class="week1">';
for(let j=0;j<first_day;j++){
    txt+='<td>&nbsp;</td>';
}
for(let i=1;i<=month_count[m];i++){
    if(d!=0 && (first_day+i)%7==1){
	w++;d=0;
	txt+='</tr>';
	txt+='<tr class="week'+w+'">';
    }
    
    var i_display=(i<10)?"0"+String(i):i;
    day_count=(i%7==0)? Math.floor(i/7):Math.floor(i/7)+1;
    
    if(i == today){
        txt+='<td id="d'+y+m_display+i_display+'" class="' +day_en['d'+d]+day_count+' date'+i+' today">'+i+'</td>';
    }else{
        txt+='<td id="d'+y+m_display+i_display+'" class="' +day_en['d'+d]+day_count+' date'+i+'">'+i+'</td>';
    }
    d++;
}
for(let j=0;j<(6-last_day);j++){
    txt+='<td>&nbsp;</td>\n';
}
txt+='</tr>';
txt+='</table>';
document.write(txt);
