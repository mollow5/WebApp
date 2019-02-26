var r=2;
console.log(`\nr = ${r}`);

const r1 = r++ + r++;
console.log(`r1 = ${r1}`);
console.log(`r = ${r}`);

const r2 = ++r + ++r;
console.log(`r2 = ${r2}`);
console.log(`r = ${r}`);

const r3 = r++ + ++r;
console.log(`r3 = ${r3}`);
console.log(`r = ${r}`);

const r4 = ++r + r++;
console.log(`r4 = ${r4}`);
console.log(`r = ${r}\n`);
console.log("------------------------------------");
console.log();

r=10;
console.log(`r= ${r}`);
var r5 = r-- + r--; // 10 +9 r =8
console.log(`r5 = ${r5}`); //19
console.log(`r = ${r}`); //8

var r6 = --r + --r; // 7 + 6
console.log(`r6 = ${r6}`); //13
console.log(`r=${r}`); // 6

var r7 = r-- + --r; //6 + 4
console.log(`r7 = ${r7}`); // 10
console.log(`r = ${r}`); // 4

var r8 = --r + r--; //3 + 3
console.log(`r8 = ${r8}`); // 6
console.log(`r = ${r}`); //2

x=3;
y=null;
x += y = 6 * 5 / 2; //x = x+y 이고 y = 15  즉, x=18 y=15
console.log(`\nx=${x} y=${y}`);
console.log("---------------------------------------");
console.log();

var n = 5;
s = "5";
console.log('\nn === "5" ==> ' +  ( n === s)); // 일치연산자
console.log(' 5 !== "5" ==> ' + (n !== s));
console.log('5 === Number("5") ==> ' + ( n === Number (s))); // Number 라는 내부객체를 이용하여 형변환 (문자->숫자)
console.log('5 !== Number("5") ==> ' + ( n !== Number (s)));
// 동등연산자, 동등연산자는 자료형이다르더라도 형변환을 하면 같아지냐?에 따라 true false를 결정
console.log('5 == "5" ==> ' + (n == s ));
console.log('5 != "5" ==> ' + (n !=  s));
console.log("------------------------------------------");
var a = {name : "an object"};
var b = {name : "an object"};
console.log(`\n${a} === ${b} ==>`);
console.log( a===b);
console.log(`\n${a} !==${b} ==>`);
console.log(a !== b);
console.log(` \n${a} == ${b} ==>`);
console.log(a==b);
console.log(`\n${a} !=${b} ==>`);
console.log(a != b);
console.log("------------------------------------------");
console.log();

console.log("\n" + (3>5));
console.log(3>=5);
console.log(3<5);
console.log(3<=5);
console.log(5>5);
console.log(5>=5);
console.log(5<5);
console.log(5<=5);

n=0;
while(true)
{
  n += 0.1;
  if(Math.abs(n-0.3) < Number.EPSILON){
    break;
  }
}
console.log(`\nStopped at ${n}\n`);
console.log("------------------------------------------");
console.log();

console.log(3+5+"8");
console.log("3"+5+8);

var skipIt = true;
x = 0;
var result = skipIt || x++;
console.log(`\nskipIt = ${skipIt}`);
console.log(`x = ${x}`);
console.log(`result = ${result}`);
console.log(`x = ${x}`);
var doIt = false;
result = doIt && x++;
console.log(`\ndoIt = ${doIt}`);
console.log(`x = ${x}`);
console.log(`result = ${result}`);
console.log(`x = ${x}`);
console.log("------------------------------------------");
console.log();

var suppliedOptions = {};
var options = suppliedOptions || {name:"Default"};
console.log("\noptions = " + options);

suppliedOptions = null;
options = suppliedOptions || { name:"Default"};
console.log ("\noptions = " + options);

doIt = false;
result = doIt ? " Did it!" : "Didn't do it";
console.log(`\nresult = ${result}`);

var x = 0;
var y = 10;
var z;

z=(x++,y++);
console.log(`\nx=${x}`);
console.log(`y=${y}`);
console.log(`z=${z}`); // 여러개의 값이올떄는 마지막의 값이 들어옴
console.log("------------------------------------------");
console.log();

n=22; // 0001 0110 = 22
console.log(`\n${n} >> 1`); // 부호비트가 0이기떄문(양수)에 비트 이동시 0이 들어옴
console.log(n >>1 ); // 00001011 = 1+2+8 = 11
console.log(`\n${n} >>>1`);
console.log(n >>>1);

console.log(`\n${n} = ~${n}`);// 부호비트가 1이기 때문(음수)에 비트 이동시 0이아닌 1이 들어옴
n = -n; // 1의보수
console.log(`${n} = ~${n}`);

n++; // 2의보수
console.log(`\n${n} ++`);

console.log(`\n${n} >> 1`);
console.log(n >> 1);

