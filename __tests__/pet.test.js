const Pet = require('../src/pet');

describe('constructor', () => {
	it('returns an object', () => {
		expect(new Pet('Fido')).toBeInstanceOf(Object);
	});
});

describe('name property', () => {
	it('returns the objects name property', () => {
		const pet = new Pet('Fido');
		expect(pet.name).toBe('Fido');
	});
});

describe('grow up', () => {
	it('increases age by 1', () => {
		const pet = new Pet('Fido');
		pet.growUp();
		expect(pet.age).toBe(1);
		expect(pet.hunger).toBe(5);
		expect(pet.fitness).toBe(10);
	});
});

describe('walk', () => {
	it('increase the pets fitness by 4 but not over 10', () => {
		const pet = new Pet('Fido');
		pet.fitness = 0;
		pet.walk();
		expect(pet.fitness).toBe(4);
	});
});

describe('feed', () => {
	const pet = new Pet('Fido');
	pet.growUp();
	pet.feed();
	it('feed to reduce hunger by 3', () => {
		expect(pet.hunger).toBe(2);
	});
});

describe('check up', () => {
	const pet = new Pet('Fido');
	it('check fitness and hunger', () => {
		expect(pet.checkUp()).toBe('I feel great');
	});
	// pet.fitness = 3;
	// it('check fitness', () => {
	// 	expect(pet.checkUp()).toBe('I need a walk');
	// });
});
