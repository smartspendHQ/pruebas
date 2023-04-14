function changeText() {
    var btn = document.getElementById("btn");
    btn.innerHTML = "Generating Key";
    var dots = 0;
    var interval = setInterval(function() {
      if (dots < 3) {
        btn.innerHTML += ".";
        dots++;
      } else {
        btn.innerHTML = "Generating Key";
        dots = 0;
      }
    }, 500);
    setTimeout(function(){
      clearInterval(interval);
      btn.innerHTML = "Fund Key Generated";
      alert("762t67tg8e3hiu2345¿spkdsñlk");
    }, 4000);
  }