import React, { useState, useCallback } from "react";
import "./MemberInsert.scss";

const MemberInsert = (onInsert) => {
  const [form, setForm] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    setForm({
      id: "",
      pw: "",
    });
  };

  return (
    <form method="post">
      <table width="100%" border="1">
        <tr>
          <th>아이디</th>
          <td>
            <input
              type="text"
              name="id"
              placeholder=" ( 최소6~최대10,숫자와알파벳만 사용)"
              size="30"
            />
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
            />
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <input type="text" name="email" /> @{" "}
            <select>
              <option label="메일주소선택" />
              <option>gmail.com</option>
              <option>naver.com</option>
              <option>daum.net</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>성별</th>
          <td>
            <input type="radio" name="gender" value="남" />
            남자
            <input type="radio" name="gender" value="여" />
            여자
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <button type="submit">등록</button>
          </th>
        </tr>
      </table>
    </form>
  );
};

export default MemberInsert;
