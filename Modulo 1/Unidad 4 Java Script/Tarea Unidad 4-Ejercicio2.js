cantidad = prompt("Cuantos números querés comparar???")
numeros = []

for (i = 0; i < cantidad; i++) {
    numeros[i] = prompt(`Ingrese un número de ${i+1} / ${cantidad}`);
}

mayor = numeros[0];

for(i=0; i < numeros.length; i++){
    
    if(numeros[i] > mayor){
       mayor= numeros[i];
    } 
    
}


