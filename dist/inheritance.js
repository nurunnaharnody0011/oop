"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 120) {
            throw new Error("Age must be between 0 and 120.");
        }
        this._age = value;
    }
}
class Students extends User {
    _rollNumber;
    constructor(name, age, email, rollNumber) {
        super(name, age, email);
        this._rollNumber = rollNumber;
    }
}
const user = new User("Alice", 25, "alice@example");
console.log(user); // Output: User { _name: 'Alice', _age: 25,
//# sourceMappingURL=inheritance.js.map