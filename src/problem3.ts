type User ={
    name: string;
    age: number;
    city: string;
}
function formatUserInfo(user: User):string{
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}
console.log(formatUserInfo({name: "Alice", age: 30, city: "New York"})); // Output: Alice is 30 years old and lives in New York.