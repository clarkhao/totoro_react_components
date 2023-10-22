import { TFilter } from "./filter";
import { graphqlFetch } from "../../utils";
import { query } from "./query";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { Select } from "../select/select";
import { FilterContext } from "./hook";

export function FilterClient({ ...props }: TFilter) {
  const filter = React.useContext(FilterContext);
  return (
    <>
      <div
        className={[
          "flex flex-row gap-4  bg-white dark:bg-gray-800 dark:border-gray-700 px-2 mb-6",
        ].join(" ")}
      >
        {props.items ? (
          <>
            <React.Suspense fallback={<p>Loading...</p>}>
              <Select
                items={props.items}
                title="Choose Category"
                id="category"
                onChange={(e) => {
                  console.log(e.target.value);
                  const index = Number.isNaN(+e.target.value)
                    ? 0
                    : +e.target.value;
                  filter?.filterDispatch({
                    type: "set-selected",
                    payload: index,
                  });
                }}
              />
            </React.Suspense>
            <div className="h-8 xs:h-14 flex-1">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className=" absolute xs:flex hidden inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FiSearch />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-8 xs:h-14 xs:pl-10 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-brand-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-violet-500"
                  placeholder="Search Product"
                  required
                  value={filter?.filterState.search}
                  onChange={(e) => {
                    filter?.filterDispatch({
                      type: "set-search",
                      payload: e.target.value,
                    });
                  }}
                />
                <button
                  className="text-white absolute right-0 bottom-0 bg-brand-secondary-light hover:bg-brand-secondary focus:outline-none font-medium rounded-tr-lg rounded-br-lg text-sm h-8 xs:h-14 px-4 py-1 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                  onClick={() => {
                    console.log("hello");
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-12 mb-6 flex-1 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            <div className="w-96 mb-6 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </>
        )}
      </div>
    </>
  );
}
