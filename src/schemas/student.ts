import { z } from "zod";

export const studentRequestSchema = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  class: z.string(),
});

export type Student = z.infer<typeof studentRequestSchema>;
