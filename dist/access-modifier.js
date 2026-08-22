"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BkashAccount {
    phone;
    balance;
    pin;
    history;
    constructor(phone, balance, pin) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
        this.history = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited: ${amount}`);
    }
    withdraw(amount, pin) {
        if (pin === this.pin) {
            if (amount <= this.balance) {
                this.balance -= amount;
                this.history.push(`Withdrew: ${amount}`);
            }
            else {
                console.log("Insufficient balance.");
            }
        }
        else {
            console.log("Incorrect PIN.");
        }
    }
}
//# sourceMappingURL=access-modifier.js.map