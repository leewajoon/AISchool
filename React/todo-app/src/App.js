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

//실습

import { useState, useRef, useCallback } from "react";
import MemberInsert from "./MemberInsert";
import MemberList from "./MemberList";
import MemberTemplate from "./MemberTemplate";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [updata, setUpdata] = useState({
    id: "",
    pw: "",
    email: "",
    gender: "",
  });

  const nextId = useRef(4);

  const onInsert = useCallback(
    (id, pw, email, gender) => {
      const todo = {
        id: id,
        pw: pw,
        email: email,
        gender: gender,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onUpdata = useCallback(
    (id) => {
      const upDataValue = todos.filter((todo) => todo.id === id)[0];
      const copyUpData = {
        ...updata,
        id: upDataValue.id,
        pw: upDataValue.pw,
        email: upDataValue.email,
        gender: upDataValue.gender,
      };
      setUpdata(copyUpData);
    },
    [todos]
  );

  return (
    <MemberTemplate>
      <MemberInsert onInsert={onInsert} updata={updata} />
      <MemberList todos={todos} onRemove={onRemove} onUpdata={onUpdata} />
    </MemberTemplate>
  );
};

export default App;
