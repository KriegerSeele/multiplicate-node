// Se acostumbra siempre colocar al inicio los required
const fs = require('fs');
const colors = require('colors');

const { resolve } = require('path');
const { reject } = require('assert');
// Otros tipos de required
// const fs = require('express');

// Estos son tipos de archivos que vamos creando en el proyecto
// const fs = require('./fs');

let listTable = (base, limite = 10) => {

        console.log('===================='.green);
        console.log(`=== Tabla del ${ base } ===`.green);
        console.log('===================='.green);

        for (let i = 0; i <= limite ; i++) {

            console.log(`${base} * ${i} = ${base*i}`);            
        }
}

let createFile = ( base, limite = 10 ) => {

    return new Promise((resolve, reject) => {

        if( !Number(base) ){
            reject(`Introduce value ${ base } is not a number`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite ; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
            
        }

        fs.writeFile(`tables/tabla-${ base }-al-${ limite } .txt`, data, (err) => {
        if (err){
            reject (err)
        } else {
           resolve(`table-${ base }-al-${ limite }.txt`)     
        }
        });
    })
}

module.exports = {
    createFile,
    listTable
}