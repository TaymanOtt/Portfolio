let x = document.getElementById('comButt');
x.addEventListener('click',
function(){
    var initIn = document.getElementById("initInvest").value;
     var intRate = document.getElementById("intRate").value;
      var lenTime = document.getElementById("lentOT").value;
var CompInt =  initIn*(Math.pow((1+intRate),lenTime)+1);

document.getElementById("output2").innerHTML = CompInt + " is your interest compounded.";

}, false);
