class BkashAccount {
    public phone:string;
    private balance:number;
    private pin:number;
    public history:any[];

    constructor(phone:string, balance:number, pin:number) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
        this.history = [];
    }

    deposit(amount:number):void {
        this.balance += amount;
        this.history.push(`Deposited: ${amount}`);
    }

    withdraw(amount:number, pin:number):void {
        if (pin === this.pin) {
            if (amount <= this.balance) {
                this.balance -= amount;
                this.history.push(`Withdrew: ${amount}`);
            } else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Incorrect PIN.");
        }
}
}