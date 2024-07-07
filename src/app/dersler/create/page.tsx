"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Lesson, lessonRequestSchema } from "@/schemas";
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
  } = useForm<Lesson>({
    // defaultValues: { name: "", surname: "" },
    resolver: zodResolver(lessonRequestSchema),
    reValidateMode: "onBlur",
  });

  const onAdd = (data: Lesson) => {
    const localData = localStorage.getItem("lessons");
    const newData = [data, ...JSON.parse(localData as string)];

    localStorage.setItem("lessons", JSON.stringify(newData));
    router.push("/dersler");
  };

  return (
    <DefaultLayout>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Create Lesson
      </h4>
      <form onSubmit={handleSubmit(onAdd)} className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="Class code"
          className={className}
          {...register("class_code")}
        />
        <input
          placeholder="Class name"
          className={className}
          {...register("class_name")}
        />
        <input
          type="number"
          placeholder="Class grade"
          className={className}
          {...register("class_grade")}
        />
        <input
          placeholder="Teacher name"
          className={className}
          {...register("teacher_name")}
        />

        <input
          placeholder="Teacher surname"
          className={className}
          {...register("teacher_surname")}
        />

        <button className="text-md flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-left hover:bg-gray dark:hover:bg-meta-4">
          Submit
        </button>
      </form>
    </DefaultLayout>
  );
}
