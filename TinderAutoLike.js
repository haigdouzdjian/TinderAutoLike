// https://www.w3schools.com/jsref/met_win_setinterval.asp

sendIt = setInterval(function(){
  var instr = document.getElementsByClassName("recsGamepad__button--like");
  instr[0].click()
}, 500)
