// Define the AnimalKingdom class (Abstraction)
class AnimalKingdom {
	// Constructor to initialize properties
	constructor(name, groups, species) {
	  this.name = name;
	  this.groups = groups;
	  this.species = species;
	}
  
	// Encapsulation: Getter and Setter methods for private properties
	getName() {
	  return this.name;
	}

	getGroups() {
		return this.groups;
	}
  
	getSpecies() {
	  return this.species;
	}
  
	setName(newName) {
	  this.name = newName;
	}
  
	// Method to make the animal find food
	findFood() {
	  console.log("All animals go out to find food");
	}
}
  
// Inheritance: Mammals class extends AnimalKingdom class
class Mammals extends AnimalKingdom {
	// Constructor to initialize Mammals-specific properties
	constructor(name, hasHair) {
		// Call the parent class constructor using super()
		super(name, "Mammals");
	    this.hasHair = hasHair;
	}
  
	// Polymorphism: Override the findFood method for Mammals
	findFood() {
	  console.log("They hunt");
	}
  
	// Additional method specific to Mammals class
	lay() {
	  console.log(`${this.name} are mammals that can lay eggs.`);
	}
}
  
// Inheritance: Arthropods class extends Animal class
class Arthropods extends AnimalKingdom {
	// Constructor to initialize Arthropods-specific properties
	constructor(name, color) {
	  // Call the parent class constructor using super()
	  super(name, "Arthropods");
	  this.color = color;
	}
  
	// Polymorphism: Override the findFood method for Arthropods
	findFood() {
	  console.log("They capture and eat pray");
	}
  
	// Additional method specific to Arthropods class
	sleep() {
	  console.log(`${this.name} is sleeping.`);
	}
}
  
// Create instances of AnimalKingdom, Mammals, and Anthropods
const animalKingdom = new AnimalKingdom("Animal Kingdom", "NoAccess");
const mammals = new Mammals("Monotremes", "Brown");
const arthropods = new Arthropods("Scorpions", "Colorful");
  
// Accessing properties using getters
console.log(animalKingdom.getName()); 
console.log(mammals.getSpecies()); 
  
// Accessing and modifying properties using setters
arthropods.setName("Butterfly");
console.log(arthropods.getName());
  
// Method invocation
animalKingdom.findFood();
mammals.findFood(); 
arthropods.findFood(); 
  
// Polymorphism in action
const animals = [animalKingdom, mammals, arthropods];
for (const animalKingdom of animals) {
	animalKingdom.findFood();
}
  
// Calling class-specific methods
mammals.lay(); 
arthropods.sleep();
