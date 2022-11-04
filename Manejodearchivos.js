const { info } = require('console');
const fs = require('fs');
fs.writeFileSync('archivo.txt', "Hola este es un archivo nuevo, creado de manera sincronica");
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincronica", (err) => {
    if (err)
        console.log(err);
    else{
    }
});