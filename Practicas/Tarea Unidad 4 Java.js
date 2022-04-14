var numero;
var numero2;
var operacion;
var resultado;

numero = prompt('Ingrese un número', '');
numero2 = prompt('Ingrese otro numero', '');
operacion = prompt('Ingrese una operación: (suma, resta, producto, division')

var suma = parseInt(numero) + parseInt(numero2);
var resta = numero - numero2;
var producto = numero * numero2;
var division = numero / numero2;

if (operacion == 'suma') {
    resultado= suma;
} else {
    if (operacion == 'resta') {
        resultado= resta;
    } else {
        if (operacion == 'producto') {
            resultado= producto;
        } else {
            if (operacion == 'division') {
                resultado= division;
            } else {
                resultado= 'ERROR!!!';
                alert('ERROR: Operacion incorrecta!!!');
            }
        }
    }
}    


