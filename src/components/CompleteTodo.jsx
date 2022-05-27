import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="area3">
      <p>完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
