class Database {
  constructor(data) {
    if (Database.exist) {
      return Database.instance;
    }
    this.data = data;
    Database.instance = this;
    Database.exist = true;
    return this;
  }
  getData(){
    return this.data;
  }
  setData(data){
    this.data = data;
  }
}

console.log(new Database("MongoDB").getData());
console.log(new Database("HadoopDB").getData());  
