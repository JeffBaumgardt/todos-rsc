import { getTodos, addNewTodo, toggleTodo } from "@/lib/todos";

export async function GET() {
  const todos = await getTodos();

  return new Response(JSON.stringify(todos), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const { text } = await req.json();

  const newTodo = await addNewTodo(text);

  return new Response(JSON.stringify(newTodo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(req: Request) {
  const { id, checked } = await req.json()
  
  const toggledTodo = await toggleTodo(id, checked)

  return new Response(JSON.stringify(toggledTodo), {
    headers: { "Content-Type": "application/json" },
  });  
}