"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Table from "@/components/Tables/table";
import { TableHeader } from "@/types/tableHeader";
import { useEffect, useState } from "react";

const tableHeader: TableHeader[] = [
  { title: "Dərsin kodu", key: "exam_code" },
  { title: "Şagirdin nömrəsi", key: "student_id" },
  { title: "İmtahan tarixi", key: "exam_date" },
  { title: "Qiyməti", key: "grade" },
];

const dummyData = [
  { exam_code: "MTH", student_id: 1, exam_date: "2024-06-01", grade: 4 },
  { exam_code: "PHY", student_id: 1, exam_date: "2024-06-05", grade: 5 },
  { exam_code: "CHM", student_id: 1, exam_date: "2024-06-10", grade: 3 },

  { exam_code: "MTH", student_id: 2, exam_date: "2024-06-01", grade: 5 },
  { exam_code: "PHY", student_id: 2, exam_date: "2024-06-05", grade: 4 },
  { exam_code: "CHM", student_id: 2, exam_date: "2024-06-10", grade: 4 },

  { exam_code: "MTH", student_id: 3, exam_date: "2024-06-01", grade: 3 },
  { exam_code: "PHY", student_id: 3, exam_date: "2024-06-05", grade: 3 },
  { exam_code: "CHM", student_id: 3, exam_date: "2024-06-10", grade: 4 },

  { exam_code: "MTH", student_id: 4, exam_date: "2024-06-01", grade: 4 },
  { exam_code: "PHY", student_id: 4, exam_date: "2024-06-05", grade: 5 },
  { exam_code: "CHM", student_id: 4, exam_date: "2024-06-10", grade: 5 },

  { exam_code: "MTH", student_id: 5, exam_date: "2024-06-01", grade: 2 },
  { exam_code: "PHY", student_id: 5, exam_date: "2024-06-05", grade: 3 },
  { exam_code: "CHM", student_id: 5, exam_date: "2024-06-10", grade: 4 },
];

export default function ImtahanlarPage() {
  const [examList, setExamList] = useState<any[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem("exams");

    if (localData === null) {
      localStorage.setItem("exams", JSON.stringify(dummyData));
      setExamList(dummyData);
    } else {
      localData && setExamList(JSON.parse(localData));
    }
  }, []);

  return (
    <DefaultLayout>
      <Table list={examList} header={tableHeader} title="Imtahanlar" />
    </DefaultLayout>
  );
}
