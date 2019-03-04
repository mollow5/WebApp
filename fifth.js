let foo = new Object();
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);
console.log("1번끝 2번시작 ====================================================")

let fool = {
  name: 'foo',
  age: 30,
  gender: 'male',
  print: function() { console.log(`${this.name}:${this.age}:${this.gender}`);}
};

console.log(typeof fool);
console.log(fool);
console.log(fool.print());
console.log(fool.toString());
console.log("2번끝 3번시작 ====================================================")

//생성자 함수 Person 이름을 받으면 받은이름으로 초기화함
let Person = function(name){
  this.name=name;
}

foo = new Person('foo');
console.log(foo.name);

function Person2(name,age,gender,position){
  this.name=name;
  this.age=age;
  this.gender=gender;
}
console.log(typeof Person2); // function
let bar = new Person2 ('bar',33,'woman');
console.log(typeof bar);
console.dir(bar);

let baz = new Person2('baz',25,'woman');
console.log(typeof baz);
console.dir(baz);
console.log("3번끝 4번시작 ====================================================")

class Person3{
  constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
}

bar = new Person3('bar',33,'woman');
baz = new Person3('baz',25,'woman');
console.dir(bar);
console.dir(baz);
console.log("4번끝 5번시작 ====================================================")
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
        this._userGears = ['P','N','R',"D"];
        this._userGear = this._userGears[0];
    }
    get_userGear(){return this._userGear;}
    set_userGear(gear){
      if(this._userGears.indexOf(gear)<0){
        console.log(`Error : Invalid gear ${value}`);   }
      this._userGear = gear;
    }
    shift(gear){
      this.set_userGear(gear); // 해당 인스턴스의 쉬프트를 호출하기위해 this 를 사용하여야함
    //   if(this._userGears.indexOf(gear)<0) {
    //     console.log(`Error : Invalid gear ${gear}`);      }
    // this._userGear = gear;
  }
  toString(str){
    return `|${this.make}|${this.model}|`;
  }
}
console.log("5번끝 6번시작 ====================================================")

let car1 = new Car("Tesla","Model S");
let car2 = new Car("Mazda","3i");

car1.shift('D'); // 메시지 전달
car2.shift('R');

console.log(car1.get_userGear());
console.log(car2.get_userGear());

console.log(car1.toString());
console.log(car2.toString());

console.log("6번끝 7번시작 ====================================================")

function create_object(o) {
  function F() {}
  F.prototype = o;

  return new F;
}

person = {
  name : "zzoon",
  getName: function() { return this.name;},
  setName: function(arg) { this.name = arg;}
};

var student = create_object(person);
student.age = 28;
student.getAge = function() { return this.age};

console.log(student);
console.log(student.getName());
console.log(student.getAge());

student.setName("me");
student.toString = function() {return `|${this.name}|`};
console.log(student);
console.log(student.toString());
console.log('-------------------------------------------------------------');

class Bus extends Car {
  constructor( make, model, personnel){
    super(make,model);
    this.personnel = personnel;
    console.log("Bus created!!");
  }

  toString(){
    let str = super.toString();
    str+=`${this.personnel}|`;
    return str;
  }
}

let bus = new Bus("Hyundai","Bus",40);
console.log(bus);
console.log(bus.toString());
