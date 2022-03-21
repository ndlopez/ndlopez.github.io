/* Data from https://rl.se/zenith-calendar
Date Altitude
Tue, Nov 8, 2022 01:16 AM	89.9
Wed, Nov 9, 2022 01:16 AM	89.8
Thu, Nov 10, 2022 01:16 AM	89.5
Fri, Feb 3, 2023 01:46 AM	89.7
Sat, Feb 4, 2023 01:46 AM	90.0
Sun, Feb 5, 2023 01:46 AM	89.7
JS code from https://www.w3schools.com
Modified by ndlopez (github.com/ndlopez).
*/
// Set the date we're counting down to
var countDownDate = new Date("Nov 7, 2022 1:16:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if (minutes < 10){
      minutes = `0${minutes}`;
  }
  if (seconds < 10){
      seconds = `0${seconds}`;
  }
  document.getElementById("zenith").innerHTML = days + "d " + hours + "H "
  + minutes + "M " + seconds + "S";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("zenith").innerHTML = "EXPIRED";
  }
}, 1000);