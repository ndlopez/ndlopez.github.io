/*
  JS code from https://www.w3schools.com
  Modified by ndlopez (github.com/ndlopez). 

  Must add timezone validator, init set to JST but 
  since from Japan a zenith cant be seen...

  Data from https://rl.se/zenith-calendar
  Set the date in JST counting down to
  idx, Day, Date Hour Altitude
*/
let idx = 0;
const csv_url="https://raw.githubusercontent.com/ndlopez/scrapped/main/data/solar_zenith.csv";
//const allDates=["Feb 3, 2024 01:46:08", "Nov 8, 2023 01:16:13", "Nov 9, 2023 01:16:17", "Nov 10, 2023 01:16:22"];
const allDates = get_csv();

let countDownDate = new Date(allDates[idx]).getTime();

async function get_csv(){
  const dates = [];
  const resp = await fetch(csv_url);
  const data = await resp.text();
  const rows = data.split('\n').slice(1);
  rows.forEach(row => {
    const this_date = row.split(',');
    dates.push(this_date[0]);
  });
  // console.log("this_data",dates);
  return dates;
}
const gina = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="zenith"

  document.getElementById("zenith").innerHTML = `${days} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    
  // If the count down is over, go to next counter
  if (distance < 0) {
    // console.log(idx,allDates[idx],"EXPIRED");
    // clearInterval(gina);
    idx += 1;
    countDownDate = new Date(allDates[idx]).getTime();
    // document.getElementById("zenith").innerHTML = "EXPIRED";
  }
}, 1000);
