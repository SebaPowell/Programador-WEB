var numero;
var transporte;

numero = prompt('Ingrese la distancia a recorrer en metros', '');

if (numero <= 1000) {
    transporte = 'Caminando';
} else {
    if (numero > 1000 && numero <= 10000) {
       transporte = 'Bicicleta';
    } else {
        if (numero > 10000 && numero <= 30000) {
            transporte = 'Colectivo';
        } else {
            if (numero > 30000 && numero <= 100000) {
                transporte = 'Auto';
            } else {
               transporte = 'Avión';
            }
        }
    }
}

