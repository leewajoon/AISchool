import React from "react";
import "./MemberList.scss";

const MemberList = () => {
  return (
    <div className="MemberList">
      <form method="post">
        <table width="100%" border="1">
          <tr>
            <th>아이디</th>
            <td width="70%">id</td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>pw</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td></td>
          </tr>
          <tr>
            <th>성별</th>
            <td></td>
          </tr>
        </table>
      </form>

      <div className="rectify">
        <button>수정</button>
      </div>
      <div className="remove">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default MemberList;
