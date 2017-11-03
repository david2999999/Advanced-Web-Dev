var btn = document.querySelector("button");
var price = document.querySelector("#price");
var currency;
btn.addEventListener("click", function(){
  var curOptions = document.getElementsByName("currency");
   
  curOptions.forEach(function(cur){
    if(cur.checked){
      currency = cur.value;
    }
    return currency;
  });
  
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var data = JSON.parse(XHR.responseText);
      var rate = data.bpi[currency].rate;
      console.log(currency + ": " + rate);
      price.innerText = rate + " " + currency;
    }
  }
  
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
  XHR.open("GET", url);
  XHR.send();
});