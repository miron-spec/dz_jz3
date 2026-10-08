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

//1
let shoppingList = [
    { name: "Молоко", qty: 1, bought: false },
    { name: "Хліб", qty: 2, bought: true },
    { name: "Сир", qty: 1, bought: false }
  ];
  
  function showShoppingList() {
    console.log("--- Не куплене ---");
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i].bought === false) {
        console.log(shoppingList[i].name + " - " + shoppingList[i].qty + " шт.");
      }
    }
    
    console.log("--- Куплене ---");
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i].bought === true) {
        console.log(shoppingList[i].name + " - " + shoppingList[i].qty + " шт.");
      }
    }
  }
  
  function addItem(newName, newQty) {
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i].name === newName) {
        shoppingList[i].qty += newQty;
        return; 
      }
    }
    shoppingList.push({ name: newName, qty: newQty, bought: false });
  }
  
  function buyItem(itemName) {
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i].name === itemName) {
        shoppingList[i].bought = true;
      }
    }
  }
  
  //2
  let receipt = [
    { name: "Яблука", qty: 3, price: 15 },
    { name: "Сік", qty: 1, price: 40 }
  ];
  
  function showReceipt() {
    for (let i = 0; i < receipt.length; i++) {
      let item = receipt[i];
      console.log(item.name + ": " + item.qty + " шт. по " + item.price + " грн");
    }
  }
  
  function getTotalSum() {
    let sum = 0;
    for (let i = 0; i < receipt.length; i++) {
      sum += receipt[i].qty * receipt[i].price;
    }
    return sum;
  }
  
  function getMostExpensiveItem() {
    let maxItem = receipt[0];
    let maxPrice = receipt[0].qty * receipt[0].price;
  
    for (let i = 1; i < receipt.length; i++) {
      let currentPrice = receipt[i].qty * receipt[i].price;
      if (currentPrice > maxPrice) {
        maxPrice = currentPrice;
        maxItem = receipt[i];
      }
    }
    return maxItem;
  }
  
  //3
  let cssStyles = [
    { name: "color", value: "red" },
    { name: "font-size", value: "24px" },
    { name: "text-align", value: "center" }
  ];
  
  function writeStyledText(stylesArray, text) {
    let styleString = "";
    for (let i = 0; i < stylesArray.length; i++) {
      styleString += stylesArray[i].name + ": " + stylesArray[i].value + "; ";
    }
    document.write('<p style="' + styleString + '">' + text + '</p>');
  }
  
  //4
  let rooms = [
    { name: "101", seats: 15, faculty: "IT" },
    { name: "102", seats: 12, faculty: "Math" },
    { name: "103", seats: 20, faculty: "IT" }
  ];
  
  function showAllRooms() {
    for (let i = 0; i < rooms.length; i++) {
      console.log("Аудиторія " + rooms[i].name + " (" + rooms[i].seats + " місць) - " + rooms[i].faculty);
    }
  }
  
  function showRoomsForFaculty(facultyName) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].faculty === facultyName) {
        console.log(rooms[i].name);
      }
    }
  }
  
  function showRoomsForGroup(group) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].faculty === group.faculty && rooms[i].seats >= group.students) {
        console.log("Підходить аудиторія: " + rooms[i].name);
      }
    }
  }
