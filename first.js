var a;
let b = 20;

console.log(" Hello, world!!");
console.log("a= " + a);
console.log("b= " + b);

console.log(a+b);

a = 30;
console.log("a = " + a);

const x = 10;
console.log("x = " + x);

//x=100;
console.log("x = " + x);
console.log("============================================");
console.log();

var count = 10;
var blue = 0x0000ff;
var umask = 0o0022;
var roomTemp =21.5;
var c = 3.0e6;
var e = -1.6e-19;
var inf = Infinity;
var ninf = -Infinity;
var nan = NaN;
console.log(count);
console.log(blue);
console.log(umask);
console.log(roomTemp);
console.log(c);
console.log(e);
console.log(inf);
console.log(ninf);
console.log(nan);
console.log("============================================");
console.log();

var small = Number.EPSILON; // 1과 더했을때 1과 가장 근접한 최소의 값
var bigInt = Number.MAX_SAFE_INTEGER; // 정수형일때의 최대값 (9000조)
var max = Number.MAX_VALUE; // 실수형의 최대값
var minInt = Number.MIN_SAFE_INTEGER; // 정수형일때의 최소값
var min = Number.MIN_VALUE;
var nInf =Number.NEGATIVE_INFINITY;
var nan2 = Number.NaN;
var inf2 = Number.POSITIVE_INFINITY;

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(nan2);
console.log(inf2);
console.log("============================================");
console.log();

var dialog='Sam looked up,and said "Hello,old friend",as Max walked in.';
var imperative = "Don't do that!";

console.log(dialog);
console.log(imperative);

var dialog1 = "He looked up and said \"don't do that!\" to Max.";
var dialog2 = 'He looked up and said "don\'t do that!" to Max.';

console.log(dialog1);
console.log(dialog2);
console.log("Hello,\nworld!!");

console.log("-----------------------------------------------");
console.log();

var currentTemp = 19.5;
const message = " The Current temperature is " + currentTemp + "\u00b0c";
const message2 = `The Current temperature is ${currentTemp}\u00b0c` ;

console.log(message);
console.log(message2);

const multiline = "line1\line2";
const multiline2 = "line1\n\line2";
const multiline3 = "line1\line2\line3";

const multiline4 = "line1\n" + "line2\n" + "line3"; //문자열 결합
const multiline5 = 'Current temperature:\n' + `\t${currentTemp}\u00b0c`
//확장문자열을 결합함.

+ "Dont't worry... the heat is on!";

console.log(multiline);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);
console.log(multiline5);


console.log("-----------------------------------------------");
console.log();

const result = 3 + '30';
const result2 = 3 * '30';


console.log(result);
console.log(result2);

console.log("-----------------------------------------------");
console.log();

const heating = true;
const cooling = false;

console.log(heating);
console.log(cooling);

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol ("The color of a sunset!");
console.log(RED === ORANGE);

var currentTemp2;
var targetTemp2 = null;
console.log(currentTemp2);
console.log(targetTemp2);
currentTemp2 = undefined;
console.log(currentTemp2);


console.log("-----------------------------------------------");
console.log();

var obj = {};
console.log(obj);
obj.color = "yellow"
console.log(obj);
obj["not an identifier"] = 3;
console.log(obj);
console.log(obj["not an identifier"]);
console.log(["color"]);
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);

console.log("-----------------------------------------------");
console.log();

var sam1 = {name : 'Sam', age:4};
var sam2 = {name : 'Sam', age:4};
var sam3 = {name : 'Sam',
            classification: {
              kingdom : 'Anamalia' , phylum : 'chordata', class: ' Mamalia',
              order : 'Carnivoria', family : ' Felidas', sumfamily: 'Felinae',
              genus: 'Felis', speceies: ' catus '
            }
            };

console.log(sam1);
console.log(sam2);
console.log(sam3);
console.log(sam1 === sam2); //객체 자체가 저장되는 것이 아니고 객체의 참조, 레퍼런스가 저장이 된다 따라서 같지 않음
console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3["classification"]["family"]);
//자바스크립트에서 집합기호로 마감을 하면 객체가 된다.
//sam3과 같은 경우, classification은 키가 되며 내부의 자료는 데이터가 된다


console.log("-----------------------------------------------");
console.log();


sam3.speak = function() { return "MEOW!"};
console.log(sam3);
console.log(sam3.speak());
delete sam3.classification; //delete로 객체의 property 삭제
console.log(sam3);


delete sam3.speak;
console.log(sam3);

console.log("-----------------------------------------------");
console.log();


var s = "hello";
console.log(s.toUpperCase());

s.rating = 3;
console.log(s.rating);
console.log("-----------------------------------------------");
console.log();

var a1= [1,2,3,4];
var a2 = [1,'two',3,null];
var a3 = [ "what the hummer? what the chain?" , " In what furnace was thy brain?",
            "what the anvil? what dread grasp", " Dare its deadly terrors clasp?"];

var a4 =  [{name : "Ruby", hardness : 9}, {name : "Diamond", hardness : 10}, {name: "Topaz", hardness : 8}];
var a5 = [[1,3,5],[2,4,6]];

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
var arr = ['a', 'b','c'];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]);
var arr2 = [1,2,'c',4,5];
console.log(arr2);
arr2[2] = 3;
console.log(arr2);

console.log("-----------------------------------------------");
console.log();

var now = new Date();
console.log(now);
var halloween = new Date(2019,9,31);
console.log(halloween);
var halloweenParty = new Date(2019,9,31,19,0);
console.log(halloweenParty);

console.log(halloweenParty.getFullYear());
console.log(halloweenParty.getMonth());
console.log(halloweenParty.getDate());
console.log(halloweenParty.getDay());
console.log(halloweenParty.getHours());
console.log(halloweenParty.getMinutes());
console.log(halloweenParty.getSeconds());
console.log(halloweenParty.getMilliseconds());

console.log("-----------------------------------------------");
console.log();







var numStr = "33.3";
var num = Number( numStr);
console.log(numStr);
console.log(num);

var a = parseInt("16 volts", 10);
var b2 = parseInt( "3a", 16);
var c2 = parseFloat ("15.5 kph");

console.log(a);
console.log(b2);
console.log(c);

var d = new Date();

var ts = d.valueOf();

console.log(d);
console.log(ts);

d2 = true;
var n2 = b ? 1 : 0;
console.log(d2);
console.log(n2);

var v = 33.5;
var v2 = v.toString();
console.log(a);
console.log(v2);

var arr9 = [1,true,"hello"];
console.log(arr9);
console.log(arr9.toString());

var n9 = 0;
var b9 = !!n9;
var b10 = Boolean(n9);

console.log(n9);
console.log(b9);
console.log(b10);

console.log("-----------------------------------------------");
console.log();

var xx = 5;
var yy = 3 - -xx;
console.log(`xx = ${xx} yy = ${yy}`);

var ss = "5";
var yyy = 3 + +ss;
console.log(`ss = ${ss} yyy = ${yyy}`);

var xx1 = 0, xx2 = 2, xx3 = -1.5, xx4 = -6.33;
var p1 = -xx1 *1;
var p2 = +xx2 *2;
var p3 = +xx3 *3;
var p4 = -xx4 *4;

console.log(`\nxx1 = ${xx1} xx2 = ${xx2} xx3 = ${xx3} xx4 = ${xx4}`);
console.log(`p1 = ${p2} p1 = ${p2} p3 = ${p3} p4 = ${p4}`);
