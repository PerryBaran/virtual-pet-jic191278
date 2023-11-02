const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

const Pet = function (name) {
	this.name = name;
	this.age = 0;
	this.hunger = 0;
	this.fitness = 10;
};

Pet.prototype.growUp = function () {
	this.age += 1;
	this.hunger += 5;
	this.fitness += 3;
};

Pet.prototype.walk = function () {
	this.fitness += 4;
	if (this.fitness > MAX_FITNESS) this.fitness = MAX_FITNESS;
};

Pet.prototype.feed = function () {
	this.hunger -= 3;
	if (this.hunger < MIN_HUNGER) this.hunger = MIN_HUNGER;
};

Pet.prototype.checkUp = function () {
	if (this.fitness <= 3 && this.hunger >= 5)
		return 'I need walking and feeding';
	if (this.fitness <= 3) return 'I need a walk';
	if (this.hunger >= 5) return 'I am hungry';
	return 'I feel great!';
};

module.exports = Pet;
