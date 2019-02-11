function Hero(name, specialAbility){
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetails = function() {
    return 'name: '+ this.name + ', Special Ability: '+ this.specialAbility;
  }
}

class HeroCreational {
  constructor(name, specialAbility){
    this.name = name;
    this.specialAbility = specialAbility;
  };
  getDetails(){
    return 'name: '+ this.name + ', Special Ability: '+ this.specialAbility;
  }
}
console.log(new Hero("IronMan","Armored Suite").getDetails());
console.log(new HeroCreational("IronMan","Armored Suite").getDetails());
