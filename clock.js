document.addEventListener('DOMContentLoaded',function) {

function secondRotation (num) {
  console.log((num / 60) * 360)
}

// secondRotation(20)

function minuteRotation (num) {
  console.log((num / 60) * 360)
}

// minuteRotation(20)

function hourRotation (num) {
  console.log((num / 12) * 360)
}
}
// hourRotation(20)

var hourTurn = document.getElementbyId('hour')
var minuteTurn = document.getElementbyId('minute')
var secondTurn = document.getElementbyId('second')

hourTurn.style.transform = 'rotate(hourRotation())'
minuteTurn.style.transform = 'rotate(minuteRotation())'
secondTurn.style.transform = 'rotate(secondRotation())'

// secondRotation(0); returns 0
// secondRotation(59); // returns (59 / 60) * 360
//
// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360
