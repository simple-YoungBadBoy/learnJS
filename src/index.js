class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    alert(`${this.name} study`);
  }
}

let xiaohong = new Student("xiaohong", 12, "A1");

xiaohong.eat();
alert(xiaohong.number);
xiaohong.study();

let xiaohua = new Student("xiaohua", 13, "A2");
xiaohua.speak();
xiaohua.study();
