//requires
// aqui estamo haciendo el rquire de un modulo ya previmente instalado en nodejs
//
const fs = require('fs');
let data = '';

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        // con analizamos si devuleve un numero, 
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido de base ${base} o limite ${limite} no son un numero valido`);
        } else {
            for (let i = 1; i <= limite; i++) {
                data += `${base}x${i}= ${base*i}\n`
            }
            resolve(data);
        }
    });
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        //aqui estamos revisando si base es un numero
        // revisar esto despues
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                data += `${base}x${i}: ${base*i}\n`;
            }

            //writeFiel recive: 1 nombre del archivo y el path, 2 el nombre del archivo, 3 un callback que recive un msj
            fs.writeFile(`Tablas/tabla-${base}.txt`, data, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}.txt`);
                }

            });
        }
    });
}

// con el con el comando module.export exportamos la funciones que estan en este erchivo para poder usarla en otro archivo
module.exports = {
    // esta seria la forma de la forma del objeto
    //crearArchivo: crearArchivo
    //gracias ECMAScritp 6 solo basta con el nombre original de la funcion y el solo le aniade el valor a la propiedad con la funcion del mismo nombre
    crearArchivo,
    listarTabla
}