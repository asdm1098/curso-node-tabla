const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// const argv = require('yargs')
//                 .option('b', {
//                     alias: 'base',
//                     type: 'number',
//                     demandOption: true
//                 })
//                 .check( (argv, options) => {
//                     console.log('YARGS: ', argv);
//                     if ( isNaN( argv.b) ) {
//                         throw 'La base tiene que ser un número'
//                     }
//                     return true;
//                 })
//                 .argv;


console.clear();

//Argumentos que vienen por la consola => sin uso de YARGS
// const [, , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


console.log(argv);


createFile(argv.b, argv.l, argv.h)
    .then( nameFile => console.log( nameFile.bgBlack.green, 'created') )
    .catch( err => console.log( err ) );
