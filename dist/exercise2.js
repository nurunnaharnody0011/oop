"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const r101 = {
    plate: "R-101",
    driver: "Kamal",
    rent: 180,
};
const r102 = {
    plate: "R-102",
    driver: "Jashim",
    rent: 180,
};
function describe(r) {
    return (`${r.plate} (${r.driver})`);
}
function weeklyRent(r) {
    return r.rent * 7;
}
function transfer(r, newDriver) {
    r.driver = newDriver;
}
function cheaper(a, b) {
    return a.rent <= b.rent ? a.plate : b.plate;
}
//   console.log(describe(r101));
//   console.log(weeklyRent(r102));
//   transfer(r101, "Rafi");
//   console.log(describe(r101));
//   console.log(cheaper(r101, r102));
class student {
    name;
    roll;
    bloodGroup;
    batch;
    active;
    constructor(name, roll, bloodGroup, batch = "B14", active) {
        this.name = name;
        this.roll = roll;
        this.bloodGroup = bloodGroup;
        this.batch = batch;
        this.active = active;
    }
}
//# sourceMappingURL=exercise2.js.map