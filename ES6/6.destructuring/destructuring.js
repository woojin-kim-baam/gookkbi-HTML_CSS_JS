/*
    디스트럭처링 :
    - 구조화된 배열 혹은 객체를 비구조화, 구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 혹은 객체에서 필요한 데이터만 추출해서 변수로 사용할 수 있도록 함
*/
let fruits = ["apple", "banana", "cacao"];
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

let king = {
  name: "이성계",
  ho: "태조",
  address: "고려",
};

// const name = king.name;
// const ho = king.ho;
// const address = king.address;

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수에 할당
    - 할당 기준 : 인덱스
*/
// let fruits = ["apple", "banana", "cacao"]; //위에꺼 안보여서 밑에 다시 넣은거, 별 의미 x
const [fruit1, fruit2, fruit3, fruit4] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4); // 없는 값은 undefined

console.log("========================================");

/*
    spread 연산자를 활용
    - 배열 destructuring 마지막에 spread 연산자를 사용하면 남은 모든 요소로 새로운 배열을 생성
*/
const [anotherFruit, ...othersFruits] = fruits;
console.log(anotherFruit);
console.log(othersFruits);

console.log("========================================");

/*
객체 디스트럭처링
- 객체의 각 속성을 객체로부터 추출하여 변수에 할당
- 할당 기준은 키
*/

// let king = {
//     name: "이성계",
//     ho: "태조",
//     address: "고려",
//   }; 이것도 위와 같은 이유, 별 의미 x

let king2 = {
  name: "이방원",
  ho: "태종",
  address: "고려",
};

// const { name, ho, address, age } = king; // console.log(age); => undefined
// 속성명은 같게 적어줘야함 다르게 적으면 undefined 반환
const { name: name1, ho: ho1, address: address1 } = king; // 이름을 다르게 적어줘야함
const { name, ho, address } = king2;
console.log(name);
console.log(ho);
console.log(address);
console.log("=========");
console.log(name1);
console.log(ho1);
console.log(address1);

console.log("========================================");

/*
    spread 연산자를 활용
    - 객체 destructuring 마지막 스프레드 연산자를 사용하면 나머지 모든 속성을 묶어서 새로운 객체를 생성
*/
const { address: address2, ...kingInfo } = king;
console.log(address2);
console.log(kingInfo);

console.log("========================================");
