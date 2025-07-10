// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  let distance;
  if (someValue < 42) {
    distance = 42 - someValue;
  }
  else {
    distance = someValue - 42
  }
  return distance;
}

function distanceFromHqInFeet(someValue) {
  let feet = distanceFromHqInBlocks(someValue);

  return feet * 264;
}

function distanceTravelledInFeet(start, destination) {
  let distanceTravelled = (destination - start) * 264

  return Math.abs(distanceTravelled);

}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let price;
  let distanceTravelled = Math.abs((destination - start) * 264)
  if (distanceTravelled < 400) {
    price = 0
  } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    console.log(distanceTravelled);
    
    price = Math.abs(distanceTravelled - 400) * 0.02
  } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    price = 25
  } else {
    price = 'cannot travel that far' 
  }
  return price;
}