"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rafi = {
    name: "Rafi",
    roll: 27,
    batch: "B14",
    marks: 78,
    present: true,
};
const sadia = {
    name: "Sadia",
    roll: 31,
    batch: "B14",
    marks: 91,
    present: true,
};
const students = [rafi, sadia];
function describe(s) {
    return `Name: ${s.name}, Roll: ${s.roll}, Marks: ${s.marks}`;
}
function topper(list) {
    let heighstMark = list.reduce((previous, current) => (previous.marks >= current.marks ? previous : current));
    if (heighstMark) {
        return `${heighstMark.name}`;
    }
}
function classAverage(list) {
    const totalMarks = list.reduce((sum, student) => sum + student.marks, 0);
    return Math.round(totalMarks / list.length);
}
console.log(describe(rafi));
console.log(topper(students));
console.log(classAverage(students));
//# sourceMappingURL=exercise.js.map