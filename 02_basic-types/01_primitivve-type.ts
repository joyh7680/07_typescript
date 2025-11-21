export {} 

/*
  📌 변수 선언 및 초기화 
  1. 타입스크립트에서는 변수 선언 시 타입을 명시적으로 지정해야 함
  2. 작성법
    let|const 변수명: 타입 = 값;
  3. 타입을 명시하지 않을 경우 유의사항 
    1) 변수 선언 시    : any 타입으로 추론됨
    2) 특정 값 할당 시 : 해당 값의 타입으로 추론됨
*/

let noType: any = 123; // 어떤 타입도 허용
noType = "문자열도 가능";
noType = true; // 어떤 타입도 허용


/*
  📌 기본 타입 (Primitive Types)
  1. 원시 값을 표현하는 타입
  2. 종류
    1) number
    2) string
    3) boolean
    4) null
    5) undefined
    6) symbol
    7) bigint
*/

let num: number;
num = 10;
// num = '123';

let str: string;
str = `hello ${num}`
str = 'hollo' + 'world';
// str = 10;
// str = null; // 오류 발생
// str = undefined; // 오류 발생

let bool : boolean;
bool = false
// bool = 1 ; // 오류 발생

let n: null;
n = null;
// null = undefined; //오류 발생

let u: undefined;
u = undefined;
// u = null; // 오류 발생

let big: bigint;
big = 1234567890123456789012345678901234567890n;
// let small: number = 1234567890123456789012345678901234567890; //n이 없으면 잘 담기는 것처럼 보여짐 
// big = 10; // 오류 발생

let sym: symbol;
sym = Symbol("mySymbol");
