//function myLoadFunction(){
    //var randomNumber = Math.ceil(Math.random()*11);
    //var randomNumber = Math.round(Math.random()*10);
    //var randomNumber = Math.floor(Math.random()*11);
    //alert(randomNumber);
//}
function myLoadFunction(){
        var elements = document.getElementsByTagName('button');
        elements[0].addEventListener('click',changeColor);
}
function changeColor(){

    var myArray=[];
    myArray[0]='red';
    myArray[1]='blue';
    myArray[2]='green';
    var randomNumber = Math.floor(Math.random()*3);
    var elements=document.getElementsByTagName('body');
    elements[0].style.backgroundColor=myArray[randomNumber];
}
//element[1].style.backgroundColor='blue';
//element[2].style.backgroundColor='green';
document.addEventListener('DOMContentLoaded',myLoadFunction);



