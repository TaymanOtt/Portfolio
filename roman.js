var k = document.getElementById('romButt');
k.addEventListener('click',
function(){
    var m = document.getElementById("num").value;
    m = parseInt(m, 10);
    var f = m.toString();
    var g = isNaN(f);

    if (g == true){

    document.getElementById("output1").innerHTML =  "Not a number!";
    }
    else {
     var digits = String(+m).split(""),
     key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
     "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
     "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    roman = "",
    i = 3;
    while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;



    document.getElementById("output1").innerHTML =
   Array(+digits.join("") + 1).join("M") + roman + " in roman";
    }

}, false);