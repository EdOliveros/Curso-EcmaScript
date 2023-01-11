const string = "hello"

//esto va a llenar los caracteres faltantes segun el numero que ponga en el primer argumento, con la informacion que yo ponga en el segundo argumento.
//desde el principio
console.log(string.padStart(10, "hi"));
// resultado en consola:
hihihhello


//desde el final
console.log(string.padEnd(20, "hi"));
// resultado en consola:
hellohihihihihihihih