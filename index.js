const uno = () => {
    setTimeout(() => {console.log("uno")}, 1000);
}
const dos = () => {
    setTimeout(() => {console.log("dos")}, 500);
}
const tres = () => {
    setTimeout(() => {console.log("tres")}, 3000);
}
const final = () => {
    setTimeout(() => {console.log("final")}, 2000);
}

function main(){
    console.log("inicio")
    uno();
    dos();
    tres();
    final();
}

main();

function saludo(){
    console.log("Saludo");
}

const llamadora = (callback1) =>{
    //console.log('El tipo de parametro es ' + typeof(callback));
    if(typeof(callback1) === 'function'){
        console.log('Vamos a llamar a nuestro funcion parametro')
        callback1();
    }else{
        console.log('El parametro no es una funcion');
    }
}

llamadora(saludo);

let myArr = [1,3,5,7,45];

myArr.forEach(element => console.log('Recorrido es igual a ', element));