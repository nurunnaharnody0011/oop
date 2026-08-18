type Student = {
  name: string;
  roll: number;
  batch: string;
  marks: number;
  present: boolean;
};

const rafi: Student = {
  name: "Rafi",
  roll: 27,
  batch: "B14",
  marks: 78,
  present: true,
};

const sadia: Student = {
  name: "Sadia",
  roll: 31,
  batch: "B14",
  marks: 91,
  present: true,
};

const students: Student[] = [rafi, sadia];

function describe(s:Student): string {
  return `Name: ${s.name}, Roll: ${s.roll}, Marks: ${s.marks}`;
}

function topper(list: Student[]) {
  
  let heighstMark= list.reduce((previous, current) => (previous.marks >= current.marks ? previous : current));
  if (heighstMark) {
    return `${heighstMark.name}`;
  }

}

function classAverage(list: Student[]): number {
  const totalMarks = list.reduce((sum, student) => sum + student.marks, 0);
  return Math.round(totalMarks / list.length);
}

console.log(describe(rafi));
console.log(topper(students));
console.log(classAverage(students));