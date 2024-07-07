"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Exam, examRequestSchema } from "@/schemas";
import { Student, studentRequestSchema } from "@/schemas/student";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const className =
  "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary";

export default function CreateStudentPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Exam>({
    // defaultValues: { name: "", surname: "" },
    resolver: zodResolver(examRequestSchema),
    reValidateMode: "onBlur",
  });

  const onAdd = (data: Exam) => {
    const localData = localStorage.getItem("exams");
    const newData = [data, ...JSON.parse(localData as string)];

    localStorage.setItem("exams", JSON.stringify(newData));
    router.push("/imtahanlar");
  };

  return (
    <DefaultLayout>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Create Exam
      </h4>
      <form onSubmit={handleSubmit(onAdd)} className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="Exam code"
          className={className}
          {...register("exam_code")}
        />
        <input
          type="number"
          placeholder="Student id"
          className={className}
          {...register("student_id")}
        />
        <input
          type="date"
          placeholder="Exam date"
          className={className}
          {...register("exam_date")}
        />
        <input
          type="number"
          placeholder="Grade"
          className={className}
          {...register("grade")}
        />

        <button className="text-md flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-left hover:bg-gray dark:hover:bg-meta-4">
          Submit
        </button>
      </form>
    </DefaultLayout>
  );
}
