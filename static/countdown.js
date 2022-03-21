/* Data from https://rl.se/zenith-calendar
Day, Date Hour Altitude
Tue, Nov 8, 2022 01:16	89.9
Wed, Nov 9, 2022 01:16	89.8
Thu, Nov 10, 2022 01:16	89.5
Fri, Feb 3, 2023 01:46	89.7
Sat, Feb 4, 2023 01:46	90.0
Sun, Feb 5, 2023 01:46	89.7
JS code from https://www.w3schools.com
Modified by ndlopez (github.com/ndlopez).
*/
// Set the date we're counting down to
var allDates=["Nov 8, 2022 01:16:00","Nov 9, 2022 01:16:00","Nov 10, 2022 01:16:00","Feb 3, 2023 01:46:00","Feb 4, 2023 01:46:00","Feb 5, 2023 01:46:00"];
var countDownDate = new Date(allDates[0]).getTime();

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
    
  // If the count down is over, should go to next counter
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("zenith").innerHTML = "EXPIRED";
  }
}, 1000);