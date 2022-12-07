
const colors = require('colors');
const fs = require('fs');

const createFile = async( base = 5, l = false, h = 10) => {
    
    try {
        
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= h; i++) {
            console.log(i);
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        };

        if (l) {
            console.log('==============='.green);
            console.log(' Tabla del: '.green, colors.blue(base) );
            console.log('==============='.green);
            console.log(consola.black);
        };
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    
        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFile
}