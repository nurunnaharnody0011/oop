"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCartTotal(products) {
    let result = products.reduce((sum, product) => sum + product.price, 0);
    return result;
}
const getStudentResult = (students) => {
    const marks = students.marks;
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    const result = average >= 40 ? "Pass" : "Fail";
    return {
        name: students.name,
        average,
        result
    };
};
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
})); // Output: { name: 'Rafi', average: 82.5, result: 'Pass' }
//# sourceMappingURL=problem4.js.map