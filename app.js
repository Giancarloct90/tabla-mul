//requires
//si miramos los curly bracket despues de un const o let eso siginifica que utilizaran la destructuracion
// aqui estamos haciendo la destructuracion estamos obteniendo la funcion crearArchivo del archivo multiplicar,js que previamente exporto dicha funcion 
// lo hacemos de esta manera para poder usar la funcion de una manera mas rapida
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

const {
    argv
} = require('./config/yargs');

// con este paquete le agregamos colores a los string
// ejemplo console.log('Hello world'.green)
// ejemplo console.log(`Hello word ${Mark.green}`)
const color = require('colors');

//aqui obtenemos del arreeglo donde de la contante argv que a su vez lo obtuvimos del require('yargs').argv
// en '_' se guardan los valores estan seguido de mandar a llamar a la app node app listar crear(ejemplos)
// analizamos con un switch que escribio el cliente si un listar o crear y en base a eso ejecutamos las diferente funciones previmente creadas

switch (argv._[0]) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite).then(response => {
            console.log(response.magenta);
        }).catch(e => {
            console.log('Error', e);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(response => {
            console.log(`El archivo ${response.green} se creo con exito`);
        }).catch(e => {
            console.log(e);
        });
        console.log('Crear');
        break;
    default:
        console.log('Comando reconocido');

}

//esta libreria ya exite en nodejs 
// hay librerias que se instalan y tenemos que instalarla antes de usarla
//hay requires que se son archivos que nosotros mismo creaos require(./index.js)
// const mul = require('./multiplicar/multiplicar');

// con arvg estamos pasando el parametro de process.argv que son los argumentos del proceso que se esta ejucantdo
// node app.js --base=5, en este caso process.argv devuelve un arreglo con los parametro del proceso que se esta ejecutando
// si revisamos dicho arreglo en el indice 2, tiene el parametro de --base=5 

// process es una variable que se crea automanticamente al ejecutar la app y contiene un monton de informacion acerca de la app y el entorno donde se esta corriendo
// una gran cantidad de datos, como la plataforma donde se esta usando, y la arquitectura del prcocesador
// el process.argv vienen los argunmentos que se le estan pasando a la app. ejemplo npm install express, 
// install y express son arguentos del la app y se encuentra almacenados en la en un arreglo en process.argv
// en nuestro caso la persona escribir a la hora de ejuctar esta app algo asi, node app.js --base=5
// --base=5 es un argumento que se almacenara en el process.argv en el index del arreglo 2
// de esta manera luego lo cortamos con un split = y tomamos el index 1 del nuevo arreglo y asi obtenemos el 5 
// con el split podemos convertir de un string a un arreglo
//let parametro = process.argv[2].split('=');

// console.log(argv.base);
// console.log(argv.limite);

// console.log(process.argv);
//let base = parametro.split('=');
//console.log(parametro[1]);