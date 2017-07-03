function Person(fullName,favColor){
	this.name = fullName;
	this.favorColor = favColor;

	this.greet = function(){
		console.log("Hello " +this.name+ " ahole, do you see " +this.favorColor +"?");
	}
}