import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const [boardlist, setBoardList] = useState({
    boardList: [],
  });

  const [article, setArticle] = useState({
    board_num: 0,
    board_Write: "",
    board_title: "",
    board_date: "",
  });

  //0:글쓰기, 1:상세보기, 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 0 });

  // 글목록
  const getList = () => {
    axios
      .get("http://localhost:8008/list", {})
      .then((res) => {
        const { data } = res;
        console.log("data : ", data);
        setBoardList({
          boardList: data,
        });
        setActionMode({
          ...actionMode,
          mode: 0, //글쓰기
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //상세보기
  const handleDetail = (e) => {
    alert("handleDetail(actionMode) :" + actionMode.mode);
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("detail : ", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });
          setActionMode({
            ...actionMode,
            mode: 1, //상세보기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //수정폼 보기
  const handleUpdateForm = (e) => {
    alert(
      "handleUpdateForm(actionMode) : " + actionMode.mode + "," + e.target.id
    );

    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("handleUpdateForm=>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });
          setActionMode({
            ...actionMode,
            mode: 2, //글수정하기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handUpdate=>", article);
    axios
      .post("http://localhost:8008/detail", { article: article })
      .then((res) => {
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    // alert("글쓰기");
    // 글쓰기
    return (
      <div>
        <BoardWrite handlelist={getList}></BoardWrite>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    // alert("상세정보");
    // 상세보기
    return (
      <div>
        <BoardDetail article={article} handelist={getList}></BoardDetail>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    // alert("글수정");
    // 글수정
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
        ></BoardList>
      </div>
    );
  }
}

export default App;
