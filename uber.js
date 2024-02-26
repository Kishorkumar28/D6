class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, timeInMinutes, surgeMultiplier = 1) {
        const totalCost = this.baseFare +
            (timeInMinutes * this.costPerMinute) +
            (distanceInMiles * this.costPerMile);
        
        const finalCost = totalCost * surgeMultiplier;

        return finalCost.toFixed(2); // Round to 2 decimal places
    }
}

const priceCalculator = new UberPriceCalculator(5, 0.2, 1.5); // Base fare: $5, Cost per minute: $0.2, Cost per mile: $1.5
const distance = 10; // Distance in miles
const time = 15; // Time in minutes
const surgeMultiplier = 1.2; // Surge multiplier ( default is 1)
const totalPrice = priceCalculator.calculatePrice(distance, time, surgeMultiplier);
console.log(`Total price: $${totalPrice}`);