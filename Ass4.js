// Write a JavaScript program to convert a given number to hours and minutes. 
function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }
  console.log(time_convert(150));