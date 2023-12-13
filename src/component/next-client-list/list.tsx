"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { FC, Suspense } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { FetchInfiniteList, FetchPageList } from "./fetchList";
import { ListContext, useFetch } from "../next-pagination/hook";
import React from "react";

type TListRender = {
  /**
   * direction?
   */
  direction?: "row" | "column";
  /**
   * arrangement for row
   */
  arrangement?: "unwrapped" | "wrapped";
  /**
   * renderWays
   */
  renderWays?: "pagination" | "infinite";
  /**
   * grouped
   */
  grouped?: boolean;
  /**
   * children element
   */
  element: FC;
};

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});
function ListRender(props: TListRender) {
  const { listState, listDispatch } = useFetch();
  return (
    <div className="flex flex-col gap-5 items-center mb-10">
      <ListContext.Provider value={{ listState, listDispatch }}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>Loading...</div>}>
            {props.renderWays === "pagination" ? (
              <FetchPageList
                url="https://dummyjson.com/users"
                pageIndex={listState.currentIndex}
                fetchLimit={9}
              >
                {(item: Record<string, unknown>) => <props.element {...item} />}
              </FetchPageList>
            ) : (
              <FetchInfiniteList
                url="https://dummyjson.com/users"
                fetchLimit={9}
                isScrolling={false}
              >
                {(item: Record<string, unknown>) => <props.element {...item} />}
              </FetchInfiniteList>
            )}
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ListContext.Provider>
    </div>
  );
}

export { ListRender };
