"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
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
  } = useForm<Student>({
    // defaultValues: { name: "", surname: "" },
    resolver: zodResolver(studentRequestSchema),
    reValidateMode: "onBlur",
  });

  const onAdd = (data: Student) => {
    const localData = localStorage.getItem("students");
    const newData = [data, ...JSON.parse(localData as string)];

    localStorage.setItem("students", JSON.stringify(newData));
    router.push("/sagirdler");
  };

  console.log(errors);
  

  return (
    <DefaultLayout>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Create Student
      </h4>
      <form onSubmit={handleSubmit(onAdd)} className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="ID"
          className={className}
          {...register("id")}
        />
        <input placeholder="Name" className={className} {...register("name")} />
        <input
          placeholder="Surname"
          className={className}
          {...register("surname")}
        />
        <input
          type="number"
          placeholder="Class"
          className={className}
          {...register("class")}
        />

        <button className="text-md flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-left hover:bg-gray dark:hover:bg-meta-4">
          Submit
        </button>
      </form>
    </DefaultLayout>
  );
}
