class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo():string {
    const info =`Name: ${this.name}\nAge: ${this.age}`;
    return info;
 }

}

const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
console.log(student1); // Output: Alice
console.log(student2); // Output: Bob
console.log(student1.getInfo()); // Output: Name: Alice, Age: 20