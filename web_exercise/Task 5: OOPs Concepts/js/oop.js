let questions = [];
let users = [];
class QuizBank {
  constructor(){}
  addQuestion(topic, question, options, answer, hint, description){
    if (topic && question && options && answer) {
      let tempObj = {};
      tempObj.topic = topic;
      tempObj.question = question;
      tempObj.options = options;
      tempObj.answer = answer;
      tempObj.hint = hint;
      tempObj.description = description;
      console.log(tempObj);
      questions.push(tempObj);
    }
  }
  getRandomQuestions(size){

  }
}
class Users {
  constructor(name, interest, password) {
    if(name && password){
      let tempObj = {};
      tempObj.name = name;
      tempObj.password = password;
      tempObj.interest = interest;
      tempObj.score = 0;
      tempObj.quizTaken = 0;
      users.push(tempObj);
    }
  }
  getUserdetails(name, password){
    try {
      let verify = verifyUserDetails(name, password);
    } catch (e) {
      return new Error("Couldn't verify user's details, Plase try agian!");
    } finally {
      return verify;
    }
  }
  verifyUserDetails(name, password){
    for(obj in users){
      if(obj.name == name && obj.password == password){
        return obj;
      }else {
        return new Error("Please enter correct details");
      }
    }
  }
}
class CurrentUser extends Users{
  constructor() {
    super();
  }
  login(name, password){
    try {
      let user = super.getUserdetails(name, password);
    } catch (e) {
      return e;
    } finally {
      if(typeof user == "Object"){
        this.userDetails = user;
        console.log(user);
      }
    }
  }
  get user(){
    return userDetails;
  }
  logout(){
    this.user = null;
  }
}
let quiz = new QuizBank();
quiz.addQuestion("AI","Full Form of AI is ",["Artifical Inetelligence","Augmented Inetelligence","Artificial Inetelligence","Dont Know"],2,"No hint for this question","");
let user = new Users("joy","CS","joy123");
let logonUser = new CurrentUser();
logonUser.login("joy","joy123");
console.log(questions);
console.log(users);