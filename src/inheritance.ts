class User {
   private _name: string;
    private _age: number;
    private _email:string;

    constructor(name: string, age: number,email:string) {
        this._name = name;
        this._age = age;
        this._email=email;
    }
   get age(){
        return this._age;
 }
    set age(value: number){
        if (value < 0 || value > 120) {
            throw new Error("Age must be between 0 and 120.");
        }
        this._age = value;
    }
}

class Students extends User {
    private _rollNumber: number;
    constructor(name: string, age: number, email: string, rollNumber: number) {
        super(name, age, email);
        this._rollNumber = rollNumber;
    }
}
const user = new User("Alice", 25,"alice@example");
console.log(user); // Output: User { _name: 'Alice', _age: 25,