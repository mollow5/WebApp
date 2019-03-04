// 1. 1~10000 사이의 3의 배수와 5의 배수 갯수를 출력하는 프로그램
var num;
num=1;
var num3=0;
var num5=0;
for(num;num<=10000;num++)
{
  if(num % 3==0)
  {
      //console.log(`num : ${num}`);
      num3++;
  }
  if(num % 5==0)
  {
      //console.log(`num : ${num}`);
      num5++;
  }
}
console.log(`3의 배수의 갯수 : ${num3}`);
console.log(`5의 배수의 갯수 : ${num5}`);

console.log("=================================================================================");
console.log();

// 2. 20개의 data 를 배열에 저장한 후 양수/음수, 양수일 때 짝수/홀수 개수를 출력하는 프로그램(배열 사용)

var data=[1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];

var i=0;
var plus=0; // 양수
var min=0;  // 음수
var even=0; // 짝수
var odd=0;  // 홀수

while((n = data[i]) <= 10 && i++ < data.length)
{
  if(n>0)
  {
    plus++;
    if(data[i] % 2 ==0)
    {
      even++;
    }
    else if (data[i] % 2 != 0)
    {
      odd++;
    }
  }
  if(n<0)
  {
    min++;
  }
}
console.log(`짝수의 갯수 : ${even}`);
console.log(`홀수의 갯수 : ${odd}`);
console.log(`양수의 갯수 : ${plus}`);
console.log(`음수의 갯수 : ${min}`);
console.log("=================================================================================");
console.log();
// 3번. 구구단을 출력하는 프로그램 (2단~9단)
for(var i=2;i<10;i++)
{
  console.log(`${i}단`);
  for(var j=1;j<10;j++)
  {
    console.log(`${i}x${j}=${i*j}`);
  }
}
console.log("=================================================================================");
console.log();

console.log( "\n4. 10명의 학생 성적을 출력하는 프로그램(object 사용)\n" );
// 학생 성적 계산
function calculate( students ) {
    for ( let student of students ) {
        for ( let subject of student["subjects"] ) {
            student["total"] += subject;
        }
        student["average"] = student["total"] / MAX_SUBJECT;
        if ( student["average"] >= EXCELLENT ) {
            student["grade"] = "Excellent";
        } else if ( student["average"] < FAIL ) {
            student["grade"] = "Fail";
        }
    }
}

// 석차 계산
function calculate_rank( students ) {
    for ( let i = 0; i < students.length; ++i ) {
        students[i].rank = 1;
        for ( let j = 0; j < students.length; ++j ) {
            if ( students[i].average < students[j].average ) {
                ++students[i].rank;
            }
        }
    }
}

// 평균순 Sort
function sort_average( students ) {
    const maxSort = students.length - 1;
    let k;

    for ( let i = 0; i < maxSort; ++i ) {
        k = i;
        for ( let j = i + 1; j < students.length; ++j ) {
            if ( students[k].average < students[j].average ) {
                k = j;
            }

        }

        if ( i != k ) {
            [ students[i], students[k] ] = [ students[k], students[i] ];
        }
    }
}

// 성적 일람표 출력
function printScoreTable( students ) {
    for ( let student of students ) {
        console.log( `${student.name} ${student.subjects[0]} ${student.subjects[1]} ${student.subjects[0]}\
                      ${student.total} ${student.average} ${student.grade} ${student.rank}` );
    }
}

// 상수 선언
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

// 변수 선언
let students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal" } ];

// main
console.log( "\n10명의 학생 성적을 출력하는 프로그램(함수 사용)\n" );
calculate( students );
calculate_rank( students );
printScoreTable( students );
sort_average( students );
console.log( "\n\n" );
printScoreTable( students );
console.log("================================================================================");
