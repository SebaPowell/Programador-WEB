var textarea = document.getElementById("textarea");
var caracteres = document.getElementById("caracteres");

textarea.addEventListener('keyup', function () {
    caracteres.innerText = textarea.value.length;
})

var boton = document.getElementById("boton");

boton.addEventListener('click', function(){
    document.getElementById('textarea').value="";

})