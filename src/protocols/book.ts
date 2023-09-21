import { Books } from "@prisma/client";

export type CreateBook = Omit<Books, "id" | "read" | "review" | "grade">;