import { useReducer, useRef } from "react";

function reducer(form, action) {
  return {
    ...form,
    [action.name]: action.value,
  };
}

const FormReducer = () => {
  const [form, setForm] = useReducer(reducer, {
    id: "",
    pw: "",
    jumin1: "",
    jumin2: "",
    pn1: "",
    pn2: "",
    pn3: "",
  });

  const { id, pw, jumin1, jumin2, pn1, pn2, pn3 } = form;
  // const inputid = useRef();
  // const inputpw = useRef();
  // const inputjumin1 = useRef();
  // const inputjumin2 = useRef();
  // const inputpn1 = useRef();
  // const inputpn2 = useRef();
  // const inputpn3 = useRef();
  // const inputbtn = useRef();
  const input_ref = useRef([]);

  const onChange = (e) => {
    setForm(e.target);
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

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        // inputpw.current.focus();
        input_ref.current[1].focus();
      } else if (e.target.name === "pw") {
        // inputjumin1.current.focus();
        input_ref.current[2].focus();
      } else if (e.target.name === "jumin1") {
        // inputjumin2.current.focus();
        input_ref.current[3].focus();
      } else if (e.target.name === "jumin2") {
        // inputpn1.current.focus();
        input_ref.current[4].focus();
      } else if (e.target.name === "pn1") {
        // inputpn2.current.focus();
        input_ref.current[5].focus();
      } else if (e.target.name === "pn2") {
        // inputpn3.current.focus();
        input_ref.current[6].focus();
      } else if (e.target.name === "pn3") {
        // inputbtn.current.focus();
        input_ref.current[7].focus();
      }
    }
  };
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
              onKeyPress={onKeyPress}
              // ref={inputid}
              ref={(el) => (input_ref.current[0] = el)}
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
              onKeyPress={onKeyPress}
              // ref={inputpw}
              ref={(el) => (input_ref.current[1] = el)}
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
              onKeyPress={onKeyPress}
              // ref={inputjumin1}
              ref={(el) => (input_ref.current[2] = el)}
            ></input>
            -
            <input
              type="password"
              name="jumin2"
              maxlength="7"
              value={jumin2}
              onChange={onChange}
              onKeyPress={onKeyPress}
              // ref={inputjumin2}
              ref={(el) => (input_ref.current[3] = el)}
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
              onKeyPress={onKeyPress}
              // ref={inputpn1}
              ref={(el) => (input_ref.current[4] = el)}
            ></input>
            -
            <input
              type="text"
              name="pn2"
              maxlength="4"
              value={pn2}
              onChange={onChange}
              onKeyPress={onKeyPress}
              // ref={inputpn2}
              ref={(el) => (input_ref.current[5] = el)}
            ></input>
            -
            <input
              type="text"
              name="pn3"
              maxlength="4"
              value={pn3}
              onChange={onChange}
              onKeyPress={onKeyPress}
              // ref={inputpn3}
              ref={(el) => (input_ref.current[6] = el)}
            ></input>
          </td>
        </tr>
        <tr>
          <button
            onClick={onClick}
            /*ref={inputbtn}*/ ref={(el) => (input_ref.current[7] = el)}
          >
            확인
          </button>
        </tr>
      </table>
    </div>
  );
};
export default FormReducer;
