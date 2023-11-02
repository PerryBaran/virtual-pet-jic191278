const Pet = require('../src/pet');

describe('Constuctor', () => {
	test('check new instance returns object', () => {
		expect(new Pet()).toBeInstanceOf(Object);
	});
});

describe('Naming Pets', () => {
	test('check name of instance returns Fido', () => {
		expect(new Pet('Fido').name).toBe('Fido');
	});
});

describe('Getting Older', () => {
	const pet = new Pet('Fido');
	test('check age of instance increases by 1', () => {
		pet.growUp();
		expect(pet.age).toBe(1);
	});
	test('check age of instance increases to 2', () => {
		pet.growUp();
		expect(pet.age).toBe(2);
	});
});

describe('Getting older and unhealthier', () => {
	const pet = new Pet('Fido');
	test('check when growUp() hunger increases by 5', () => {
		pet.growUp();
		expect(pet.hunger).toBe(5);
	});
	test('check when growUp() fitness increase by 3', () => {
		expect(pet.fitness).toBe(13);
	});
});

describe('Keeping fit', () => {
	const pet = new Pet('Fido');
	test('check when walk() fitness increases by 4, with max 10', () => {
		pet.walk();
		expect(pet.fitness).toBe(10);
	});
});

describe('Keeping fed', () => {
	const pet = new Pet('Fido');
	test('check when feed() hunger decreases by 3, with min 0', () => {
		pet.feed();
		expect(pet.hunger).toBe(0);
		pet.feed();
		expect(pet.hunger).toBe(0);
	});
});

describe('Check up', () => {
	const pet = new Pet('Fido');
	test('check new instance is feeling great', () => {
		// on initialisation fitess is 10, and hunger is 0
		expect(pet.checkUp()).toBe('I feel great!');
	});
	test('check needs walk', () => {
		pet.fitness = 3;
		expect(pet.checkUp()).toBe('I need a walk');
	});
	test('check needs feeding', () => {
		pet.fitness = 10;
		pet.hunger = 5;
		expect(pet.checkUp()).toBe('I am hungry');
	});
	test('check needs both walking and feeding', () => {
		pet.fitness = 2;
		pet.hunger = 6;
		expect(pet.checkUp()).toBe('I need walking and feeding');
	});
});
