const jma_url = "https://www.jma.go.jp/bosai/amedas/data/point/51106/2022";
/*current date and time*/
let myDate = new Date();
var monty = myDate.getMonth() + 1;
var tag = myDate.getDate() -1;
var hh = 23;//myDate.getHours();
var hours = [],dataHours = [],ondo=[];
/* build array of hours: 0 ~ hh */
for (let idx=0;idx < hh;idx++){
    hours.push(idx);
    if(idx % 3 == 0){
        dataHours.push(idx);
    }
}
function zeroPad(tina){
    return (tina<10)?"0"+tina:tina;
}
function build_path_attr(jdx,tim){
    //0 < jdx < 8:
    var path = jma_url + zeroPad(monty) + zeroPad(tag) + "_"+zeroPad(dataHours[jdx]) + ".json";
    var atrib = "2022"+zeroPad(monty)+zeroPad(tag)+zeroPad(tim)+"0000";
    return {"Path":path,"Atrib":atrib};
}

async function get_data(){
    var myTime = hh;
    //Must validate if myTime is within fetched data: if myTime > dataHours[7]
    var gotThis = build_path_attr(7,myTime);
    console.log(gotThis.Path);
    const response = await fetch(gotThis.Path);
    const data = await response.json();
    console.log(myTime,data[gotThis.Atrib].temp[0]);
}
get_data();
//console.log(hours,dataHours,build_path_attr(0,0));