"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TodoForm({ onTodoAdded }: { onTodoAdded: () => void }) {
  const [inputText, setInputText] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    text: string;
    completed: boolean;
  } | null>(null);

  async function handleSubmit(evt: React.SyntheticEvent) {
    evt.preventDefault();
    setPending(true);

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({
          text: inputText,
        }),
      });
      const data = await response.json();
      setFeedback(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      await onTodoAdded();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-2 mb-4">
        <p>{error}</p>
        {feedback && feedback.text ? <p>{feedback.text} added</p> : null}
        <Input
          type="text"
          name="text"
          placeholder="Make Breakfast"
          onChange={(evt) => setInputText(evt.target.value)}
        />
        <Button variant="default" disabled={pending} type="submit">
          Create Todo
        </Button>
      </div>
    </form>
  );
}
