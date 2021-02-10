
// Task 1

function Students(name, lastName, age, grade) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.grade = grade;
}

var studentOne = new Students("Jane", "Doe", 20, 8);
var studentTwo = new Students("John", "Doe", 22, 8);

console.log(studentOne,studentTwo);

// Task 2
//ne podnosim fudbal, nisam sigurna ni da li igraju u zvezdi, ali ajde kao zbog zadatka, 
//kao volim zvezdu, i ovi igraci su mi jedni od retkih iz "mladje" generacije koji imaju smisla za igru,
//lupila sam i broj golova i zute kartone, sledeci put cu kao i ranije ufc ili mozda umetnicko klizanje or ski jumping :)

function RedStar(name, age, goals, yellowCards) {
	this.name = name;
	this.age = age;
	this.goals = goals;
	this.yellowCards = yellowCards;
}

var playerOne = new RedStar("Marko Marin", 31, 34, 5);
var playerTwo = new RedStar("Aleksandar Katai", 30, 39, 4);
var playerThree = new RedStar("Sergej Milinkovic-Savic", 25, 43, 4);

console.log(playerOne,playerTwo,playerThree);

// Task 3

function Players(name, age, goals, yellowCards) {
	this.name = name;
	this.age = age;
	this.goals = goals;
	this.yellowCards = yellowCards;
}

var players = [["Marko Marin", 31, 34, 5],["Aleksandar Katai", 30, 39, 4],["Sergej Milinkovic-Savic", 25, 43, 4]];
var newTeam = [];

for (var i = 0; i < players.length; i++){
	newTeam[newTeam.length] = new Players(players[i][0],players[i][1],players[i][2],players[i][3]);
}
console.log(newTeam);

// Task 4

function Numbers(firstNo,secondNo,calculationFn){

	this.firstNumber = firstNo;
	this.secondNumber = secondNo;
	this.calculationFunction = calculationFn;
}
  
var firstInst = new Numbers(5, 3, function(){return this.firstNumber * this.secondNumber;});
var secondInst = new Numbers(8, 2, function(){return this.firstNumber / this.secondNumber;});
var thirdInst = new Numbers(35, 34, function(){return this.firstNumber + this.secondNumber;});
var fourthInst = new Numbers(100, 22, function(){return this.firstNumber - this.secondNumber;});


console.log(firstInst.calculationFunction());
console.log(secondInst.calculationFunction()); 
console.log(thirdInst.calculationFunction());
console.log(fourthInst.calculationFunction());
	
