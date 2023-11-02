// const initAge = 0;
// const initHunger = 0;
// const maxFitness = 10;
// const ageInc = 1;
// const hungerInc = 5;
// const fitnessInc = 3;

const petInitValues = {
	age: 0,
	hunger: 0,
	maxFitness: 10,
	ageInc: 1,
	hungerInc: 5,
	fitnessInc: 3,
	hungerDec: 3,
};

function Pet(name) {
	this.name = name;
	this.age = petInitValues.age;
	this.hunger = petInitValues.hunger;
	this.fitness = petInitValues.maxFitness;
}
Pet.prototype.growUp = function () {
	this.age += petInitValues.ageInc;
	this.hunger += petInitValues.hungerInc;
	this.fitness += petInitValues.fitnessInc;
	if (this.fitness > petInitValues.maxFitness)
		this.fitness = petInitValues.maxFitness;
};
Pet.prototype.walk = function () {
	this.fitness += 4;
	if (this.fitness > petInitValues.maxFitness)
		this.fitness = petInitValues.maxFitness;
};

Pet.prototype.feed = function () {
	this.hunger -= petInitValues.hungerDec;
	if (this.hunger < 0) this.hunger = 0;
};

Pet.prototype.checkUp = function () {
	if (this.fitness <= 3 && this.hunger >= 5)
		return 'I am hungry AND need a walk';
	if (this.fitness <= 3) return 'I need a walk';
	if (this.hunger >= 5) return 'I am hungry';
	return 'I feel great';
};

module.exports = Pet;
