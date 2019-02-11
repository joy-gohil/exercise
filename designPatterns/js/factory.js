class BallFactory {
  constructor() {
    this.createBall = function (type){
      let ball;
      if (type === 'football' || type === 'soccer') {
        ball = new Football();
      }
      else if (type ===  'basketball') {
          ball = new Basketball();
      }
      ball.roll = function (){
          return `The ${this._type} is rolling.`;
      };
      return ball;
    };
  };
}
class Football {
  constructor() {
    this._type = 'Football';
    this.kick = function() {
      return `You kicked football.`;
    };
  }
}
class Basketball {
  constructor() {
    this._type = 'Basketball';
    this.bounce = function() {
        return `You bouned the basketball.  `;
    };
  };
}

const factory = new BallFactory();
const myfootball = factory.createBall("football");
const mybasketball = factory.createBall("basketball");

console.log(myfootball.roll());
console.log(mybasketball.roll());
console.log(myfootball.kick());
console.log(mybasketball.bounce());

console.log();
