import * as d3 from "d3";
import React from "react";
import { ListContext, useFetch } from "../next-pagination/hook";
import Pagination from "../next-pagination/pagination";

type TSortTable = {
  /**
   * title
   */
  title: string;
  /**
   * isPagination?
   */
  isPagination?: boolean;
};
type TForestArea = {
  code: string;
  entity: string;
  forestArea: number;
  year: number;
};
type TSort = {
  type: "entity" | "code" | number;
  isAscending: boolean;
};
export function SortTable({ ...props }: TSortTable) {
  const { listState, listDispatch } = useFetch();
  const [forestArea, setForestArea] = React.useState<{
    [key: string]: TForestArea[];
  }>({});
  const [sort, setSort] = React.useState<TSort>({
    type: "entity",
    isAscending: true,
  });
  const sortedData = React.useMemo(() => {
    const sorted = Object.entries(forestArea)
      .map(([key, value], i) => {
        return value;
      })
      .sort((a, b) => {
        if (sort.type === "entity" && sort.isAscending) {
          return a[0].entity > b[0].entity ? 1 : -1;
        } else if (sort.type === "entity" && !sort.isAscending) {
          return a[0].entity > b[0].entity ? -1 : 1;
        } else if (sort.type === "code" && sort.isAscending) {
          return a[0].code > b[0].code ? 1 : -1;
        } else if (sort.type === "code" && !sort.isAscending) {
          return a[0].code > b[0].code ? -1 : 1;
        } else if (typeof sort.type === "number" && sort.isAscending) {
          return (a[sort.type] ?? { forestArea: 0 }).forestArea >
            (b[sort.type] ?? { forestArea: 0 }).forestArea
            ? 1
            : -1;
        } else if (typeof sort.type === "number" && !sort.isAscending) {
          return (a[sort.type] ?? { forestArea: 0 }).forestArea >
            (b[sort.type] ?? { forestArea: 0 }).forestArea
            ? -1
            : 1;
        } else return 1;
      });
    console.log(sorted);
    return props.isPagination
      ? sorted.slice(
          (listState.currentIndex - 1) * 9,
          (listState.currentIndex - 1) * 9 + 9,
        )
      : sorted;
  }, [forestArea, sort, listState.currentIndex, props.isPagination]);
  React.useEffect(() => {
    d3.csv(
      "https://doggycatty.s3.amazonaws.com/app/forest-area-km.csv",
      (d) => {
        return {
          code: d.Code,
          entity: d.Entity,
          forestArea: Math.round(+d["Forest area"]),
          year: +d.Year,
        };
      },
    ).then((data) => {
      const dataMap = data.reduce(
        (acc, el) => {
          if (!(el.entity in acc)) {
            acc[el.entity] = [el];
          } else {
            acc[el.entity].push(el);
          }
          return acc;
        },
        {} as { [key: string]: TForestArea[] },
      );
      console.log(dataMap);
      setForestArea(dataMap);
    });
  }, []);
  const totalPage = React.useMemo(
    () => Math.ceil(Object.keys(forestArea).length / 9),
    [forestArea],
  );

  return (
    <div>
      <span className="block mt-2 ml-4 font-bold dark:text-white">
        {props.title}
      </span>
      {sortedData.length === 0 ? (
        <>
          <div className="relative mt-2 mb-4 overflow-x-auto shadow-md sm:rounded-lg animate-pulse">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Country
                      <button>
                        <svg
                          className="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Code
                      <button>
                        <svg
                          className="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </button>
                    </div>
                  </th>
                  {new Array(6).fill(0).map((el, index) => (
                    <th
                      scope="col"
                      className="px-6 py-3"
                      key={`${index}-skeleton`}
                    >
                      <div className="flex items-center">
                        <span className="w-10 h-4 bg-gray-400"></span>
                        <button>
                          <svg
                            className="w-3 h-3 ml-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                  ))}
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {new Array(12).fill(0).map((ele, i) => {
                  return (
                    <tr
                      key={`skeleton-${i}`}
                      className={[
                        "border-b dark:border-gray-700",
                        (i & 1) === 0
                          ? "bg-white dark:bg-gray-800"
                          : "bg-gray-50 dark:bg-gray-700",
                      ].join(" ")}
                    >
                      {new Array(9).fill(0).map((el, index) => (
                        <th
                          scope="row"
                          className="px-6 py-4 h-10 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          key={`${index}-skeleton`}
                        ></th>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <ListContext.Provider value={{ listState, listDispatch }}>
          <div className="relative mt-2 mb-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Country
                      <button
                        onClick={() =>
                          setSort({
                            type: "entity",
                            isAscending: !sort.isAscending,
                          })
                        }
                      >
                        <svg
                          className="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Code
                      <button
                        onClick={() =>
                          setSort({
                            type: "code",
                            isAscending: !sort.isAscending,
                          })
                        }
                      >
                        <svg
                          className="w-3 h-3 ml-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </button>
                    </div>
                  </th>
                  {forestArea &&
                    (forestArea["Asia"] ?? []).map((el, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3"
                        key={`${el.code}-${index}`}
                      >
                        <div className="flex items-center">
                          {el.year}
                          <button
                            onClick={() => {
                              console.log(index);
                              setSort({
                                type: index,
                                isAscending: !sort.isAscending,
                              });
                            }}
                          >
                            <svg
                              className="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </button>
                        </div>
                      </th>
                    ))}
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData &&
                  sortedData.map((ele, i) => {
                    return (
                      <tr
                        key={`${ele[0].code}-${i}`}
                        className={[
                          "border-b dark:border-gray-700",
                          (i & 1) === 0
                            ? "bg-white dark:bg-gray-800"
                            : "bg-gray-50 dark:bg-gray-700",
                        ].join(" ")}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {ele[0].entity}
                        </th>
                        <td className="px-6 py-4">{ele[0].code}</td>
                        {ele.map((el, index) => {
                          return (
                            <td
                              key={`${ele[0].entity}-${el.code}-${index}`}
                              className="px-6 py-4"
                            >
                              {el.forestArea}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {props.isPagination ? <Pagination lastPageIndex={totalPage} /> : null}
        </ListContext.Provider>
      )}
    </div>
  );
}
