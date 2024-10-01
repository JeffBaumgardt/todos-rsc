import { getTodos } from "@/lib/todos";
import { TodoForm } from "./TodoForm";
import TodoItem from "./TodoItem";
import { toggle } from "./actions";

export default async function TodoList() {
  const todos = await getTodos();

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <TodoForm />
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggle} />
        ))}
      </ul>
    </div>
  );
}
