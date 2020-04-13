var slider = document.querySelector(".slider");

var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var downArrow = document.querySelector(".down");

var liIndex = 0;

rightArrow.addEventListener('click',function(){
    liIndex = (liIndex < 3)?  liIndex + 1 : 3;
    slider.style.transform = 'translate(' + (liIndex) * - 25 + '%)';
});

leftArrow.addEventListener('click',function(){
    liIndex = (liIndex > 0)?  liIndex - 1 : 0;
    slider.style.transform = 'translate(' + (liIndex) * - 25 + '%)';
});

downArrow.addEventListener('click', function(){
    
});