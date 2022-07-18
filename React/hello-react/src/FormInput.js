import { useState } from "react";

const FormInput = () => {
  const [form, setForm] = useState({
    id: "",
    pw: "",
    jumin1: "",
    jumin2: "",
    pn1: "",
    pn2: "",
    pn3: "",
  });
  const { id, pw, jumin1, jumin2, pn1, pn2, pn3 } = form;
  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(
      "아이디:" +
        id +
        "\n" +
        "비밀번호:" +
        pw +
        "\n" +
        "주민번호:" +
        jumin1 +
        "-" +
        jumin2 +
        "\n" +
        "전화번호:" +
        pn1 +
        "-" +
        pn2 +
        "-" +
        pn3
    );
    setForm({
      id: "",
      pw: "",
      jumin1: "",
      jumin2: "",
      pn1: "",
      pn2: "",
      pn3: "",
    });
  };
  // const onKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     onClick();
  //   }
  // };
  return (
    <div>
      <h1>회원 가입</h1>
      <table border="1">
        <tr>
          <th>아이디</th>
          <td>
            <input
              type="text"
              name="id"
              placeholder=" ( 최소6~최대10,숫자와알파벳만 사용)"
              size="30"
              value={id}
              onChange={onChange}
            ></input>
          </td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td>
            <input
              type="password"
              name="pw"
              placeholder="(최소6~최대10,숫자와알파벳만 사용)"
              size="30"
              value={pw}
              onChange={onChange}
            ></input>
          </td>
        </tr>
        <tr>
          <th>주민번호</th>
          <td>
            <input
              type="text"
              name="jumin1"
              maxlength="6"
              value={jumin1}
              onChange={onChange}
            ></input>
            -
            <input
              type="password"
              name="jumin2"
              maxlength="7"
              value={jumin2}
              onChange={onChange}
            ></input>
          </td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td>
            <input
              type="text"
              name="pn1"
              maxlength="3"
              value={pn1}
              onChange={onChange}
            ></input>
            -
            <input
              type="text"
              name="pn2"
              maxlength="4"
              value={pn2}
              onChange={onChange}
            ></input>
            -
            <input
              type="text"
              name="pn3"
              maxlength="4"
              value={pn3}
              onChange={onChange}
            ></input>
          </td>
        </tr>
        <tr>
          <button onClick={onClick}>확인</button>
        </tr>
      </table>
    </div>
  );
};
export default FormInput;
