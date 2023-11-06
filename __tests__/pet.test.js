const Pet = require('../src/pet');

describe('Constuctor', () => {
	test('check new instance returns object', () => {
		expect(new Pet()).toBeInstanceOf(Object);
	});
});

describe('Naming Pets', () => {
	const pet = new Pet('Fido');
	test('check name of instance returns Fido', () => {
		expect(pet.getName()).toBe('Fido');
	});
	test('check can change name', () => {
		pet.setName('Leonardo');
		expect(pet.getName()).toBe('Leonardo');
	});
});

describe('Getting Older', () => {
	const pet = new Pet('Fido');
	test('check age of instance increases by 1', () => {
		pet.growUp();
		expect(pet.age).toBe(1);
		expect(pet.hunger).toBe(5);
		expect(pet.fitness).toBe(13);
	});
	test('check age of instance increases to 2', () => {
		pet.growUp();
		expect(pet.age).toBe(2);
		expect(pet.hunger).toBe(10);
		expect(pet.fitness).toBe(16);
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

describe('Death ☠️', () => {
	const pet = new Pet('Fido');
	test('check alive when born', () => {
		expect(pet.isAlive).toBe(true);
	});
	test('check death at 30', () => {
		pet.age = 30;
		expect(pet.isAlive).toBe(false);
	});
	test('check death when hunger reaches 10', () => {
		pet.age = 0;
		pet.hunger = 10;
		expect(pet.isAlive).toBe(false);
	});
	test('check death with fitness reaches 0', () => {
		pet.age = 0;
		pet.hunger = 0;
		pet.fitness = 0;
		expect(pet.isAlive).toBe(false);
	});
});

describe('Guard Clauses', () => {
	const pet = new Pet('Fido');
	test('check checkUp() alive', () => {
		expect(pet.checkUp()).toBe('I feel great!');
	});
	test('check checkUp() dead', () => {
		pet.fitness = 0;
		expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
	});
	test('check functions throw error when dead', () => {
		expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
		expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
		expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
	});
});

describe('Making Babies', () => {
	const parentPet = new Pet('Big Daddy');
	const childPet = new Pet('Junior');
	const siblingPet = new Pet('Lil Sis');
	const grandChildPet = new Pet('Lil Junior');
	parentPet.adoptChild(childPet);
	parentPet.adoptChild(siblingPet);
	siblingPet.adoptChild(grandChildPet);
	test('check child is born', () => {
		expect(parentPet.children[0]).toBe(childPet);
		expect(parentPet.children[0].getName()).toBe('Junior');
		expect(parentPet.children[1].getName()).toBe('Lil Sis');
		expect(parentPet.children[1].children[0].getName()).toBe('Lil Junior');
		expect(siblingPet.children[0].getName()).toBe('Lil Junior');
	});
});
