// 구조 분해 할당 

// 1. 배열 구조본해할당
// - 순서가 중요함

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);
const [x,y,z,alpha] = arr2;
console.log(x,y,z,alpha);

const list = ['apple','orange'];
const [f1,f2,f3='banana'] = list;
console.log(f1,f2,f3);

let num1 = 1, num2= 3;
console.log('swap 전 > ',num1, num2);
[num1,num2] = [num2, num1]; // [num1,num2] = [3,1]
console.log('swap 후 > ',num1, num2);


// 2. 객체 구조분해 할당
// - 키값과 변수명이 일치
const obj = {
    title:'독전2',
    star :1,
    content:'제발 보지마라,,'
}


// 구조 분해 X
console.log(obj.content, obj.star,obj.title);

// const [content, star, title]= obj;
// key가 존재하지 않는 경우 대비해서 default값 할당
const {content, star, title,price=1000}= obj;
console.log(content, star, title,price);

const {c,s,t} =obj;
console.log(t,s,t); // undefined

// 콜론(:)을 이용해서 새 변수명으로 바꿔서 저장 가능
const {content:c1, star:s1, title:t1}=obj;
console.log(c1,s1,t1);
 




// 예시 ------------------------------------

// 전달받는 데이터
const info ={
    name:'web-fullstack',
    time:"09-14",
    content: '여러분은 배가 고프시죠..'
}

function getInfo(lecture){
    // 구조분해 할당 사용하여 값 추출
    console.log(lecture)
    const {name, time, content} = lecture;
    
    // 출력 문장 생성
    const output = `${name}강의는 ${time}시간에 하고 ${content}`;
    
    // 출력 문장 리턴
    return output;
}
const result = getInfo(info);
console.log(result)


// ----------------------------------------------
// 단축평가
// &&, ||
// A && B : 두 개의 피연산자 모두 true면 true를 반환
// A || B : 두 개의 피연산자 중에서 하나만 true여도 true 반환

console.log(true&&true); // true
console.log(true && false) // false

console.log(true || false) // true
console.log(false || true) // true


// &&(논리곱)
const v1 = 5;
const v2 = 7;
const result2 = v1>v2 && 'v1이 큼' // false
console.log(result2) 

const result3 = v1<v2 && 'v2이 큼' // false
console.log(result3) 

// ||(논리합)
const result4 = v1 || 100; // 앞에 값이 true여서 뒤에는 검사 X
console.log(result4); // 5

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름X'); // 홍길동
console.log(nameEx2 || '이름X'); // 이름 X