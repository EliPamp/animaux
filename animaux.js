//Selon ma méthode

function animal(type, name, sound) {
	this.name = name;
	this.sound = sound;

	console.log (this.name + " goes " + this.sound);
};


var dog = new animal("Dog", "Medor", "Waf");
var cat = new animal ("Cat", "Mistigri", "Meow")
var bird = new animal ("Bird", "Titi", "Tweet")





