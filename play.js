const Conference = require('./conference');

const sfCon = new Conference('SymfonyCon 2017');

setTimeout(() => {
    console.log(sfCon.name);
}, 500);
