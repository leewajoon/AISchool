import MemberListItem from "./MemberListItem";
import "./MemberList.scss";

const MemberList = ({ todos, onRemove, onUpdata }) => {
  return (
    <div className="MemberList">
      {todos.map((todo) => (
        <MemberListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onUpdata={onUpdata}
        />
      ))}
    </div>
  );
};

export default MemberList;
