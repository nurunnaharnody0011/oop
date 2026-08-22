function getTicketPrice(age: number): number{
    if(age<5){
        return 0;
    }
    else if(age>=5 && age<=12){
        return 100;
    }
    else if(age>=13 && age<=59){
        return 200;
    }
    return 120;
}

console.log(getTicketPrice(3)); // Output: 0
console.log(getTicketPrice(10)); // Output: 100
console.log(getTicketPrice(25)); // Output: 200
console.log(getTicketPrice(65)); // Output: 120