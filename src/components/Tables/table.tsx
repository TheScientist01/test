import { TableHeader } from "@/types/tableHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Table = ({
  list,
  header,
  title,
}: {
  list: any[];
  header: TableHeader[];
  title: string;
}) => {
  const url = usePathname();

  return header.length ? (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          {title}
        </h4>

        <Link href={`${url}/create`}>
          <button className="rounded-lg bg-primary px-3 py-2 duration-200 hover:scale-[1.05]">
            Create
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div
          className={`grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4`}
        >
          {header.map((item) => (
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {item.title}
              </h5>
            </div>
          ))}
        </div>

        {list.map((brand, key) => (
          <div
            className={`grid grid-cols-5 ${
              key === list.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }
        cursor-pointer hover:bg-gray dark:hover:bg-strokedark
        `}
            key={key}
          >
            {header.map((item) => (
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden text-black dark:text-white sm:block">
                  {brand[item.key]}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Table;
