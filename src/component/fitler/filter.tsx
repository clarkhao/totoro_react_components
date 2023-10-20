import React from "react";
import { FiSearch } from "react-icons/fi";
import { graphqlFetch } from "../../utils";
import { query } from "./query";
import { Select } from "../select/select";

export type TFilter = {
  /**
   * items
   */
  items: Array<{ id: string; title: string }> | undefined;
  /**
   * isTopBarFixed?
   */
  isTopBarFixed?: boolean;
};

export async function FilterServer({ ...props }: TFilter) {
  const res = await graphqlFetch("https://mock.shop/api", query);
  const categories = res.collections.edges.map(
    (item: { cursor: string; node: Record<string, any> }) => {
      return { id: item.node.id, title: item.node.title };
    }
  );

  return (
    <div className="flex flex-row gap-4">
      <form className="h-12 flex-1">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-14 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-brand-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-violet-500"
            placeholder="Search Product"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-0 bottom-0 h-14 bg-brand-secondary-light hover:bg-brand-secondary focus:outline-none font-medium rounded-tr-lg rounded-br-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
            Search
          </button>
        </div>
      </form>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Select items={categories} title="Choose Category" />
      </React.Suspense>
    </div>
  );
}
