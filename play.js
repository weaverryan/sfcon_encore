const Conference = require('./conference');

const sfCon = new Conference('SymfonyCon 2017');

function eventuallyPrint(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve('it is done!');
        }, 500);
    });
}

eventuallyPrint(sfCon.name)
    .then((data) => {
        console.log('callback!');
        console.log(data);

        return Math.random();
    })
    .then((data) => {
        console.log(data);
    });
