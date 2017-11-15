const Conference = require('./conference');

const sfCon = new Conference('SymfonyCon 2017');

function eventuallyPrint(message) {
    setTimeout(() => {
        console.log(message);
    }, 500);
}

eventuallyPrint(sfCon.name);
