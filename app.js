// Ejemplo sin utilizar yargs

//const { createFile } = require('./multiplicate/multiplicate');

//console.log(process.argv);
//let argv = process.argv;
//let parameter = argv[2];

//let base = parameter.split('=')[1];

//createFile(base)
//    .then( archivo => console.log(`Archivo creado ${ archivo }`))
//    .catch(err => console.log(err));


// Ejemplo utlizando yargs
//const argv = require('yargs')
//    .command('listar', 'Imprime en consola la tabla de multiplicar',{
//        base: {
//            demand:true,
//            alias: 'b'
//        },
//        limite: {
//            alias: 'l',
//            default: 10
//        }
//    })
//    .help()
//    .argv;

//const { createFile } = require ('./multiplicate/multiplicate');

//let argv2 = process.argv;

//console.log('limite', argv.limite, );

const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

const { createFile, listTable } = require ('./multiplicate/multiplicate');

let comando = argv._[0];

switch ( comando ) {

    case 'listar':
        listTable( argv.base, argv.limite );
    break;    

    case 'crear':
        createFile( argv.base, argv.limite)
            .then( archivo => console.log(colors.green(`Archivo creado ${ archivo }`)))
            .catch(err => console.log(err));
    break;

    default:
        console.log('Comando no reconocido');
}
