import React from "react";
import "./MemberListItem.scss";

const MemberListItem = ({ todo, onRemove, onUpdata }) => {
  const { id, pw, email, gender } = todo;
  return (
    <div className="MemberListItem">
      <form method="post">
        <table width="70%" border="1">
          <tr>
            <th>아이디</th>
            <td width="70%">{id}</td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>{pw}</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>성별</th>
            <td>{gender}</td>
          </tr>
        </table>
      </form>

      <div
        className="rectify"
        onClick={() => {
          onUpdata(id);
        }}
      >
        <button>수정</button>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <button>삭제</button>
      </div>
    </div>
  );
};

export default MemberListItem;
