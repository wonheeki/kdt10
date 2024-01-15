function print(a: number, b: number, c?: number): void {
  console.log('a =', a);
  console.log('b =', b);
  console.log('c =', c);
}
print(2, 4, 6); // a =2, b=4, c =6
print(5, 7); // a=5, b=7, c= undefined

// 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c = 50): void {
  console.log('a =', a);
  console.log('b =', b);
  console.log('c =', c);
}

print2(2, 4, 6); // a =2, b=4, c =6
print2(5, 7); // a=5, b=7, c= 50

// 매개변수 없는 함수
function printHello(): void {
  console.log('hello');
}

printHello();

// void가 아닌 자료형을 반환하는 함수
function sayHello(): string {
  return 'Hello';
}

console.log(sayHello());

function returnNum(): number {
  return 100 + 100;
}
console.log(returnNum());

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 40));

// 화살표 함수
// const sum2 = (a: number, b: number): number => {
//   return a + b;
// };

// 화살표 함수 return 생략
const sum3 = (a: number, b: number): number => a + b;
console.log(sum3(735, 2434));

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string; // 함수
  bye(a: number): string;
}

const dohwa: Greet = {
  name: 'dohwa',
  hi() {
    return '여기는 ' + this.name + ' 캠퍼스';
  },
  bye(a: number) {
    return `잘가라는 인사를 ${a}번 했습니다.`;
  },
};

console.log(dohwa.hi()); // 여기는 도화 캠퍼스
console.log(dohwa.bye(3)); // 잘가라는 인사를 3번 했습니다.

// never : 함수가 절대 끝나지 않는 경우
function goingon(): never {
  while (true) {
    console.log('gogo!');
  }
} // 무한 루프에 빠져 함수가 끝나지 않음

// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기
const sum1 = (num1: number, num2: number): void => {
  return console.log(num1 + num2);
};
sum1(5, 11); // 테스트는 이렇게 하기!

// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기
// ...a 의 의미..?
function sum2(...a: number[]): number {
  let sum = 0;
  a.forEach((el) => (sum += el));
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10)); // 20
