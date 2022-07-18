import { Component } from "react";

class FormInputClass extends Component {
  state = {
    id: "",
    pw: "",
    jumin1: "",
    jumin2: "",
    pn1: "",
    pn2: "",
    pn3: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.pw.focus();
      } else if (e.target.name === "pw") {
        this.jumin1.focus();
      } else if (e.target.name === "jumin1") {
        this.jumin2.focus();
      } else if (e.target.name === "jumin2") {
        this.pn1.focus();
      } else if (e.target.name === "pn1") {
        this.pn2.focus();
      } else if (e.target.name === "pn2") {
        this.pn3.focus();
      } else if (e.target.name === "pn3") {
        this.button.focus();
      }
    }
  };

  onClick = () => {
    alert(
      "아이디:" +
        this.state.id +
        "\n" +
        "비밀번호:" +
        this.state.pw +
        "\n" +
        "주민번호:" +
        this.state.jumin1 +
        "-" +
        this.state.jumin2 +
        "\n" +
        "전화번호:" +
        this.state.pn1 +
        "-" +
        this.state.pn2 +
        "-" +
        this.state.pn3
    );
    this.setState({
      id: "",
      pw: "",
      jumin1: "",
      jumin2: "",
      pn1: "",
      pn2: "",
      pn3: "",
    });
  };

  render() {
    return (
      <div>
        <h1 align="center">회원 가입</h1>
        <table align="center" border="1">
          <tr>
            <th>아이디</th>
            <td>
              <input
                type="text"
                name="id"
                placeholder=" (아이디)"
                value={this.state.id}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.id = ref;
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <input
                type="password"
                name="pw"
                placeholder="(비밀번호)"
                value={this.state.pw}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.pw = ref;
                }}
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
                placeholder="(앞자리6자리)"
                value={this.state.jumin1}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.jumin1 = ref;
                }}
              ></input>
              -
              <input
                type="password"
                name="jumin2"
                maxlength="7"
                placeholder="(뒷자리7자리)"
                value={this.state.jumin2}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.jumin2 = ref;
                }}
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
                placeholder="(3자리)"
                value={this.state.pn1}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.pn1 = ref;
                }}
              ></input>
              -
              <input
                type="text"
                name="pn2"
                maxlength="4"
                placeholder="(4자리)"
                value={this.state.pn2}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.pn2 = ref;
                }}
              ></input>
              -
              <input
                type="text"
                name="pn3"
                maxlength="4"
                placeholder="(4자리)"
                value={this.state.pn3}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                ref={(ref) => {
                  this.pn3 = ref;
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <button
                onClick={this.onClick}
                ref={(ref) => {
                  this.button = ref;
                }}
              >
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default FormInputClass;
