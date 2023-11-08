const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

const Pet = function (name) {
	let _name = name;

	this.age = 0;
	this.hunger = 0;
	this.fitness = 10;
	this.children = [];
	this.babies = [];

	this.setName = function (newName) {
		_name = newName;
	};
	this.getName = function () {
		return _name;
	};
};

Pet.prototype = {
	get isAlive() {
		return this.age < 30 && this.hunger < 10 && this.fitness > 0;
	},
};

Pet.prototype.growUp = function () {
	if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
	this.age += 1;
	this.hunger += 5;
	this.fitness += 3;
};

Pet.prototype.walk = function () {
	if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
	this.fitness += 4;
	if (this.fitness > MAX_FITNESS) this.fitness = MAX_FITNESS;
};

Pet.prototype.feed = function () {
	if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
	this.hunger -= 3;
	if (this.hunger < MIN_HUNGER) this.hunger = MIN_HUNGER;
};

Pet.prototype.checkUp = function () {
	if (!this.isAlive) return 'Your pet is no longer alive :(';
	if (this.fitness <= 3 && this.hunger >= 5)
		return 'I need walking and feeding';
	if (this.fitness <= 3) return 'I need a walk';
	if (this.hunger >= 5) return 'I am hungry';
	return 'I feel great!';
};

Pet.prototype.adoptChild = function (childPet) {
	this.children.push(childPet);
};

Pet.prototype.haveBaby = function (babyName) {
	this.babies.push(new Pet(babyName));
};

module.exports = Pet;
