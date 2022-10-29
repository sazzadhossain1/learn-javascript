class Computer {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
  }

  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`
    );
  }

  get computerName() {
    return this.name;
  }

  get computerModel() {
    return this.model;
  }

  set computerName(name) {
    this.name = name;
  }

  set computerModel(model) {
    this.model = model;
  }
}

const dell = new Computer("Dell", "007");
console.log(dell);
dell.aboutComputer();

dell.computerName = "HP";
console.log(dell.computerName);
console.log(dell.computerModel);
console.log(dell);

dell.computerModel = "1o1";
console.log(dell);
