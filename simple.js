function printDOM(node,prefix){
  console.log(prefix + node.nodeName + '-' + node.nodeType);
  for ( let i =0; i<node.childNodes.length;++i){
    printDOM(node.childNodes[i],prefix+'\t');
  }
}
//printDOM( document,'' );

console.log(document.getElementById('content'));

const callouts = document.getElementsByClassName('callout');
console.log(callouts);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

document.write("<p><b>document</b> object - write() method</p>"); // 목적이 출력인 함수 write
console.log(paragraphs);

const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
//para1.textContent = "Modified HTML file"; // 태그를 반영하지 않는 형태 textContent
para1.innerHTML = "Modified <i>HTML</i> file"; // 태그를 반영하는 형태 innerHTML

const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.innerHTML = "I was <b><i> created </b></i> dynamically!";
p2.textContent = "I was <b><i> also created </b></i> dynamically!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1,firstChild);
parent.appendChild(p2);
console.log(document.getElementById('content'));

function highlightParas ( containing ){
  if(typeof containing == 'string'){
    containing = new RegExp(`\\b${containing}\\b`,'i'); // RegExp 정규표현식을 사용하기 위한 객체
  }
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for(let p of paras){
    if ( !containing.test(p.textContent)){ // unique 라는 내용이 포함된 텍스트
      continue;
    }
    p.classList.add('highlight');
  }
}
//highlightParas('unique');

function removeParaHighlights(){
  const paras = document.querySelectorAll('p.highlight');
  for( let p of paras){
    p.classList.remove('highlight');
  }
}
const highlightActions = document.querySelectorAll('[data-action = "highlight"]');
console.log(highlightActions);
console.log(highlightActions[0].dataset);
highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";
for (let a of highlightActions){
    a.addEventListener('click',evt =>{
        evt.preventDefault();
        highlightParas('unique');
    })
}

const removeHightlightActions = document.querySelectorAll('[data-action="removeHighlight"]');
for ( let a of removeHightlightActions){
  a.addEventListner('click',evt=>{
    evt.preventDefault();
    removeParaHighlights();
  });
}
