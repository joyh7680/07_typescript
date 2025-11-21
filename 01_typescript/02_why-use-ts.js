//기능정의 : 전달되는 to do (할일) 객체의 상태를 반전시킨 새로운 todo 객체를 반환하는 함수
function toggleTodo(todo) {
  return {
    text: todo.text,
    done: !todo.done,
  };
}

//테스트 (given (테스트할데이터), when (기능실행), then (기대값))
//given
const todo = { id: 1, text: "복습하기", done: false };
//when
const result = toggleTodo(todo);
//then
console.log('expect: {id: 1, text: "복습하기", done: false }'); // { text: 'Learn TypeScript', done: true }
console.log("actual:", result); // { text: 'Learn TypeScript', done: true }')
