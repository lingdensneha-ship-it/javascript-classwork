function myLoadFunction(event){
    
    var elements=document.getElementsByClassName('Circle');
    elements[0].style.backgroundColor='blue';
    elements[0].style.height='500px';
    elements[0].style.width='500px';

}
function hi(){
    var element=document.getElementById('Circle');
    element.addEventListener('click',myLoadFunction);
    }
document.addEventListener('DOMContentLoaded',hi);
    