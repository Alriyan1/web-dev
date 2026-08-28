"use strict";
var a = 12;
var b = 13;
let arr = [1, 2, 3, 4];
let arr2 = [12, 'alriyan'];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super-admin";
})(UserRoles || (UserRoles = {}));
function getData(obj) {
}
function newVersion(obj) {
    obj.admin = true;
}
let z;
function abcd(a) {
    a.getDetails;
}
class Device {
    name = 'lg';
    price = 12000;
    category = 'digital';
}
let d1 = new Device();
let d2 = new Device();
class BottleMaker {
    brand;
    price;
    color;
    material;
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let b1 = new BottleMaker('milton', 1200, 'pink', 'metal');
let b2 = new BottleMaker('cello', 1000, 'red', 'plastic');
class MakeBottle {
    name;
    halua = 'halua';
    ajaa = 'nooo';
    constructor(name) {
        this.name = name;
    }
}
class MetalBottle extends MakeBottle {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.halua, this.ajaa); // halua can only accessed on it own class
        this.ajaa = 'nahi'; // can not change as readonly  
        console.log(this.ajaa);
    }
}
let bb1 = new MetalBottle('chilton');
bb1.getValue();
class User2 {
    _name;
    _age;
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new User2('alriyan', 23);
//# sourceMappingURL=app.js.map