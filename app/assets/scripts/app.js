/*function person(name, favColor){
	console.log("Testing " +name+ " son of a bitch " +favColor);
}*/

/*var groupVars = {
	thisThat: "fucking",
	favColor: "red",
	greet: function(){
		console.log("Hello " +groupVars.thisThat+ " ahole, do you see " +groupVars.favColor +"?");
	}
}
groupVars.greet();*/
/*person(groupVars.thisThat, groupVars.favColor);*/
var Person = require('./modules/person');


var firstOne = new Person("Dipidy Do","garbanzo");
firstOne.greet();

var secondOne = new Person("Hola Numbnuts","krackle");
secondOne.greet();