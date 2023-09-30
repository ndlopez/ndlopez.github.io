/*
  JS code from https://www.w3schools.com
  Modified by ndlopez (github.com/ndlopez). 

  Must add timezone validator, init set to JST but 
  since from Japan a zenith cant be seen...

  Data from https://rl.se/zenith-calendar
  Set the date in JST counting down to
  idx, Day, Date Hour Altitude
  3, Fri, Feb 3, 2023 01:46 89.7
  4, Sat, Feb 4, 2023 01:46 90.0
  5, Sun, Feb 5, 2023 01:46 89.7
  6, Tue, Nov 7, 2023 01:16:10 89.6
  7, Wed, Nov 8, 2023 01:16:13 89.9
  8, Thu, Nov 9, 2023 01:16:17 89.9
  9, Fri, Nov 10, 2023 01:16:22 89.6
*/
let idx = 0;
const allDates=["Nov 7, 2023 01:16:10", "Nov 8, 2023 01:16:13", "Nov 9, 2023 01:16:17", "Nov 10, 2023 01:16:22"];
let countDownDate = new Date(allDates[idx]).getTime();

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