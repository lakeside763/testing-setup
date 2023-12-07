const createCounter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    getCount: () => {
      return count;
    }
  }
}

const fareCalculator = (baseFare, costPerMile) => {
  return (distance, promotionDiscount) => {
    // Calculate the fare based on distance and per-mile cost
    let fare = baseFare + costPerMile * distance;

    if (promotionDiscount) {
      fare -= fare * promotionDiscount;
    }

    return fare;
  }
}

module.exports = {
  createCounter,
  fareCalculator,
}