console.log(`\n${n} >>> 1`);
console.log(n >>> 1); // >>>(3개짜리)는 부호비트를 무시하고 0이들어옴
console.log("----------------------------------------------");
console.log();

const FLAG_EXECUTE = 1; // 0001
const FLAG_WRITE = 2; // 0010
const FLAG_READ = 4; //0100

var p = FLAG_READ | FLAG_WRITE; // 0100 | 0010 = 0110 = 6
var hasWrite = p&FLAG_WRITE;// 0110 & 0010 = 0010 = 2
var hasExecute = p & FLAG_EXECUTE; // 0110 & 0001 = 0000 = 0

console.log(`\np = ${p}`);
console.log(`hasWrite = ${hasWrite}`);
console.log(`hasExecute = ${hasExecute}`);
p = p ^ FLAG_WRITE; // 0110 ^ 0010 = 0100
console.log(`\np = ${p}`);
p = p ^ FLAG_WRITE; // 0100 ^ 0010 = 0110
console.log(`\np = ${p}`);
const hasReadOrExecute= p & (FLAG_READ | FLAG_EXECUTE); // &(AND) 가 |(OR) 보다 우선순위가 높다. 0110 & 0101 = 0100 = 4
const hasReadAndExecute= p & (FLAG_READ | FLAG_EXECUTE) === (FLAG_READ | FLAG_EXECUTE);
console.log(`\nhasReadOrExecute = ${hasReadOrExecute}`);
console.log(`\hasReadAndExecute = ${hasReadAndExecute}`);
console.log("----------------------------------------------");
console.log();

console.log("\ntypeof undefined => " + ( typeof undefind));
console.log("typeof null => " + (typeof null));
console.log("typeof {} => " + (typeof {}));
console.log("typeof [] => " + (typeof []));
console.log("typeof true => " + (typeof true));
console.log("typeof 1 => " + (typeof 1));
console.log('typeof "" => ' + (typeof ""));
console.log("typeof Symbol() => " + (typeof Symbol()));
console.log("typeof function() {} => " + (typeof function() {}));

var v,v2;
v=v2=9.8;
console.log(`\nv=${v}`);
console.log(`v2=${v2}`);
var nums=[3,5,15,7,5];
var i =0;
while((n = nums[i]) < 10 && i++ < nums.length){ // i=0 일때 3<10 && 0<5 =>1
  console.log(`Number less than 10: ${n}`);
}
console.log(`Number greater than 10 found : ${n}`);
console.log(`${nums.length - i - 1} numbers remain`);
console.log("----------------------------------------------");
console.log();

var obj = {b1:2,c1:3,d1:4};
var {a1,b1,c1} = obj;
console.log(`\na1 = ${a1}\tb1 = ${b1}\tc1 = ${c1}`);
var obj2 = {b2:2,c2:3,d2:4};
var a2,b2,c2;
({a2,b2,c2} = obj2);
console.log(`\na2 = ${a2}\tb2 = ${b2}\tc2 = ${c2}`);
var arr = [1,2,3];
var [x5,y5]=arr;
console.log(`\nx5 = ${x5}\ty5 = ${y5}`);
var arr2=[1,2,3,4,5];
var [x6,y6,...rest]=arr2;
console.log(`\nx6 = ${x6}\ty6 = ${y6}\trest = ${rest}`);
var a5 = 5, b5 = 10;
console.log(`\na5 = ${a5}\tb5 = ${b5}`);
[a5,b5]=[b5,a5];
console.log(`\na5 = ${a5}\tb5 = ${b5}`);
console.log("----------------------------------------------");
console.log();

var totalVet;
if (new Date().getDay() === 3) {
  totalVet = 1;
}else {
  totalVet=2;
}
console.log(`totalVet : ${totalVet}`);

for (var temp,i=0,j=1;j<30;temp=i,i=j,j=i+temp){ // 초기값1,초기값2,초기값3;종료조건;증가
  console.log(j);
}
console.log();

var s=3;
for ( ;s.length<10;s=' ' + s);
console.log(s);

for(var x = 0.2;x<3.0;x+=0.2)
{
  console.log(x);
}
var player = {name:'Thomas' , rank: 'Midshipman',age:25};
for(var prop in player) {
  if(!player.hasOwnProperty(prop)){
    continue;
  }
  console.log(prop+': ' + player[prop]);
}
console.log();

var hand=[5,6,7,8];
for(var ii=0;ii<hand.length;++ii)
{
  console.log(`face: ${hand[ii]}`);
}
console.log();

for( var face of hand){
  console.log(`face:${face}`);
}

var select=1;
if (select ===1){
  console.log("first");
}else if (select ===2) {
  console.log("Second");
}else {
  console.log("Other...");
}

switch(select){
  case 1:
    console.log("first"); break;
  case 2:
    console.log("Second"); break;
  default:
    console.log("Other ..."); break;
}
