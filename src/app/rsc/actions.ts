"use server";

import { addNewTodo, toggleTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodo(prevState: unknown, formData: FormData) {
  const text = formData.get("text") as string;

  if (!text) {
    return { message: "Missing Data" };
  }

  await addNewTodo(text);

  revalidatePath("/rsc");
}

export async function toggle(id: number, checked: boolean) {
  await toggleTodo(id, checked);

  revalidatePath("/rsc");
}
