"use client";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoItem({
  todo,
  toggleTodo,
}: {
  todo: { text: string; id: number; completed: boolean };
  toggleTodo: (id: number, checked: boolean) => void;
}) {
  return (
    <li key={todo.id} className="flex items-center space-x-2">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id, !todo.completed)}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-grow ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </label>
    </li>
  );
}
