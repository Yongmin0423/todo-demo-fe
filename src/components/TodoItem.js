import React from "react";
import { Col, Row } from "react-bootstrap";
//1. 끝남 버튼을 누르면 isComplete가 true로 변경됨
// >> put으로 업데이트가 필요. 해당 아이디를 찾아서 업데이트 해줘야 함.
//2. isComplete가 true라면, 끝남 버튼은 '취소' 버튼으로 변경됨
//3. isComplete가 true라면, 배경 색이 붉은 색으로 변경됨

const TodoItem = ({ item, putTask, deleteItem }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button
              className="button-delete"
              onClick={() => deleteItem(item._id)}
            >
              삭제
            </button>
            <button className="button-delete" onClick={() => putTask(item._id)}>
              {item.isComplete ? `안끝남` : `끝남`}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
