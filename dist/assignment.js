"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    if (percentage <= 20) {
        return "Low";
    }
    else if (percentage <= 50) {
        return "Medium";
    }
    else if (percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
const formatBookingConfirmation = (booking) => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};
// Output: "John's table for 4 guests is confirmed at 7:00 PM."
const calculateWeeklyTotal = (expenses) => {
    let totalCount = expenses.reduce((total, expense) => total + expense, 0);
    return totalCount;
};
const getTrafficAction = (light) => {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    else {
        return "Go";
    }
};
const getQuizSummary = (scores) => {
    const totalNumber = scores.reduce((sum, score) => sum + score, 0);
    const averageNumber = totalNumber / scores.length;
    return {
        total: totalNumber,
        average: averageNumber
    };
};
console.log(getQuizSummary([80, 90, 70, 85]));
//# sourceMappingURL=assignment.js.map