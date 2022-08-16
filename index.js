function distanceFromHqInBlocks(dInblocks) {
  if (dInblocks > 42) {
    return dInblocks - 42;
  
  } else {
    return 42 - dInblocks;
  }
}

function distanceFromHqInFeet(dInblocks){
  if (dInblocks > 42) {
    let dInfeet = dInblocks - 42;
    return dInfeet * 264
  
  } else if (dInblocks < 42) {
    let dBelow42 = 42 - dInblocks;
    return dBelow42 * 264;
  }
}
function distanceTravelledInFeet(a, b) {
  if (a > b) {
    let dInfeet = a - b; 
    return dInfeet * 264;
  }
  else if (a < b) {
    let dBelow42 = b - a;
    return dBelow42 * 264;
  }
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance<= 400){
    return 0;
  }
  if (distance>=400 && distance<=2000){
    return (distance-400)* 0.02;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25; 
  }
  else (distance > 2500);
    return 'cannot travel that far'
  }
