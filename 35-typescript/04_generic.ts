function numArrLen(num: number[]): number {
  return num.length;
}
function strArrLen(str: string[]): number {
  return str.length;
}

numArrLen([1, 2, 3, 4]); // 4
strArrLen(['a', 'b', 'c']); //3

console.log(numArrLen([1, 2, 3, 4]));
console.log(strArrLen(['a', 'b', 'c']));

// generic
// 선언할 때 타입을 지정하기 어려운 경우 존재
// * 데이터 타입을 외부에서 지정
// * 생성 시점에서 타입을 명시
// => 재사용성 증가 !!!!!!
// => 타입을 변수처럼 사용하는 것
// 형태는 주로 <T>를 사용함 => 사용 시 T는 type만 작성 가능
function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<number>([1, 2, 3])); //3
console.log(arrLen<string>(['a', 'b', 'c'])); // 3

/////////////////////////////////////////////////////////
function print3<T>(x: T, y: T): void {
  console.log(x, y);
}
print3<string>('hi', '어려움');

function print4<T, U>(x: T, y: U): void {
  console.log(x, y);
}

print4<string, number>('hi', 1);

// interface와 generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone13Pro: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: {
    color: 'black',
    storage: 256,
  },
};

console.log(iphone13Pro);

const arrElement = <T>(arr: T[], idx: number): T | boolean => {
  if (idx > arr.length) {
    return false;
  }
  return arr[idx];
};

console.log(arrElement<string>(['a', 'b', 'c'], 0));

// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!

console.log(arrElement<string>(['a'], 2)); // false
