var g = document.getElementById('homButt');
g.addEventListener('click', 
function (){
    var gepro = document.getElementById("projects");
    var about = document.getElementById('aboutMe');
    var fm = document.getElementById("findMe");
   // if(about.style.display === "none"){
gepro.style.display = 'none';        
fm.style.display = 'none';        
about.style.display = 'grid';
  //  } else {
  //      about.style.display = 'none';
 //   }
}, false);