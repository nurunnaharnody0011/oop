interface Product {
name: string;
price: number;
}

function calculateCartTotal(products:Product[]): number{
   let result = products.reduce((sum, product)=> sum+product.price, 0);
   return result;
}
// console.log(calculateCartTotal([
//     {name: "Product A", price: 1500},
//      {name: "Product B", price: 800}, 
//      {name: "Product C", price: 390}])); // Output: 60


interface Student {
    name: string;
    marks: number[];
}
interface Result  {
  name: string;
  average: number;
  result: string;
}
const getStudentResult = (students: Student): Result => {
     const marks:number[] = students.marks;
     const totalMarks:number = marks.reduce((sum, mark) => sum + mark, 0);
     const average:number = totalMarks / marks.length;
     const result:string = average >= 40 ? "Pass" : "Fail";
     return {
        name: students.name,
         average, 
         result};


}

console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
})); // Output: { name: 'Rafi', average: 82.5, result: 'Pass' }
