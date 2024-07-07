"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "@/components/Tables/table";
import { TableHeader } from "@/types/tableHeader";
import { useEffect, useState } from "react";

const tableHeader: TableHeader[] = [
  { title: "Nömrə", key: "id" },
  { title: "Ad", key: "name" },
  { title: "Soyad", key: "surname" },
  { title: "Sinif", key: "class" },
];

const dummyData = [
  { id: "1", name: "Arif", surname: "Ahmadli", class: "8a" },
  { id: "2", name: "Leyla", surname: "Mammadova", class: "8a" },
  { id: "3", name: "Rashad", surname: "Aliyev", class: "8a" },
  { id: "4", name: "Narmin", surname: "Huseynova", class: "8a" },
  { id: "5", name: "Kamran", surname: "Ismayilov", class: "8a" },
];

export default function SagirdlerPage() {
  const [studentList, setStudentList] = useState<any[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem("students");

    if (localData === null) {
      localStorage.setItem("students", JSON.stringify(dummyData));
      setStudentList(dummyData);
    } else {
      localData && setStudentList(JSON.parse(localData));
    }
  }, []);

  return (
    <DefaultLayout>
      <Table list={studentList} header={tableHeader} title="Şagirdlər" />
    </DefaultLayout>
  );
}
