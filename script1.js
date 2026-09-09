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
//var innerHeight=0;
//var innerWidth=0;
//var dx=0;
//var dy=0;  
//var moveTimer=null;
/*var leftPressed = false;
function myKeyDown(event){
    if (event.keyCode == 37){
        leftPressed = true;
    }
}
function myKeyUp(event){
    if (event.keyCode == 37){
        leftPressed = false;
    }
}*/

function myLoadFunction(event){
    // alert();
//function moveInterval(){
    var botton=document.getElementById('circle');
    botton.className = 'circle';
}

/*if(leftPressed == true){
        var element=document.getElementById('crcl');
        var positionLeft = parsefloat(element.offsetLeft);
        element.style.left=positionLeft - 10 + 'px';
        
    }
    //alert(window.innerWidth);
    //alert(window.innerHeight);
    //var element=document.getElementById('crl');
    
    //var circleOpacity=parseFloat(element.style.opacity);
    //alert(circleOpacity);
    //element.style.opacity=circleOpacity+0.5;
    /*var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;
    var elementWidth= element.offsetWidth;
    var elementHeight=element.offsetHeight;
    //alert(positionLeft);

    //element.style.left=positionLeft - 10 + 'px';
    //element.style.top=positionTop + 10 + 'px';
    
    if(event.keyCode == 37){
        //dx=-10;
        //dy=0;
        // var positionLeft = element.offsetLeft;
        if (positionLeft - 10 >= 0){
            
            element.style.left=positionLeft - 10 + 'px';
        }
        
     
    }
    if(event.keyCode == 38){
        //dx=0;
        //dy=-10;
        // var positionTop = element.offsetTop;
        if (positionTop - 10 >= 0){
            element.style.top=positionTop - 10 + 'px';
        }

    }
    
    
    if(event.keyCode == 39){
        //dx=10;
        //dy=0;
        // var positionLeft = element.offsetLeft;
        if (positionLeft + elementWidth + 10 <= window.innerWidth){
            element.style.left=positionLeft + 10 + 'px';
        }

    }
    if(event.keyCode == 40){
        //dx=0;
        //dy=10;
       // var positionTop = element.offsetTop;
       if (positionTop + elementHeight + 10 <= window.innerHeight){
           element.style.top=positionTop + 10 + 'px';
       } 
    }
    /*if(event.keyCode == 32){
        event.preventDefault(); // Prevents the page from scrolling down
        dx = 0;
        dy = 0;
    }
    
    /*alert(event.keyCode)*/
   
//}
/*function continuousMove() {
    var element = document.getElementById('crl');
    if (!element) return;

    // Only update position if a key has been pressed
    if (dx !== 0 || dy !== 0) {
        var positionLeft = element.offsetLeft;
        var positionTop = element.offsetTop;
        
        element.style.left = (positionLeft + dx) + 'px';
        element.style.top = (positionTop + dy) + 'px';
    }
}*/



function hi(){
    var element=document.getElementById('circle');
    //element.style.opacity=0;
    //element.style.position='absolute';
    element.addEventListener('click',myLoadFunction);
    //document.addEventListener('keydown',myLoadFunction);
    //document.addEventListener('keydown',myKeyDown);
    //document.addEventListener('keyup',myLoadFunction);
    //document.addEventListener('keyup',myKeyUp);
    //setInterval(myLoadFunction,1000);
    //moveTimer=setInterval(continuousMove,20);
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


    

