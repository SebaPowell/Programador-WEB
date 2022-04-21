var boton1 = document.getElementById("boton1")
var boton2 = document.getElementById("boton2")
var boton3 = document.getElementById("boton3")
var boton4 = document.getElementById("boton4")



boton1.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'darkorange';

});

boton2.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'darkblue';

});
  
boton3.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'darkgreen';

});

boton4.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'darkslategray';

});