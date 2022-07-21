// import logo from "./logo.svg";
import "./FormInput.css";
// import { Component, component } from "react";
// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import FormInput from "./FormInput";
// import RefSample from "./RefSample";
// import ValidationSample from "./ValidationSample";
// import { Component } from "react";
// import ScrollBox from "./ScrollBox";
// import InterationSample from "./IterationSample";
import FormInput from "./FormInput";

// function App() {
//   const name = "리액트";
//   const style = {
//     // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px", // font-size -> fontSize
//     fontweight: "bold", //font-weight -> fontWeight
//     padding: 16,
//   };
//   return <div style={style}>{name}</div>;
// }

// 88p
const App = () => {
  return <FormInput />;
};

export default App;

// 92p
// const App = () => {
//   return <MyComponent name="React" />;
// };

// 94P
// const App = () => {
//   return <MyComponent>리액트</MyComponent>;
// };

// 96p
// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={7}>
//       리액트
//     </MyComponent>
//   );
// };

// 104p
// const App = () => {
//   return <Counter />;
// };

// // 113p
// const App = () => {
//   return <InterationSample />;
// };

// import React, { Component } from "react";
// import ScrollBox from "./ScrollBox";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// 181p

//

//186p
// import React, { Component } from "react";
// import LifeCycleSample from "./LifeCycleSample";
// import ErrorBoundary from "./ErrorBoundary";

// // 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: "#000000",
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }
// export default App;
