import { z } from "zod";

export const validatorInputTask = z.object({
  task: z.string().min(1, { message: "Digite alguma tarefa" }),
});

export type InputTask = z.infer<typeof validatorInputTask>;
