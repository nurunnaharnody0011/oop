"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        const info = `Name: ${this.name}\nAge: ${this.age}`;
        return info;
    }
}
const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
console.log(student1); // Output: Alice
console.log(student2); // Output: Bob
console.log(student1.getInfo()); // Output: Name: Alice, Age: 20
//# sourceMappingURL=mathod.js.map