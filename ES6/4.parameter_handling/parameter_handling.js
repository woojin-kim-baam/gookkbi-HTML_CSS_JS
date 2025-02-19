/*
    매개변수 기본값 : 
    - 함수 호출 시 매개변수를 전달하지 않으면 사용할 기본값을 지정할 수 있음
*/
const add = (a = 5, b = 10) => a + b;
console.log(add()); // 15
console.log(add(50, 200)); // 250
console.log(add(50)); // 60

console.log("========================================");

/*
    rest 매개변수 : 
    - 함수 선언 시 매개변수 앞에 ... 을 붙여서 정의한 매개변수
    - 함수에 전달받은 매개변수의 배열을 전달 받음
    - 다른 매개변수와 같이 rest 매개변수를 사용할 땐 rest 매개변수가 제일 마지막에 위치해야 함
*/
const restFunc = (...arg) => console.log(arg);
restFunc(1, 2, 3, 4, 5);

const restFunc2 = (arg1, ...arg2) => {
  console.log(arg1);
  console.log(arg2);
};
restFunc2(1, 2, 3, 4, 5);

console.log("========================================");

/*
    spread 연산자 : 
    - ...을 사용하여 피연산자의 요소를 하나씩 분리
    - 피연산자는 반드시 반복가능한 객체 (배열, 객체, ...)이어야 함
*/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);
console.log(1, 2, 3, 4, 5); // ...numbers와 같은 값이 나옴

console.log("========================================");

// 배열 복사에 사용
let newNumbers = [...numbers];
console.log(newNumbers);

newNumbers[0] = 99;
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(newNumbers); // [99, 2, 3, 4, 5]
// 깊은 복사가 됬음을 알 수 있다.

console.log("========================================");

// 배열 연결에 사용, concat 사용말고 spread를 통해
const numbers2 = [6, 7, 8];
// newNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
newNumbers = [...numbers, ...numbers2];
console.log(newNumbers);
newNumbers = [...numbers2, ...numbers];
console.log(newNumbers);

console.log("========================================");

// 배열 요소 추가에 사용(추가해서 새로운 배열을 만들고 싶을 때)
newNumbers = [...numbers, 1, 2];
console.log(newNumbers);

console.log("========================================");

// 객체 복사, 연결, 요소 추가에 사용
const king = {
  name: "이방원",
  ho: "태종",
};

let newKing = { ...king };
console.log(newKing);

const kingInfo = {
  ho: "의안대군",
  address: "고려",
};

newKing = { ...king, ...kingInfo };
console.log(newKing); // 같은 키가 있다면 value는 뒤에온거에 덮어씌워짐

newKing = { ...king, ho: "의안대군", birth: "1367-05-16" };
console.log(newKing);
