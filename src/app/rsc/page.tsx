import { Suspense } from "react";
import TodoList from "./TodoList";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TodoList />
    </Suspense>
  );
}
