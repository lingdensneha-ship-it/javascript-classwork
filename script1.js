/*alert('Script loaded');
alert('Hello');
alert('my');
alert('name');
alert('is');
alert('Sneha');
alert();
function scriptLoaded(){
    alert('Script loaded');
}
function addition() {
    var num1 = 60;
    var num2 = 7;
    var num3 = num1 + num2;
    alert(num3);
}
addition();function call
function displayFullName(){
    var fullName="Sneha Lingden";
    alert(fullName);
}
displayFullName();
function showFullName(){
    var firstName = "Sneha";
    var lastName = "Lingden";
    alert(firstName + " " + lastName);
}
showFullName();*/
/*function print5(){

    console.log(1);
    
    console.log(2);
    
    console.log(3);
    
    console.log(4);
    
    console.log(5);
    
    console.log();
}
    print5();
    print5();
/*function print5(){

    alert(1);
    
    alert(2);
    
    alert(3);
    
    alert(4);
    
    alert(5);
}
    
    print5();
    print5();*/
    

function myLoadFunction(){
    var element=document.getElementById('crl');
    //var circleOpacity=parseFloat(element.style.opacity);
    //alert(circleOpacity);
    //element.style.opacity=circleOpacity+0.5;
    //var positionLeft = element.offsetLeft;
     var positionTop = element.offsetTop;
    //alert(positionLeft);

    //element.style.left=positionLeft + 10 + 'px';
    element.style.top=positionTop + 10 + 'px';
   
}

function hi(){
    var element=document.getElementById('crl');
    //element.style.opacity=0;
    element.addEventListener('click',myLoadFunction);
    //setInterval(myLoadFunction,1000);
}
document.addEventListener('DOMContentLoaded',hi);

/*function myLoadFunction(){
  var element = document.getElementById('crl');
  
  // Initialize opacity if not set
  if (!element.style.opacity) {
    element.style.opacity = '1';
  }
  
  // Read current opacity and convert to number
  var currentOpacity = parseFloat(element.style.opacity);
  
  // Decrease opacity if it is above 0
  if (currentOpacity > 0) {
    element.style.opacity = (currentOpacity - 0.1).toFixed(1);
  }
}

function hi() {
  var element = document.getElementById('crl');
  element.addEventListener('click', myLoadFunction);
}

document.addEventListener('DOMContentLoaded', hi);*/


    

