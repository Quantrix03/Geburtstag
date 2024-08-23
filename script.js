function mehr(){
    document.getElementById("b1").remove()
    document.getElementById("i0").remove()
    document.getElementById("popup").innerHTML = "Wenn du magst können wir ja mal wieder was unternehmen. Was auch immer du willst (❁´◡`❁)"
    document.getElementById("i1").src = "confetti1.gif"
    document.getElementById("i2").src = "lecker.gif"
    document.getElementById("t1").innerHTML = "Hi ༼ つ ◕_◕ ༽つ"
    document.getElementById("b2").innerHTML = "Weiter?"
}
var click = 0;

window.onload = function () {
  var seconds = 0; 
  var tens = 0; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
  
    buttonStart.onclick = function() {
      if (click == 18){
        document.getElementById("button-start").remove()
        document.getElementById("button-stop").style= "background:url(spid.jpg); height:400px; width:700px;"
      }
      click++;
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
        if(click == 19){
          document.getElementById("button-stop").remove()
          document.getElementById("angst").remove()
          document.getElementById("yay").src = "gutgemacht.gif"
          document.getElementById("b3").innerHTML = "AGAIN💢"
          document.getElementById("b4").innerHTML = "GO BACK💤"
        }
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }
  