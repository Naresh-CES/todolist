import React from "react";

interface TodoList {
  id: number;
  title: string;
  completed: string;
}

const Todo = (props: TodoList) => {
  console.log(props);
  return (
    <ul>
      <li>{props.id}</li>
      <li>{props.title}</li>
      <li>{props.completed}</li>
    </ul>
  );
};

export default Todo;
