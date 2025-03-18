const prompt = require('prompt-sync')();
let nombres = ["Anasofia", "Felipe", "Camilo", "Analida"]
let correos = ["juan.bedoya@gmail.com", "camilog@gmail.com", "emanuelj@gmai.com", "Analida@ana.com"]
let edades = [20 , 50 , 80, 25]
let banderaGlobal = true;
function verificarCorreos(correoV) {
    let band1 = true
    while (band1){
        let correo =[] 
        correo = correoV;
        for (let i = 0; i < correo.length; i++) {
            if (correo[i]=="@"){
                band1=false;
            }
        }
        if (band1==true) {
            correoV = prompt("Correo no valido, intente de nuevo: ")
        }
        else{
            return correoV;
        }
}
}
function verificarNombre (nombreV){
    let band1 = true
    while (band1){
if (isNaN(parseInt(nombreV))){
    band1=false
}

        if (band1==true) {
            nombreV = prompt("Nombre no valido, intente de nuevo: ")
        }
        else{
            return nombreV;
        }

        }
}
function verificarEdad (edadV){
    let band1 = true
    while (band1){
if (isNaN(parseInt(edadV))){
}else{
    band1=false;
}

        if (band1==true) {
            edadV = prompt("Numero no valido, intente de nuevo: ")
        }
        else{
            return edadV;
        }

        }
}



console.log("Bienvenido al Gestor de Clientes  ");
while(banderaGlobal){
console.log(`Selecciona la opcion a ejecutar\n1. Agregar cliente\n2. Eliminar cliente\n3. Buscar cliente\n4. Mostrar clientes ordenados\n5. Calcular edad promedio\n6. Salir\n  `)
let key = parseInt(prompt(""))
switch (key) {
    case 1: 
    let correoV=(prompt ("ingrese el correo: "));
    correoV=verificarCorreos(correoV);
    correos.push(correoV);
    let nombreV =prompt("ingrese nombre: ")
    nombreV= verificarNombre(nombreV)
    nombres.push(nombreV)
    let edadV =prompt("ingrese Edad: ")
    edadV= verificarEdad(edadV)
    edades.push(edadV)
        
        break;
    case 2: 
        let clienteEliminar= prompt("ingrese el nombre cliente a eliminar: ")
        clienteEliminar=verificarNombre(clienteEliminar)
        if (nombres.includes(clienteEliminar)){
        nombres.splice(nombres.indexOf(clienteEliminar),1)
        correos.splice((nombres.indexOf(clienteEliminar))-1,1)
        edades.splice((nombres.indexOf(clienteEliminar)-1),1)
        console.log (`${clienteEliminar} fue eliminado con exito`)
    }
        else{
            console.log("Cliente no existe")
        }
        break;
    case 3: 
        let clienteBuscar= prompt("ingrese el nombre cliente a buscar: ")
        clienteBuscar=verificarNombre(clienteBuscar)
        if (nombres.includes(clienteBuscar)){
        console.log(nombres[(nombres.indexOf(clienteBuscar),1)])
        console.log(correos[((nombres.indexOf(clienteBuscar))-1,1)])
        console.log(edades[((nombres.indexOf(clienteBuscar)-1),1)])
        }
        else{
            console.log("Cliente no existe")
        }
        break;

    case 4:
        let espejoNombres= nombres;
        espejoNombres.sort((a,b)=>a-b) //no se porque no :c
        console.log(espejoNombres)
        break;
    case 5: 
        let totalEdades=edades.reduce((total, num)=> total+num,0)
        console.log(totalEdades/edades.length)
        break;
    case 6: 
        banderaGlobal=false
        break;

    default:
        console.log("opcion no valida, intente de nuevo")
        break;
}
}
