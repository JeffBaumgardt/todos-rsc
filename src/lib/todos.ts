import prisma from "@/lib/prisma";

export const getTodos = async () => {
  return await prisma.todo.findMany();
};

export const addNewTodo = async (text: string) => {
  return await prisma.todo.create({
    data: { text },
  });
};

export const toggleTodo = async (todoId: number, checked: boolean) => {
  return await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      completed: checked,
    },
  });
};
