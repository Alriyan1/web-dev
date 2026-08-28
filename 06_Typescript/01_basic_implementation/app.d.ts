declare var a: number;
declare var b: number;
declare let arr: number[];
declare let arr2: [number, string];
declare enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super-admin"
}
interface User {
    name: string;
    email: string;
    password: string;
    gender?: string;
}
declare function getData(obj: User): void;
interface Admin extends User {
    admin: boolean;
}
declare function newVersion(obj: Admin): void;
type sankhy = number | string;
declare let z: sankhy;
type U = {
    name: string;
    email: string;
};
type A = U & {
    getDetails(user: string): void;
};
declare function abcd(a: A): void;
declare class Device {
    name: string;
    price: number;
    category: string;
}
declare let d1: Device;
declare let d2: Device;
declare class BottleMaker {
    brand: string;
    price: number;
    color: string;
    material: string;
    constructor(brand: string, price: number, color: string, material: string);
}
declare let b1: BottleMaker;
declare let b2: BottleMaker;
declare class MakeBottle {
    name: string;
    private halua;
    protected readonly ajaa: string;
    constructor(name: string);
}
declare class MetalBottle extends MakeBottle {
    constructor(name: string);
    getValue(): void;
}
declare let bb1: MetalBottle;
declare class User2 {
    _name: string;
    _age: number;
    constructor(_name: string, _age: number);
    get name(): string;
    set name(value: string);
}
declare let u1: User2;
declare class Allii {
    static version: number;
    static getRandomNumber(): number;
}
//# sourceMappingURL=app.d.ts.map