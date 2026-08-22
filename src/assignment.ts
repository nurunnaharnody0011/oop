function getBatteryStatus(percentage: number): string {
    if (percentage <= 20) {
        return "Low";
    } else if (percentage <= 50) {
        return "Medium";
    } else if (percentage <= 90) {
        return "High";
    } else {
        return "Full";
    }
}

//console.log(getBatteryStatus(100));

type Booking = {
    name: string;
    guests: number;
    time: string;
};
const formatBookingConfirmation = (booking: Booking): string => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};

 // Output: "John's table for 4 guests is confirmed at 7:00 PM."


const calculateWeeklyTotal = (expenses:number[]):number => {
    let totalCount = expenses.reduce((total, expense) => total + expense, 0);
    return totalCount;
};
// console.log(calculateWeeklyTotal([100, 200, 150, 300])); 
// // Output: 750
// console.log(calculateWeeklyTotal([]));


type Light = "red" | "yellow" | "green";
const getTrafficAction = (light: Light): string => {
    if (light === "red") {
        return "Stop";
    } else if (light === "yellow") {
        return "Slow Down";
    } else {
        return "Go";
    }
};

interface Total{
    total: number;
    average: number;
}
const getQuizSummary = (scores:number[]): Total => {
    const totalNumber = scores.reduce((sum,score) => sum + score, 0);
    const averageNumber = totalNumber / (scores.length || 1);
    return {
        total: totalNumber,
        average: averageNumber
    };
};

console.log(getQuizSummary([80, 90, 70, 85]));
console.log(getQuizSummary([])); // Output: { total: 0, average: 0 }