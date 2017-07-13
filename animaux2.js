//Avec la méthode prototype

function animal (type, name, sound) {
	this.name = name;
	this.sound = sound;
}

animal.prototype.description = function (){
	console.log (this.name + " goes " + this.sound);

}

var dog = new animal ("Dog", "Medor", "Waf");
var cat = new animal ("Cat", "Mistigri", "Meow");
var bird = new animal ("Bird", "Titi", "Tweet");

dog.description();
cat.description();
bird.description();