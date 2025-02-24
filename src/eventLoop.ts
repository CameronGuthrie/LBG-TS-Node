console.log(`Start`); // 1

setTimeout(() => {
    console.log(`inside setTimeout`); // 4
}, 0);

Promise.resolve().then(() => {
    console.log(`inside Promise`); // 3
});

console.log(`End`); // 2