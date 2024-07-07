"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "@/components/Tables/table";
import { TableHeader } from "@/types/tableHeader";
import { useEffect, useState } from "react";

const tableHeader: TableHeader[] = [
  { title: "Dərsin kodu", key: "class_code" },
  { title: "Dərsin adı", key: "class_name" },
  { title: "Sinif", key: "class_grade" },
  { title: "Müəllimin adı", key: "teacher_name" },
  { title: "Müəllimin soyadı", key: "teacher_surname" },
];

const dummyData = [
  {
    class_code: "MTH",
    class_name: "Mathematics",
    class_grade: 8,
    teacher_name: "Eldar",
    teacher_surname: "Aliyev",
  },
  {
    class_code: "PHY",
    class_name: "Physics",
    class_grade: 8,
    teacher_name: "Nigar",
    teacher_surname: "Mammadova",
  },
  {
    class_code: "CHM",
    class_name: "Chemistry",
    class_grade: 8,
    teacher_name: "Togrul",
    teacher_surname: "Huseynov",
  },
  {
    class_code: "BIO",
    class_name: "Biology",
    class_grade: 8,
    teacher_name: "Zaur",
    teacher_surname: "Ismayilov",
  },
  {
    class_code: "ENG",
    class_name: "English",
    class_grade: 8,
    teacher_name: "Leyla",
    teacher_surname: "Aliyeva",
  },
];

export default function DerslerPage() {
  const [classList, setClassList] = useState<any[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem("lessons");

    if (localData === null) {
      localStorage.setItem("lessons", JSON.stringify(dummyData));
      setClassList(dummyData);
    } else {
      localData && setClassList(JSON.parse(localData));
    }
  }, []);

  return (
    <DefaultLayout>
      <Table list={classList} header={tableHeader} title="Dərslər" />
    </DefaultLayout>
  );
}
