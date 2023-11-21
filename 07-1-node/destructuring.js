// 구조분해할당 : 구조를 분해해서 변수에 할당

// 1. 객체를 구조분해
const cookie = {
    choco: "초코맛",
    vanilla : "바닐라맛",
    mint:"민트맛"
}

console.log(cookie.choco);

// -> 구조분해(cookie . choco (점 안붙여도 됨))
const{mint,choco,vanilla} = cookie;
/*
const{mint,choco,vanilla} = {
    choco: " 초코맛",
    vanilla : "바닐라맛",
    mint:"민트맛"
}

*/ 
console.log(choco);
console.log(vanilla);
console.log(mint);


// 2. 배열을 구조분해
// 객체는 중괄호, 배열은 대괄호
const arr = ['first','second'];
const [one,two] =arr;
// const[one,two] = ['first','second'];
console.log(one,two);
// const one = arr[0];
// const two = arr[1];