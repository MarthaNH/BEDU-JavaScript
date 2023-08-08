 const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]

 let promedio = 0;

 for (let i =0; i < numbers.lenght; i++) {
    promedio += numbers[i];
 }

 promedio = promedio / numbers.length;
 console.log("El promedio es: " + promedio);