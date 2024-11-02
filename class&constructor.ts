class Device {
	name = "samsung";
	price = 200000;
	category = "Smart Phone";
}

let d1 = new Device();
let d2 = new Device();

class Bottle {
	radius = 120;
	price = 100;
	color = "black";
}

let b1 = new Bottle();

class BottleMaker {
	constructor(public name: string, public price: number) {}
}

const c1 = new BottleMaker("SHANTO", 1500);

class HumanMaker {
	age = 0;
	constructor(name: string) {}
}

new HumanMaker("shanto");

class CarMaker {
	constructor(
		public name: string,
		public price: number,
		public color: string,
		public material: string
	) {}
}

const car = new CarMaker("Shanto", 300000, "black", "Aluminum");
