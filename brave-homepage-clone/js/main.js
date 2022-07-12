function interactions(){
  
  // ads
  function milhares(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  var max = 300000;
  var min = 400000;
  var ads = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("adsblocked").innerHTML = milhares(ads);

  var maxm = 1000;
  var minn = 1;
  var memory = Math.floor(Math.random() * (maxm - minn)) + minn;

  if (memory > 100){
    var format = "MB";
  }
  else{
    var format = "GB";
  }

  document.getElementById("format").innerHTML = format;
  document.getElementById("memory").innerHTML = memory;
  // hour
  setInterval(function hora() {
      
      function addZero(i) {
          if (i < 10) {i = "0" + i}
          return i;
        }

      const d = new Date();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let time = h + ":" + m;

      document.getElementById("hora").innerHTML = time;
  }, 1000)
  }