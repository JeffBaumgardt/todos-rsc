"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState = {
  message: "",
};

export function TodoForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      <div className="flex space-x-2 mb-4">
        <p>{state?.message}</p>
        <Input type="text" name="text" placeholder="Make Breakfast" />
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="default" disabled={pending} type="submit">
      Create Todo
    </Button>
  );
}
