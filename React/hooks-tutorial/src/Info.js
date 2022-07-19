// import { useEffect, useState } from "react";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   //194p
//   useEffect(() => {
//     console.log("effect");
//     return () => {
//       console.log("umount");
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

//202p
// import { useReducer } from "react";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

// const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     name: "",
//     nickname: "",
//   });
//   const { name, nickname } = state;
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="nickname" value={nickname} onChange={onChange} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

//213p

import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
