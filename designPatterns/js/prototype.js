const car = {
  noOfWheels: 4,
  start(){
    return "Started...";
  },
  stop(){
    return "...Stopped"
  },
};

const myCar = Object.create(car, { owner: { value: "Joy Gohil" } });
console.log(myCar);
console.log(myCar.start());
console.log(myCar.stop());
console.log(myCar.owner);
console.log(myCar.__proto__ == car);
