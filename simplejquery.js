// function colorEm(){
//   var $div = $("div");
//   var start = Math.floor(Math.random() * $div.length);
//   var end = Math.floor(Math.random() * ($div.length - start)) + start + 1;
//
//   if(end === $div.length){
//     end = undefined;
//   }
//   $div.css("background","");
//   if ( end ){
//     $div.slice(start,end).css("background","yellow");
//   } else {
//     $div.slice(start).css("background","yellow");
//   }
//   $("span").text("$('div').slice(" + start +(end ? ", "+ end : "" ) + ").css('background','yellow');");
// }
// $("button").click(colorEm);

$(document).ready(function(){ // Jquery 에서는 함수를 () 로 묶게되면 별도의 호출없이도 바로 실행이됨
//   $(".callout").css("border","solid 1px #ff0080");
//   $(".code").css("background","#ccc");
//   $(".code").css("margin","1px 2px");
//   $(".code").css("padding","1px 4px");
//   $(".code").css("font-family","monospace");
//   // $(".highlight").css("background","#ff0");
//   // $(".highlight").css("font-stlye","italic");
//
//   $("div > a[target]").css("background","#ccc");
//   $("div > a[href!='http://www.daum.net']").css("background","#ff0080");
//   $("span[class$='de']").css("font-style","italic");
//   $("div[id*='o']").css("font-style","italic");

  // $("ul.url > li").css("border","1px solid #ff0000");
  // $(".url2 li").css("border","1px solid blue");
  // $("label + input").css("border","1px solid #ff0000"); // label 옆에 input 요소들 빨간테두리
  // $("#info ~ input").css("background","blue"); // info 와 형제인 input 들 파란색으로 채우기

// $("tr:eq(0) > td:eq(7)").css("background","#EEE");
// $("tr:eq(1) > td:gt(2)").css("background","#EEE");
// $("tr:eq(2) > td:odd").css("background","#EEE");
// $("tr:eq(3) > td:first").css("background","#AAA");
// $("tr:eq(3) > td:last").css("background","#BBB");

//$("tr:even").css("background","#AAA");
//$("tr:not(.no)").css("background","#AAA"); // 클래스이릅이 no인것을 제외한 나머지 css적용

//$("#txt:focus").css("background","blue");

// $("li").css("margin","5px");
// $(":checked,:selected").css("border","2px solid red");
// $(":selected").css("background","red");

// $("td:first-child").css("background","red");
// $("td:last-child").css("background","yellow");

//$("td:nth-child(2n+1)").css("background","red");

//$("td").filter(function(index){return index % 3 == 0}).css("background","red"); // 표현식의 결과와일치하는

//$("td").not(function(index){ return index % 3 ==0;}).css("background","red"); // 표현식의 결과와 일치하지않는

//$("li").has("ul").css("background","red"); // 셀렉터를 포함한 대상에 대해서 필터링을 하겠다.

// $("*").each(function(){
//   if($(this).is("li")){
//     $(this).css("border","1px solid red");
// }
// });

// var litext = $("li").map(function(index){
//   return "[(" + index + ")" + $(this).text() + "]";
// }).get().join(',');
// $("#result").text(litext);

//$("li").add("div>p").css("border","1px solid red");

//$("ul").find("li").contents().remove("ul");



//$("div").filter(".my").css("border","1px solid red");
//$("div").filter("p").css("border","1px solid red");
//$("div").find("p").css("border","1px solid red");

// $("li").each(function(){
//   $(this).click(function(){
//     $(this).addClass("selected");
//     $(this).siblings().removeClass("selected");
//   });
// });

$("td").css("background-color",function(index,value){
  if(value == "rgb(255,255,0)"){return "red";}
});

//$("td").css("background","blue");

});
// [attr] -> attr 자체
// [attr = '값'] -> attr 일치
// [attr !='값'] -> attr 불일치
// [attr ^='값'] -> attr 내용이 값으로 시작
// [attr $='값'] -> attr 내용이 값으로 끝남

// eq: 인덱스
// odd: 홀수요소
// first: 첫요소
// last: 마지막요소
// gt: 인덱스보다 큰 요소
// lt: 인덱스보다 작은 요소
// header:  모든 헤더요소
// not: 셀렉터 이외의 요소
// focus: 현재 focus요소
