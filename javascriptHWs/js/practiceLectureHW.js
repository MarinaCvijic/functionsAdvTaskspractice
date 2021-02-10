//Lecture tasks



//Task 5 

var someData = {
	name: "Peter",
	lastName:"Dinklage",
	status:"married"
};

someData.methodOne = function(){

		if(this.name){
			
			this.methodTwo = function (){
				delete this.name;
				console.log(this);
				this.methodThree = function (){
				this.name = "Mike";};
				this.methodThree()
				

};
			this.methodTwo()
}

};
	
		
	someData.methodOne()
	console.log(someData);

// ne razumem ovaj bonus deo bas najbolje, pitala sam druge, ali ne znam ko je to uradio onako kako bi trebalo, 
// ako moze pomoc...da stavimo u objekat jos jedan da se tu "cuva" ovo ime...ili neki metod ili kako?
	



// Practice Homework
//Task 1

var arr = [[1,2,3],[4,5,6],[7,8,9]];

for (var i = 0; i<arr.length; i++){

	for(var j = 0; j < arr.length; j++){

		console.log ("At position " + i + ", subposition " + j + ", value is " + arr[i][j])

	}
}

//Task 2

		Object.prototype.methodGeneral = function () {
			console.log(this.name, this.age);

				}
		

	var person = [{name:"Helen", age:50},{name:"Simon",age:15},{name:"Kim",age:38},{name:"Tom",age:27}];
	
	for (var i=0;i<person.length;i++)
		{person[i].methodGeneral()}

	

	
	
	