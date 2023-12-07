const BASE_PRICE = 10;
const DEMAND_MULTIPLIER = 0.2
const TRAFFIC_MULTIPLIER = 0.1

let availableDrivers = 50;
let currentRideRequests = 60;
let heavyTraffic = true;

const calculateDynamicPrice = () => {
  let dynamicPrice = BASE_PRICE;

  const demandRatio = currentRideRequests / availableDrivers;
  if (demandRatio > 1) {
    dynamicPrice += BASE_PRICE * DEMAND_MULTIPLIER * demandRatio;
  }

  if (heavyTraffic) {
    dynamicPrice += BASE_PRICE * TRAFFIC_MULTIPLIER;
  }

  return dynamicPrice;
}

const riders = [
  {id: 'r1', x: 1, y: 2},
  {id: 'r2', x: 2, y: 3},
];

const drivers = [
  {id: 'd1', x: 1, y: 1},
  {id: 'd2', x: 2, y: 2},
];

const distance = (point1, point2) => {
  return Math.sqrt((point1.x - point2.x)**2 + (point1.y - point2.y)**2);
}

const matchRidersToDrivers = (riders, drivers) => {
  const matches = [];

  for (const rider of riders) {
    let minDistance = Infinity;
    let closestDriver = null;

    for (const driver of drivers) {
      const d = distance(rider, driver);
      if (d < minDistance) {
        minDistance = d;
        closestDriver = driver;
      }
    }
    matches.push({ riderId: rider.Id, driverId: closestDriver.id });
    drivers = drivers.filter(d => d.id !== closestDriver.id);
  }
  return matches;
}


module.exports = {
  calculateDynamicPrice,
  matchRidersToDrivers
}