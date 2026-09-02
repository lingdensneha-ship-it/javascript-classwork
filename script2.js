/*function myLoadFunction(){
    var element=document.getElementById('month');
    element.firstChild.nodeValue='New month';
}
document.addEventListener('DOMContentLoaded',myLoadFunction);
function myLoadFunction(){
    var a=document.getElementById('Food');
    a.firstChild.nodeValue='New Food';
}
document.addEventListener('DOMContentLoaded',myLoadFunction);
function myLoadFunction(){
    var a=document.getElementById('Food');
    a.firstChild.nodeValue='New Food';
}
function hi(){
document.addEventListener('click',myLoadFunction);
}
document.addEventListener('DOMContentLoaded',hi);



document.addEventListener('DOMContentLoaded',myLoadFunction);*/
function myLoadFunction(){
    var element=document.getElementById('myname');
    alert(element.value)
}

function hi(){
    var element=document.getElementById('btn');
    element.addEventListener('click',myLoadFunction);
}
document.addEventListener('DOMContentLoaded',hi);


