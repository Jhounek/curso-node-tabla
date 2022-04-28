const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        if(listar) {
            console.log("===========================".america);
            console.log(`Tabla del ${base}`.random);
            console.log("===========================".america);
        }
    
        let salida, consola = '';
    
        for (let multiplo = 1; multiplo <= hasta; multiplo++) {
            const simbolo = 'x'.magenta;
            salida += `${base} x ${multiplo} = ${base * multiplo}\n`;
            consola += `${base} ${simbolo} ${multiplo} = ${base * multiplo}\n`.bold;
        }

        listar ? console.log(consola) : '' ;

        listar ? console.log("===========================".america): '';
    
        fs.writeFileSync(`./salida/tabla-${base}`, salida);
    
        return (`Tabla-${base}.txt creada`.black.bgGreen.bold);
        
    } catch (error) {
        throw error;
    }


}


module.exports = {
    crearArchivo
};