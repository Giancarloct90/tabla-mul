const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

// el argv es la el paquete que nos permite usar variables en nuetro app ejemplo node app listar --base 5
// en este caso creamo una constante que es igual al require de de yargs y concatenamos la funcion command
// la funcion command acepta 3 parametros 1,es el nombre de la funcion, 2 es la descripcion de la funcion que se crea
// el 3 es un objeto que son los flag, este objeto recibe los flag que necesitamo usar
const argv = require('yargs')
    .command('listar', 'imprime en cosola la tabla de multiplicar', opt)
    .command('Crear', 'Genera un archivo con la tabla de multipplicar y su limite', opt)
    // con el help se despliega toda la informacion de los comando previmente introducidos
    .help().argv;

module.exports = {
    argv
}