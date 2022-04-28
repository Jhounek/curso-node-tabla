const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }
    )
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        describe: 'es el limite de la multiplicacion',
        default: 10
    }).check((argv, option) => {
        if (isNaN(argv.b)||isNaN(argv.h)) {
            throw 'la base y el limite deben de ser numeros';
        }
        return true;
    }).argv;

module.exports = argv;
