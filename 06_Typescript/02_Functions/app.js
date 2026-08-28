"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function abcde(name, age, cb) {
    cb('me khalnayak');
}
abcde('alriyan', 23, (arg) => {
    console.log(arg);
});
function abcdef(name, age, gender = 'unknown') {
    console.log(name, age, gender);
}
abcdef('alriyan', undefined, 'male');
abcdef('fardeen', 25);
abcdef('noor');
function sum(...args) {
    console.log(args);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
function abc(a, b) {
    if (typeof a === 'string' && b === undefined) {
        console.log('1 chla', a);
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return 123;
    }
    else {
        throw new Error('dono mese ek choose kr');
    }
}
abc('alriyan');
console.log(abc('fardeen', 23));
//# sourceMappingURL=app.js.map