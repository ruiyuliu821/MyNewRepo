// This function gives a number between a specified range
// Input:
//    lower - the lower value of the range
//    upper - the upper value of the range
function randomNum(lower, upper) {
    let num = lower + Math.random() * (upper - lower)
    return num
  }
  
  // This function creates a white circle SVG element
  // Input:
  //    x - the x-position
  //    y - the y-position
  //    radius - the radius of the circle
  function makeCircle(x, y, radius) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', x)
    circle.setAttribute('cy', y)
    circle.setAttribute('r', radius)
    circle.setAttribute(
      'fill',
      '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    )
    return circle
  }