var tryNumber = 0;
document.getElementById("testDebug").addEventListener("click", function(){
  tryNumber++;
  var changeMe = "Breakpoint not set " + tryNumber;
  document.getElementById("noDebug").innerHTML = changeMe ;                                           
});

document.getElementById("testDebug").addEventListener("click", function(){
  tryNumber++;
  var changeMe = "Debugger not work " + tryNumber;
  document.getElementById("debugResult").innerHTML = changeMe ;                                           
});
