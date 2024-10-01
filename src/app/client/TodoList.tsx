"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { TodoForm } from "./TodoForm";
import TodoItem from "./TodoItem";

type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchTodos() {
    setLoading(true);
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTodos(data);
    setLoading(false);
  }

  async function toggle(id: number, checked: boolean) {
    const response = await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({
        id,
        checked,
      }),
    });
    if (response.ok) {
      fetchTodos();
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="max-w-md mx-auto mt-8 p-4">
      <TodoForm onTodoAdded={fetchTodos} />
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggle} />
        ))}
      </ul>
    </div>
  );
}
