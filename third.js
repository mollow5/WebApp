// 함수 정의
function sayHello(){
  console.log("Hello world");
}

// 함수 호출
sayHello();
console.log("----------------------------------------------------------------");

function getGreeting() {
  return "Hello world";
}

console.log(getGreeting());
console.log("----------------------------------------------------------------");

var message = getGreeting();
console.log("message방식 " + message);
console.log("----------------------------------------------------------------");

getGreeting();  // 함수 호출
var f = getGreeting; // 함수 참조인 getGreeting 이 함수를 참조(reference 저장)하기 때문에 f는 함수가 된다.
console.log("f방식 "+ f());
console.log("----------------------------------------------------------------");

var arr = [1,2,3];
arr [1] = getGreeting;
for ( var item of arr){
  console.log(typeof item);
}
console.log(arr[1]());
console.log("----------------------------------------------------------------");

//인수를 두개 받는 average 함수
function average(a,b){
  console.log(`a = ${a}\t b=${b}`);
  return (a+b)/2;
}

console.log(average(5,10));
console.log("----------------------------------------------------------------");

var a= 5, b=10;
console.log(average(a,b));
console.log("----------------------------------------------------------------");

average(5); // 전달하는 인수가 달라도 함수 호출은 가능하며 값은 undefined 가 출력
average();
console.log("----------------------------------------------------------------");
// 밸류는 원래의 값이 변경되지않음
function func( x ){
  console.log( `func내부 : x = ${x}`);
  x = 5;
  console.log( `func내부 : x = ${x} (할당 후)`);
}

var x = 3;
console.log(`func를 호출하기 전 : x = ${x}`);
func(x);
console.log(`func를 호출한 후 : x = ${x}`);
console.log("----------------------------------------------------------------");

// 레퍼런스는 원래의값이 변경됨
function func2( o ) {
  console.log(o);
  o.message = `func2 안에서 수정함 (이전값 : ${o.message})`;
  console.log(o);
}

var o2 = {message: "초기값"};

console.log(`func2를 호출하기 전 : "${o2.message}"`);
func2(o2);
console.log(`func2를 호출한 후 :"${o2.message}"`);
console.log("----------------------------------------------------------------");
// 함수 내에서 받은값이있는데
// 객체를 만들면 그 함수에서 호출할때만 받아온 값이 바뀌고
// 함수를 벗어나게되면 객체값말고 받아온값 이 바뀜
function func3( o ){
  o.message = `func3 에서 수정함`; // 초기값이라는 메시지를 func3에서 수정함으로 바꿈 (이건 함수를 벗어나도 이값으로 변경되어있음)
  o = {message : "새로운 객체"}; // 새로운 객체를 만들면 함수내에서 메시지는 새로운객체가됨
  console.log(`func3 내부 : o.message = "${o.message}" (할당 후)`);
}

var o3 = {message: "초기값"};
console.log(`func3를 호출하기 전 : o.message = "${o3.message}"`);
func3(o3);
console.log(`func3를 호출한 후 : o.message ="${o3.message}"`);
console.log("----------------------------------------------------------------");

function func4( o ) {
  o = { message : "새로운 객체"};
  return o; // 리턴을 하게되면 or 의 레퍼런스가 바뀜
}

var o4={message:"초기값"};
console.log(`func4를 호출하기 전 : o.message = "${o4.message}"`);
o4 = func4(o4); // 레퍼런스가 바뀌면서 o4 에 새로운 레퍼런스가 저장
console.log(`func4를 호출한 후 : o.message ="${o4.message}"`);

console.log("----------------------------------------------------------------");
function getSentence ({ subject,verb,object}){
  return `${subject} ${verb} ${object}`;
}

var o5={subject:"I", verb:"love", object:"JavaScript"};
console.log(getSentence(o5));
console.log("----------------------------------------------------------------");

function getSentenceArray([subject,verb,object]){
  return `${subject} ${verb} ${object}`;
}

var arr2 = ["I","Love","JavaScript"];
console.log(getSentenceArray(arr2));
console.log("----------------------------------------------------------------");

