console.log("Esto es un mensaje en el log");
console.error("Esto es un error");
console.info("Agrega informacion a la consola");
console.warn("Envia un aviso");

const gente = [
    {nombre: 'Diego', edad: 30},
    {nombre: 'Toni', edad: 10},
    {nombre: 'Johana', edad: 20},
];

console.table(gente);
gente.forEach((persona,index) =>{
    console.groupCollapsed(`${persona.nombre}`);
    console.log(persona.edad);
    console.log("hola");
    console.groupEnd(`${persona.nombre}`);
});