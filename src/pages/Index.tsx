import type { Component } from "solid-js";
import TodoList from "../components/TodoList";
import Input from "../components/Input";
import { useTodo } from "../store/todo";

const IndexPage: Component = () => {
  const { state, addTodo, toggleTodo, removeTodo } = useTodo();

  return (
    <>
      <h1>Page 1</h1>
      <Input addTodo={addTodo} />
      <TodoList
        todos={state.todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </>
  );
};

export default IndexPage;
