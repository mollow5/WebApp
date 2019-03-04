console.log("1번시작=================================================================");
let arr1 = [1,2,3];
let arr2 = ["one",2,"three"];
let arr3 = [[1,2,3],["one",2,"three"]];
let arr4 = [
  { name: "Fred" , type: "object",luckyNumber:[5,7,13]},
  [
    { name: "Susan", type:"object"},
    { name: "Anthony", type:"object"},
  ],1,function() { return "arrays can contain functions too";}, // 무명함수 람다(=>)식 표기법사용가능
  //function() 대신에 (() => "arrays can contain functions too"), // 무명함수 람다(=>)식 표기법
  "three"
];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log("1번끝 2번시작=================================================================");

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);
console.log(arr4[3]());

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

arr1[4] = 5;
console.log(arr1);
console.log(arr1.length);

console.log(arr2[10]);
console.log(arr2.length);

console.log("2번끝 3번시작=================================================================");

let arr5 = new Array();
let arr6 = new Array(1,2,3);
let arr7 = new Array(2);
let arr8 = new Array("2");

console.log(arr5);
console.log(arr5.length);
console.log(arr6);
console.log(arr6.length);
console.log(arr7);
console.log(arr7.length);
console.log(arr8);
console.log(arr8.length);
console.log("3번끝 4번시작==================================================================");

let arr9 = ["b","c","d"];
console.log(arr9);

console.log(arr9.push("e"));
console.log(arr9);

console.log(arr9.pop());
console.log(arr9);

console.log(arr9.unshift("a"));
console.log(arr9);

console.log(arr9.shift());
console.log(arr9);
console.log("4번끝 5번시작===================================================================");
// concat 그 라인에만 배열이 변경되고 원본이 바뀌지는 않음
let arr10 = [1,2,3];
console.log(arr10);

console.log(arr10.concat(4,5,6));
console.log(arr10);

console.log(arr10.concat([4,5,6]));
console.log(arr10);

console.log(arr10.concat([4,5],6));
console.log(arr10);

console.log(arr10.concat([4,[5,6]]));
console.log(arr10);

console.log(arr10.concat('a','b','c')[arr10.length -1]);
console.log("5번끝 6번시작===================================================================");
// slice 는 그 라인에서만 배열이 변경되고 원본은 변하지 않음
let arr11 = [1,2,3,4,5];

console.log(arr11);

console.log(arr11.slice(3)); // 숫자가 하나만 있으면 잘라낼 시작위치 = 3
console.log(arr11);

                                  // ★★★★★★★★
console.log(arr11.slice(2,4));    //숫자가 두개가 있으면 2번째 인덱스부터 4번쨰 인덱스전까지
console.log(arr11);

console.log(arr11.slice(-2)); // 뒤에서 인덱스 2 (0,1,2)
console.log(arr11);

console.log(arr11.slice(1,-2));
console.log(arr11);

console.log(arr11.slice(-2,-1));
console.log(arr11);
console.log("6번끝 7번시작===================================================================");
// splice 는 배열이 바뀌고 원본도 바뀜
let arr12 = [1,5,7]; //원본은 [1,5,7]
console.log(arr12);

// 두번쨰 인수가 0이면 추가 0보다 큰값을쓰면 삭제갯수 , 실제로 추가하는 데이터는 2,3,4,
arr12.splice(1,0,2,3,4); //1=인덱스 1번쨰 자리에 ,0 = 추가 ,2,3,4= 2,3,4를
console.log(arr12);

//첫번째 인수는 첫번째 인덱스에 추가나 삭제되는 시점
arr12.splice(5,0,6); // 5 = 인덱스 5번쨰 자리에 , 0 = 추가 ,6 = 6을
console.log(arr12);
//첫번쨰 인덱스부터 2개삭제 (2가 0보다 크기때문에)
arr12.splice(1,2);
console.log(arr12);

arr12.splice(2,1,'a','b'); //
console.log(arr12);
console.log("7번끝 8번시작===================================================================");

let arr13 = [1,2,3,4];
console.log(arr13);

// 첫번째 인수 = 첫번쨰 인덱스 위치에 덮어 씌우기  두번째 인수 = 복사를 할 시작 인덱스 3번째 인수 = 생략시 끝까지라는말
arr13.copyWithin (1,2);
console.log(arr13);

arr13.copyWithin(2,0,2);
console.log(arr13);

arr13.copyWithin(0,-3,-1);
console.log(arr13);
console.log("8번끝 9번시작===================================================================");

let arr14 = new Array(5).fill(1);
console.log(arr14);

arr14.fill("a");
console.log(arr14);

arr14.fill("b",1);
console.log(arr14);

arr14.fill("c",2,4);
console.log(arr14);

arr14.fill(5.5,-4);
console.log(arr14);

arr14.fill(0,-3,-1);
console.log(arr14);
console.log("9번끝 10번시작===================================================================");

let arr15 = [1,2,3,4,5];
console.log(arr15);

arr15.reverse();
console.log(arr15);

arr15 = [5,4,3,2,1];
console.log(arr15);

arr15.sort(); // sort 는 숫자일경우에만 sort를 함
console.log(arr15);

arr15 = [{name:"Suzanne"}, {name : "Jim"}, {name:"Trevor"}, {name:"Amanda"}]; // 이처럼 객체일경우에는 sort방식이 다름
console.log(arr15);
console.log();

