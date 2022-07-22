// import TodoInsert from "./TodoInsert";
// import TodoTemplate from "./TodoTemplate";
// import TodoList from "./TodoList";
// import { useState, useRef, useCallback } from "react";

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: "리액트의 기초 알아보기",
//       checked: true,
//     },
//     {
//       id: 2,
//       text: "컴포넌트 스타일링해 보기",
//       checked: true,
//     },
//     {
//       id: 3,
//       text: "일정 관리 앱 만들어 보기",
//       checked: false,
//     },
//   ]);

//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1; // nextId 1 씩 더하기
//     },
//     [todos]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos]
//   );

//   const onToggle = useCallback(
//     (id) => {
//       setTodos(
//         todos.map((todo) =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo
//         )
//       );
//     },
//     [todos]
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

// export default App;

//실습

// import { useState, useRef, useCallback } from "react";
// import MemberInsert from "./MemberInsert";
// import MemberList from "./MemberList";
// import MemberTemplate from "./MemberTemplate";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [updata, setUpdata] = useState({
//     id: "",
//     pw: "",
//     email: "",
//     gender: "",
//   });

//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     (id, pw, email, gender) => {
//       const todo = {
//         id: id,
//         pw: pw,
//         email: email,
//         gender: gender,
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1;
//     },
//     [todos]
//   );
//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos]
//   );

//   const onUpdata = useCallback(
//     (id) => {
//       const upDataValue = todos.filter((todo) => todo.id === id)[0];
//       const copyUpData = {
//         ...updata,
//         id: upDataValue.id,
//         pw: upDataValue.pw,
//         email: upDataValue.email,
//         gender: upDataValue.gender,
//       };
//       setUpdata(copyUpData);
//     },
//     [todos]
//   );

//   return (
//     <MemberTemplate>
//       <MemberInsert onInsert={onInsert} updata={updata} />
//       <MemberList todos={todos} onRemove={onRemove} onUpdata={onUpdata} />
//     </MemberTemplate>
//   );
// };

// export default App;

// 11장

import React, { useRef, useState, useCallback, useReducer } from "react";
import TodoInsert from "./TodoInsert";
import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
//295p
// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos);

//   // 고유 값으로 사용 될 id
//   // ref 를 사용하여 변수 담기
//   const nextId = useRef(2501);

// const onInsert = useCallback((text) => {
//   const todo = {
//     id: nextId.current,
//     text,
//     checked: false,
//   };
//   setTodos((todos) => todos.concat(todo));
//   nextId.current += 1; // nextId 1 씩 더하기
// }, []);

// const onRemove = useCallback((id) => {
//   setTodos((todos) => todos.filter((todo) => todo.id !== id));
// }, []);

// const onToggle = useCallback((id) => {
//   setTodos((todos) =>
//     todos.map((todo) =>
//       todo.id === id ? { ...todo, checked: !todo.checked } : todo
//     )
//   );
// }, []);

// 298p

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case "REMOVE": // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE": // 토글
      // { type: 'REMOVE', id: 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
