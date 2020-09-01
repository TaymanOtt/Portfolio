var m = document.getElementById('conButt');
m.addEventListener('click', function(){
    var found = document.getElementById('findMe');
    var prject = document.getElementById('projects');
    var abt = document.getElementById('aboutMe');
  //  if(found.style.display === "none"){
abt.style.display = 'none';
prject.style.display = 'none';
found.style.display = 'grid';
    //} else {
      //  found.style.display = 'none';
    //}
  }, false);