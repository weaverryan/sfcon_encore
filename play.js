let aGreatNumber = 10;

if (true) {
    let aGreatNumber = 42;
}

setTimeout(() => {
    console.log(aGreatNumber);
}, 1000);

console.log('waiting...');
