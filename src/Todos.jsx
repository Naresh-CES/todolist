import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

// Fetch https://jsonplaceholder.typicode.com/todos
// Display the result as a todo list (only the first 10 items)
// Search on the content
// Filter on the status (completed or not)
// Highlight the search term

const Todos = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [data, setData] = useState();

  function todoFetch() {
    axios
      .get(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    todoFetch();
  }, []);

  console.log(typeof data);
  return (
    <div>
      <Todo props={data} />;
    </div>
  );
};

export default Todos;