function addPrefix (prefix,...words){ // ... 은 뭉쳐서 하나로받을떄 (수가일정하지않을떄 사용) - 몇개인지 모르기에 배열로넘어옴
  var prefixWords = [];
  for (var i =0;i<words.length;++i){
    prefixWords[i] = prefix + words[i];
  }
  return prefixWords;
}

console.log(addPrefix("con","verse","vex"));
console.log("----------------------------------------------------------------");

function f3(a,b = "default", c=3){ // a의 전달된 값이 없다면 undefined b의 전달된 값이 없다면 default c의 전달된 값이 없다면 3
  return `${a} - ${b} - ${c}`;
}

console.log(f3(5,6,7));
console.log(f3(5,6));
console.log(f3(5));
console.log(f3());
console.log("----------------------------------------------------------------");

var o5 = {
  name: "Hong",
  bark: function(){return "Woof!";}
}
console.log(o5.name+ " " + o5.bark());

var o6 = {
  name:"Kim",
  bark() {return "Woof!";}
}
console.log(o6.name+ " " + o6.bark());
console.log
console.log("----------------------------------------------------------------");

var o7 = {
  name:"Park",
  speak() { return `My name is ${this.name}`;}
}

console.log(o7.speak());

var speak = o7.speak;
console.log(speak == o7.speak);
console.log(speak());
console.log("----------------------------------------------------------------");

var o8 = {
  name: 'Julie',
  greetBackwards: function(){
    const self = this;
    function getReverseName(){ // 중첩함수
      var nameBackwards = '';
      for( var i = self.name.length - 1;i>=0;--i){
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  }
};
console.log( o8.greetBackwards() );
console.log("----------------------------------------------------------------");

var f11  =function() { return "Hello!";}
var f11_r = () => "Hello!!";
console.log(f11_r());

var f12 = function(name) {return `Hello ${name}`;}
var f12_r = name => `Hello ${name}`;
console.log(f12_r("Hong"));

const f13=function(a,b) {return a+b;}
const f13_r = (a,b) => a+b;
console.log(f13_r(5,10));
console.log("----------------------------------------------------------------");

var o9 = {
  name: 'Julie',
  greetBackwards: function(){
    const getReverseName = () => { // 내부 변수
      var nameBackwards = '';
      for( var i = this.name.length - 1;i>=0;--i){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  }
};
console.log( o9.greetBackwards() );
console.log("----------------------------------------------------------------");

var bruce = { name: "Brace"};
var madeline = { name: "Madeline" };

function greet() {
  return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));
console.log("----------------------------------------------------------------");

function update ( birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce,1949,'singer'); // call 을 쓸경우 this 가 가능한데 첫번쨰 인자는 this 로 사용할 객체를 지정.
console.log(bruce);
update.call(madeline,1942,'actress');
console.log(madeline);

update.apply(bruce,[1955,'actor']);
console.log(bruce);
update.apply( madeline,[1918,'writer']);
console.log(madeline);
console.log("----------------------------------------------------------------");
var xx;
function fs( xx ) {
  return xx + 3;
}

console.log(fs(5));
console.log(xx);
console.log("----------------------------------------------------------------");

function fs1() {
  console.log('one');
}

function fs2() {
  console.log('two');
}

fs2();
fs1();
fs2();
console.log("----------------------------------------------------------------");

var xxx = 3; // 전역 스코프
function fs3() {
  console.log(xxx);
  //console.log(yyy);
}
{
  //var yyy = 5; // const 나 let 는 반드시 변수 선언 후에사용가능
  fs3();
}

console.log("----------------------------------------------------------------");

let globalFunc
{
  let blockVar = 'a';
  globalFunc = function(){
    console.log(blockVar);
  }
}
console.log(typeof globalFunc);
globalFunc();
console.log("----------------------------------------------------------------");
let fs4;
{
  let o = {note: 'Safe'};
  fs4 = function() { return o; }
}

console.log(typeof fs4);
console.log(fs4());
let oRef = fs4();
console.log(typeof oRef);
console.log(oRef);
oRef.note = "Not so safe after all";
console.log(oRef);
console.log("----------------------------------------------------------------");
