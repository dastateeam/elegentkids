var myIndex = 0;
carousel();

function carousel() {
  var i;
  var xx = document.getElementsByClassName("mySlides");
  for (i = 0; i < xx.length; i++) {
    xx[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > xx.length) {myIndex = 1}    
  xx[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}/////////////

var myIndexx = 0;

function carousel1() {
  var i;
  var xxx = document.getElementsByClassName("mySlides1");
  for (i = 0; i < xxx.length; i++) {
    xxx[i].style.display = "none";  
  }
  myIndexx++;
  if (myIndexx > xxx.length) {myIndexx = 1}    
  xxx[myIndexx-1].style.display = "block";  
  setTimeout(carousel1, 4000); // Change image every 2 seconds
}
carousel1();


//////////




function addhiddevVissibility() {
    var x = document.getElementById("id-hidegroub");
    x.style.visibility = "hidden";
  }
  
  function myFunction() {
    var x = document.getElementById("id-hidegroub");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
     // document.getElementById("id-son-background").style.height = "150vh";
      //document.getElementById("id-aboat-back").style.top = "120vh";
      //x.classList.add("animate__backInDown");
    } else {
      x.style.visibility = "hidden";
     // document.getElementById("id-son-background").style.height = "65vh";
      //document.getElementById("id-aboat-back").style.top = "50%";
    }
  }

  
  function categoreyall() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.visibility ="visible";
        b.style.visibility ="visible";
        d.style.visibility ="visible";
        c.style.visibility ="visible";
       }
  }
  function categoreyall() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="inline";
        b.style.display ="inline";
        d.style.display ="inline";
        c.style.display ="inline";
       }
  }
  function idcategoreyface() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="inline";
        b.style.display ="none";
        d.style.display ="none";
        c.style.display ="none";
       }
  }
  function idcategoreyhair() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="none";
        b.style.display ="inline";
        d.style.display ="none";
        c.style.display ="none";
       }
  }
  function idcategoreyfacekids() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="none";
        b.style.display ="none";
        d.style.display ="inline";
        c.style.display ="none";
       }
  }
  function idcategoreyhairkids() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="none";
        b.style.display ="none";
        d.style.display ="none";
        c.style.display ="inline";
       }
  }

  window.addEventListener('load', addhiddevVissibility);
  
