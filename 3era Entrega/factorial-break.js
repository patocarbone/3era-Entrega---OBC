// Declaro las variables
let factorial = 1
let i = 1

// Declaro el bucle while donde va a iterar restando hasta llegar a 0

while(i > 0 ) {
    
    factorial *= i
    i++

    if( i >= 10) {
        break;
    }
}

console.log(factorial)