arr15.sort();
console.log(arr15);
console.log();

arr15.sort((a,b)=>a.name > b.name); // 콜백함수
console.log(arr15);
console.log();

arr15.sort((a,b)=>a.name[1] < b.name[1]); // 첫글자만 비교
console.log(arr15);
console.log();

console.log("10번끝 11번시작==============================================================");

const o = {name: "Jerry"};
let arr16 = [1,5,"a",o,true,5,[1,2],"9"];
console.log(o);
console.log(arr16);

console.log(arr16.indexOf(5));
console.log(arr16.lastIndexOf(5));
console.log(arr16.indexOf("a"));
console.log(arr16.lastIndexOf("a"));
console.log(arr16.indexOf({name:"Jerry"})); //못찾으면 -1
console.log(arr16.indexOf(o));
console.log(arr16.indexOf([1,2])); // ?
console.log(arr16.indexOf("9"));
console.log(arr16.indexOf(9));

console.log(arr16.indexOf("a",5)); // 5는 검색시작위치
console.log(arr16.indexOf(5,5));
console.log(arr16.lastIndexOf(5,4));
console.log(arr16.lastIndexOf(true,3)); // ?
console.log("11번끝 12번시작==============================================================");

let array = [1,5,2,5,4,3,5,7,6,9,10,11];
let searchResult = [];

let search;

search = array.indexOf(5,0);
while( search !== -1 ){
  searchResult.push(search);
  search = array.indexOf(5,search + 1);
}

if( searchResult.length > 0) {
  console.log(searchResult);
} else {
  console.log("data not found !!");
}
console.log("12번끝 13번시작==============================================================");

let arr17 = [ { id:5, name:"Judith"},{id:7,name:"Francis"}];
console.log(arr17);

console.log(arr17.findIndex(o=> o.id === 5)); // id 가 5인 객체의 인덱스번호 찾기 (0)
console.log(arr17.findIndex(o=> o.name === "Francis")); // name 이 Francis 인 객체의 인덱스번호 찾기
console.log(arr17.findIndex(o=> o === 3));
console.log(arr17.findIndex(o=> o.id === 17));

console.log(arr17.find ( o => o.id === 5)); // id 가 5인 객체의 값들 가져오기
console.log(arr17.find ( o => o.id === 2));

let arr18 = [1,17,16,5,4,16,10,3,49];
console.log(arr18.find((x,i) => i>2 && Number.isInteger(Math.sqrt(x)))); // sqrt = 제곱근
console.log("13번끝 14번시작==============================================================");

let arr19 = [5,7,12,15,17];
console.log(arr19.some(x=>x%2===0)); // 2의 배수가 있나,없나
console.log(arr19.some(x=>Number.isInteger(Math.sqrt(x)))); // 제곱근이 있나 없나

let arr20 = [4,6,16,36];
console.log(arr20.every(x=>x%2 === 0));
console.log(arr20.every(x=>Number.isInteger(Math.sqrt(x))));
console.log("14번끝 15번시작==============================================================");

// map = 배열을 변형시키는 함수
let cart = [{name:"Widget", price : 9.95}, {name:"Gadget", price : 22.95}];
console.log(cart);
let names = cart.map(x=>x.name);
console.log(names);
let prices = cart.map(x=>x.price);
console.log(prices);
let discountPrices = prices.map(x=>x*0.8);
console.log(discountPrices);

let items = ["Widget","Gadget"];
let prices2 = [9.95,22.95];
console.log(items);
console.log(prices2);

let cart2 = items.map((x,i) => ({name:x,price:prices2[i]}));
console.log(cart2);
console.log("15번끝 16번시작==============================================================");

let cards = [];
for ( let suit of ['H','C','D','S']){
  for(let value = 1; value<=13;++value){
    cards.push({suit,value});
  }
}

console.log(cards);
console.log();
console.log(cards.filter(c=>c.value === 2));
console.log();
console.log(cards.filter(c=>c.suit === 'D'));
console.log();
console.log(cards.filter(c=>c.value === 10));
console.log();
console.log(cards.filter(c=>c.value > 10 && c.suit === 'H'));
console.log("16번끝 17번시작==============================================================");

let arr21 = [5,7,2,4];
let sum = arr21.reduce((a,x) => a += x, 0);
// let sum == arr21.reduce((a+x)=> a+=x);
console.log(arr21);
console.log(sum);


let words = ["Beachball","Rodeo","Angel","Avrdvark",
              "Xylophone","November","Chocolate"];
let alphabetical = words.reduce((a,x) => {
  if (!a[x[0]]) a[x[0]] = [];
  a[x[0]].push(x);
  return a;
},{});
console.log(words);
console.log(alphabetical);

let longWords = words.reduce((a,w) => w.length>6 ? a+ " " + w : a, "").trim();
console.log(longWords);
console.log("17번끝 18번시작==============================================================");
// Donald Knuth 이 작성한 분산 계산을 위한 알고리즘

let data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
let stats = data.reduce( (a,x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta / a.N;
    return a;
}, {N:0, mean : 0, M2 : 0});
if(stats.N > 2){
    stats.variance = stats.M2 / (stats.N - 1);
    stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);
console.log("18번끝 19번시작==============================================================");
