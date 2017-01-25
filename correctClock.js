document.addEventListener('DOMContentLoaded', function () {
// change the order of the clock hands
// get all clock element
  var secHandEle = document.getElementById('second')
  var minHandEle = document.getElementById('minute')
  var hourHandEle = document.getElementById('hour')
  var secDegree = 0
  var minDegree = 0
  var hourDegree = 0

// create function for second hand rotation
// input num
// output degree
  function secondRotation (sec) {
    secDegree = (sec / 60) * 360
    return secDegree
  }
  // create function for minute hand rotation
  // input num
  // output degree
  function minuteRotation (sec, min) {
    minDegree = (min / 60) * 360
    if (sec >= 30) {
      minDegree += 3
    }
    return minDegree
  }
  // create function for hour hand rotation
  // input num
  // output degree
  function hourRotation (min, hr) {
    hourDegree = (hr / 12) * 360
    hourDegree += (min * 0.5)
    return hourDegree
  }
  // function to update style.transform
  // input is document object and degree supplied
  function rotateHand (clockHand, degree) {
    clockHand.style.transform = 'rotate(' + degree + 'deg)'
  }
  // move the clock with timing provided
  // input hour,  min , sec value
  function moveClock (inputS, inputM, inputH) {
    var degSec = secondRotation(inputS)
    // everytime minute moves, hour moves
    // get degree of minute
    var degMin = minuteRotation(inputS, inputM)
    // get degree of hour
    var degHour = hourRotation(inputM, inputH)
    rotateHand(secHandEle, degSec)
    rotateHand(minHandEle, degMin)
    rotateHand(hourHandEle, degHour)
  }
  function startClock () {
    var now = new Date()
    moveClock(now.getSeconds(), now.getMinutes(), now.getHours())
  }

  setInterval(startClock, 1000)
})
