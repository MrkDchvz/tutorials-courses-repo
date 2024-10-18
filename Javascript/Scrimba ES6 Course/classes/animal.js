export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeSound(sound) {
    console.log(sound);
  }
}

export class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }
  makeSound(sound) {
    super.makeSound(sound);
  }
}
