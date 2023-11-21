// math2 모듈을 불러와서 사용

const math2 = require('./math2');
console.log(math2.add(3,4));
console.log(math2.E);

// 구조분해할당은 내보낸 값과 동일한 이름으로
const{add , PI, E} = require('./math2');
console.log(PI);