import { z } from "zod";

export const lessonRequestSchema = z.object({
  class_code: z.string(),
  class_name: z.string(),
  class_grade: z.string(),
  teacher_name: z.string(),
  teacher_surname: z.string(),
});

export type Lesson = z.infer<typeof lessonRequestSchema>;
