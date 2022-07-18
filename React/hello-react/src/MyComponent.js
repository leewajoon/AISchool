import PropTypes from "prop-types";
import { Component } from "react";

// 88p

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// 92p

// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// 94p
// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다.
//       <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// 96p
// const MyComponent = (props) => {
//   const { name, favoriteNumber, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// 102p
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
