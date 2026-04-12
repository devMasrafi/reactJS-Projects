import CardOne from "../components/cards/CardOne";
import Button from "../components/btn/Button";
import { useEffect, useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [addedTitle, setAddedTitle] = useState("");
  const [addedDiscription, setAddedDiscription] = useState("");

  const todoTitle = (e) => {
    setAddedTitle(e.target.value);
  };
  const todoDiscription = (e) => {
    setAddedDiscription(e.target.value);
  };

  const todoSubmit = (e) => {
    e.preventDefault();
    // console.log(`submit button clicked ${Date.now()}`);

    if (addedTitle == "") {
      console.log(`title can not be empty`);
      return;
    }
    if (addedDiscription == "") {
      console.log(`discribtion can not be empty`);
      return;
    }

    const newTodo = {
      id: Date.now(),
      todoTitle: addedTitle,
      todoDetails: addedDiscription,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);

    setAddedTitle("");
    setAddedDiscription("");
  };

  //   completed function
  const completedTodo = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  //   delete Function
  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  //   checking the array after state is done
  useEffect(() => {
    console.log(`todo list after all:`, todoList);
  }, [todoList]);

  return (
    <div className="flex justify-around mt-20 w-6xl mx-auto ">
      <div>
        {/* form */}
        <form onSubmit={todoSubmit} className="w-100">
          <div className="flex flex-col ">
            <label
              htmlFor="todoTitle"
              className="text-lg pb-3 capitalize font-medium tracking-wider"
            >
              create Todo
            </label>
            <input
              onChange={todoTitle}
              value={addedTitle}
              type="text"
              placeholder="type here..."
              className="border px-3 py-1 rounded-lg outline-none mb-4"
            />
            <textarea
              type="text"
              onChange={todoDiscription}
              value={addedDiscription}
              placeholder="add details here..."
              rows={8}
              className="border mb-6 rounded-lg px-2 py-3 resize-none outline-none"
            />
          </div>
          <div>
            <Button className={`text-white bg-dark-green`}>submit</Button>
          </div>
        </form>
      </div>

      {/* list for todo */}
      <div className=" h-135 overflow-y-auto scrollbar-hide">
        {todoList.length === 0 ? (
          <CardOne />
        ) : (
          todoList.map((todo) => (
            <CardOne
              key={todo.id}
              todoTitle={todo.todoTitle}
              todoDetails={todo.todoDetails}
              isCompleted={todo.isCompleted}
              buttonOneClick={() => completedTodo(todo.id)}
              buttonTwoClick={() => deleteTodo(todo.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoApp;
