class Person {
  name;
  age;
  protected weight; //受保护的属性,只有自己或者子类可以访问
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.weight = 120;
  }
  eat() {
    alert(`${this.name} eat sometings.`);
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`);
  }
}

// 子类
class Student extends Person {
  number;
  private grilfriend;
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
    this.grilfriend = "xiaoxi";
  }
  study() {
    alert(`${this.name} study`);
  }
  getWeight() {
    alert(`weight ${this.weight} girlfriend is ${this.grilfriend}`);
  }
}

let xiaoming = new Student("xiaoming", 10, "A1");
xiaoming.getWeight();

