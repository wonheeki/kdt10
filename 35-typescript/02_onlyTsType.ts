// tuple :
let drink: [string, string] = ['cola', 'cider'];
drink[0] = '콜라';
drink[1] = '사이다';
// drink[2]('환타'); // Tuple의 한계를 넘기 때문에 에러 발생
// drink.push('환타') // 요소 추가는 가능하지만 tuple 타입을 사용하는 이유가 사라지게 됨
console.log(drink);

// readonly : 요소타입과 순서와 길이를 고정
let drink2: readonly [string, number] = ['사이다', 1500];
// drink.push('환타'); // type error

// enum type
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.user);

enum Cafe {
  americano = '아메리카노',
  latte = '라떼',
}

enum Cake {
  choco,
  cream,
  fruit = '과일 케이크',
  //   sugar, // 중간에 값을 지정해줬으면 그 이후부터는 값을 지정해줘야함
}

console.log(Cake.choco);
console.log(Cake.fruit);

// 명시적으로
let value: any;
value = 1;
value = 'str';
value = false;
value = null;
value = undefined;
value = [1, 2, 'str', [1, '2']];

// 암묵적
let value2;
value2 = 100;
value2 = 'str2';
value2 = true;
value2 = null;
value2 = undefined;
value2 = [1, 2, 'str', [1, '2']];

// 1. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
let olimpic_newgame: readonly [object, boolean];
olimpic_newgame = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

//2. olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
// olimpic_newgame[1] = false;

//////////////////////////////////////////////////////////
// type & interface

// interface
interface Student {
  name: string;
  isPassed: boolean;
}

// 직접 만든 Student라는 interface를 타입으로 지정
const student: Student = {
  name: 'layla',
  isPassed: true,
};

const student2: Student = {
  name: 'luna',
  isPassed: false,
};

// object 타입 사용 시 key의 value의 type을 지정하지 않음
const student3: object = {
  name: 'yuki',
  isPassed: true,
};

// interface 상속
enum Score {
  A = 'A',
  b = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  backNumber?: number; // ? : 있어도 되고 없어도 되는 값
  [grade: number]: Score; // key의 타입 지정
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'picher',
  height: 193,
  //   backNumber: 20,
  1: Score.A, // 1: 'A' , 상속 시킨 값은 없어도 문제없이 출력이 됨??
};

console.log(otani);

// type
type Gender = 'Female' | 'Male';
const gender: Gender = 'Female';
// const gender2: Gender = 'female'; // 타입에서 지정하지 않은 값이 들어올 경우 type에러

// enum vs type
enum UserNumber {
  one = 1,
  ten = 10,
}

type UserNumber2 = 1 | 10;

const num1: UserNumber = UserNumber.ten;
const num2: UserNumber2 = 1;
// const num3: UserNumber2 = 2; // 1과 10 말고 다른 값은 안됨

// 교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  price: number;
}

interface Car {
  name: string;
  price: number;
  color: string;
}

// 타입 합치기
type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  price: 56000,
  color: 'blue',
};

// type Gender = 'Female' | 'Male'
type Person = {
  name: string;
  age: number;
  hobby: string[];
  gender: Gender;
};

let layla: Person = {
  name: 'layla',
  age: 20,
  gender: 'Female',
  hobby: ['수영', '등산'],
};
console.log(layla);

// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
