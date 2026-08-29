"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function abcd(a, b, c) {
}
abcd('halua', 'puri', 5);
function log(val) {
    console.log(val);
}
log(12);
function abc(obj) {
    // obj.key.
}
abc({ name: 'foo', age: 24, key: 'askdjfkla' });
class BottleMaker {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker('hey');
let b2 = new BottleMaker(12);
console.log(b1, b2);
//# sourceMappingURL=app.js.map