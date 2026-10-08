//1
let car = {
    maker: "Ford",
    model: "Mustang",
    year: 2021,
    speed: 100
  };
  
  function showCar(carObj) {
    console.log("Авто: " + carObj.maker + " " + carObj.model + ", Рік: " + carObj.year + ", Швидкість: " + carObj.speed + " км/год");
  }
  
  function calculateTime(carObj, distance) {
    let timeInDrive = distance / carObj.speed;
    let breaks = Math.floor(timeInDrive / 4);
    
    if (timeInDrive % 4 === 0 && timeInDrive > 0) {
      breaks = breaks - 1;
    }
    
    return timeInDrive + breaks;
  }
  
  //2
  function getGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  
  function simplifyFraction(fraction) {
    let gcd = getGCD(fraction.num, fraction.den);
    return {
      num: fraction.num / gcd,
      den: fraction.den / gcd
    };
  }
  
  function addFractions(f1, f2) {
    let result = {
      num: (f1.num * f2.den) + (f2.num * f1.den),
      den: f1.den * f2.den
    };
    return simplifyFraction(result);
  }
  
  function multiplyFractions(f1, f2) {
    let result = {
      num: f1.num * f2.num,
      den: f1.den * f2.den
    };
    return simplifyFraction(result);
  }
  
  //3
  let myTime = { hours: 20, minutes: 30, seconds: 45 };
  
  function showTime(t) {
    console.log(t.hours + ":" + t.minutes + ":" + t.seconds);
  }
  
  function normalizeTime(t) {
    while (t.seconds >= 60) {
      t.seconds -= 60;
      t.minutes += 1;
    }
    while (t.minutes >= 60) {
      t.minutes -= 60;
      t.hours += 1;
    }
    while (t.hours >= 24) {
      t.hours -= 24;
    }
  }
  
  function addSeconds(t, secs) {
    t.seconds += secs;
    normalizeTime(t);
  }