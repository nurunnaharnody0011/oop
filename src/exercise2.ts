type Rickshaw = {
    plate: string;
    driver: string;
    rent: number;
}
const r101: Rickshaw = {
    plate: "R-101",
    driver: "Kamal",
    rent: 180,
}
const r102: Rickshaw = {
    plate: "R-102",
    driver: "Jashim",
    rent: 180,
}
  function describe(r: Rickshaw) {
    return (`${r.plate} (${r.driver})`);
  }
  function weeklyRent(r: Rickshaw): number {
    return r.rent * 7;
  }

  function transfer (r: Rickshaw, newDriver: string): void {
    r.driver = newDriver;
  }

  function cheaper(a: Rickshaw, b: Rickshaw): string{
     return  a.rent <= b.rent ? a.plate : b.plate;
    
  }

//   console.log(describe(r101));
//   console.log(weeklyRent(r102));
//   transfer(r101, "Rafi");
//   console.log(describe(r101));
//   console.log(cheaper(r101, r102));


class student{
    name: string;
    roll: number;
    bloodGroup: string;
    batch: string;
    active: true;

    constructor(name: string, roll: number, bloodGroup: string, batch: string = "B14", active: true){
        this.name = name;
        this.roll = roll;
        this.bloodGroup = bloodGroup;
        this.batch = batch;
        this.active = active;
    }
}
