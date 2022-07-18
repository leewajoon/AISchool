// import React, { Component } from "react";

// class EventPractice extends Component {
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           onChange={(e) => {
//             // console.log(e);
//             console.log(e.target.value);
//           }}
//         />
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({
//               message: "",
//             });
//             console.log(this.state.message);
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   // handleChange(e) {
//   //   this.setState({
//   //     message: e.target.value, //아래 내용으로 바꿀수 있다
//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };
//   // handleClick() {
//   //   this.state({
//   //     message: "",  // 아래 내용으로 바꿀수 있다
//   handleClick = () => {
//     this.state({
//       message: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//     id: "",
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(
//       "ID : " +
//         this.state.id +
//         " 유저명 : " +
//         this.state.username +
//         " 비고 : " +
//         this.state.message
//     );
//     this.setState({
//       id: "",
//       username: "",
//       message: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="id"
//           placeholder="ID"
//           value={this.state.id}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <input
//           type="text"
//           name="username"
//           placeholder="유저명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />

//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };
//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="유저명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

import { useState } from "react";

// const EventPractice = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ": " + message);
//     username("");
//     message("");
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="유저명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해보세요"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="유저명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
