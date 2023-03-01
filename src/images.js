var image=document.getElementById('bgimage');
image=['img/clouds.jpg','img/haze.jpg','img/ice.jpg','img/overcast.jpg','img/rainy.jpg']

var imageCount= image.length;


var number=Math.floor(Math.random()*imageCount)


window.onload()=function(){
    image.style.backgroundImage='url('+image[number]+')'
}