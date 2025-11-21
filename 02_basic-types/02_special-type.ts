//특수타입 : any, unknown, never

export {};

/*
  📌 any 타입
  1. 모든 타입을 허용할 때 사용
  2. 컴파일러의 타입 검사를 하지 않음 
  3. 타입스크립트의 안정성을 포기하는 개념이므로 특별한 경우 외에 권장하지 않음
*/

let anything: any;
anything = 10;
/*
console.log(typeof anything); // number
anything = "hello";
console.log(typeof anything); // string
anything = [1, 2, 3];
console.log(typeof anything); // object
*/
console.log(anything.letgth); // any타입이라서 그냥 접근이 가능
// anything.do(); // 컴파일 에러는 없지만 런타임시 에러가 발생됌 (컴파일시 오류를 알지 못하니 코드의 안전성떨어짐)

// *any 보다는 unknown 타입을 사용하는 것이 더 안전함*

/*
  📌 unknown 타입
  1. any 타입과 유사하게 모든 타입을 허용하지만 더 안전한 타입
  2. 타입 검사가 엄격함
     → typeof 연산자 또는 타입 검사를 위한 함수를 사용하여  
       타입을 체크한 후 프로퍼티 접근 또는 연산을 수행할 수 있음 
  3. 주로 API 데이터같이 타입을 모를 때 임시 타입으로 사용 
*/

let what: unknown; //unknown 모든타입허용 but 그 값을 사용할 때는 타입 검사를 반드시 하게 만드는 타입
// 즉, “아무거나 담을 수는 있지만, 진짜로 쓰려면 확인 먼저 해!” 라는 의미.
what = 10;
what = "hello";

// console.log(what.letgth); // unknown 타입이므로 타입 검사 후에 프로퍼티에 접근하도록 유도 (컴파일 에러)
/*
여기서 what이 unknown 이니까 length가 있는지 없는지 TypeScript가 알 수가 없음.
그래서 컴파일 단계에서:
❌ “unknown 타입은 바로 프로퍼티에 접근할 수 없습니다.”
라고 에러를 냄.
*/

//타입 체크
if (typeof what === "string") {
  console.log(what.length);
}

what = [1, 2, 3];

// console.log(what.length); // 여전히 에러

// 애초에 제대로 타입 명시를 해놨다면 타입체크안해도됌

/*
if(typeof what === "object"){ //what이 배열인지
    console.log(what.length);
}
 */

// array타입 검사
if (Array.isArray(what)) {
  console.log(what.length);
}
