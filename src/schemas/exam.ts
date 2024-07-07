import { z } from "zod";

export const examRequestSchema = z.object({
  exam_code: z.string(),
  student_id: z.string(),
  exam_date: z.string(),
  grade: z.string(),
});

export type Exam = z.infer<typeof examRequestSchema>;
