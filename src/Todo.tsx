import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TodoListObj {
  id: number;
  title: string;
  completed: string;
}

interface EnumSer extends Array<TodoListObj> {}

const Todo = (props: any) => {
  // const map2 = new Map(Object.entries(props));

  console.log(props.data);
  const todoData: EnumSer = props.data && props.data.slice(0, 10);

  return (
    <div className='card'>
      {todoData.map((res: TodoListObj) => (
        <ul key={uuidv4()}>
          <li>{res.id}</li>
          <li>{res.title}</li>
          <li>{!res.completed ? 'false' : 'true'}</li>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
