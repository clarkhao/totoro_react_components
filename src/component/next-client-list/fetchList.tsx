import axios from "axios";
import React from "react";
import { FC } from "react";
import { useQuery, useInfiniteQuery, QueryClient } from "react-query";
import { useFetch } from "../next-pagination/hook";
import Spinner from "../spinner/spinner";
import Pagination from "../next-pagination/pagination";
import { Button } from "../button/button";

export type TFetchData = Record<string, any>;
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const fetchData = async (
  url: string,
  pageIndex: number = 1,
  fetchLimit: number,
  signal: AbortSignal | undefined,
) => {
  const response = await axios({
    url: `${url}?limit=${fetchLimit}&skip=${(pageIndex - 1) * 9}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal: signal,
  });
  return response.data as TFetchData;
};

type TList = {
  /**
   * url
   */
  url: string;
  /**
   * pageIndex
   */
  pageIndex: number;
  /**
   * fetchLimit
   */
  fetchLimit: number;
  /**
   * children
   */
  children: FC;
};

export function FetchPageList({ pageIndex, fetchLimit, ...props }: TList) {
  // Queries
  // staleTime reduce the refetch
  // isPreviousData is used in pagination
  const { data, error, isLoading, isFetching, isPreviousData } = useQuery(
    ["customers", pageIndex],
    ({ signal }) => fetchData(props.url, pageIndex, fetchLimit, signal),
    { suspense: true, staleTime: 30000, keepPreviousData: true },
  );
  /*
  const getPageTotal = React.useCallback(() => {
    return Math.round(data?.total / fetchLimit);
  }, [data?.total]);
  */
  const getPageTotal = React.useMemo(
    () => Math.round(data?.total / fetchLimit),
    [data?.total],
  );
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;
  // Mutations
  return (
    <>
      <div className="w-full">
        <ul className="grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4">
          {(data as TFetchData)!.users.map((d: Record<string, any>) => (
            <li key={`customer-${d.id}`}>{props.children(d)}</li>
          ))}
        </ul>
      </div>
      <Pagination lastPageIndex={getPageTotal} />
    </>
  );
}

export function FetchInfiniteList({
  fetchLimit,
  ...props
}: Omit<TList, "pageIndex"> & { isScrolling: boolean }) {
  const { data, hasNextPage, fetchNextPage, isLoading, isFetching, error } =
    useInfiniteQuery(
      "customers",
      ({ signal, pageParam = 1 }) =>
        fetchData(
          props.url,
          pageParam,
          fetchLimit,
          signal,
        ) as Promise<TFetchData>,
      {
        refetchOnWindowFocus: false,
        retry: 2,
        getNextPageParam: (lastPage: TFetchData, allPages: TFetchData[]) => {
          const nextPage =
            lastPage.users.length === 9 ? allPages.length + 1 : undefined;
          return nextPage;
        },
      },
    );
  console.log(data);
  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const contentHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight + 1 >= contentHeight) {
        fetchNextPage();
      }
    };
    if (props.isScrolling) {
      window.setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
      }, 0);
      if (!hasNextPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const users = React.useCallback(() => {
    return data?.pages.reduce((acc: Array<TFetchData>, page) => {
      const user = page.users;
      acc = acc.concat(user);
      return acc;
    }, [] as Array<TFetchData>);
  }, [data]);
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <>
      <div className="w-full">
        <ul className="grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4">
          {users()?.map((data: Record<string, any>) => (
            <li key={`customer-${data.id}`}>{props.children(data)}</li>
          ))}
        </ul>
        {isFetching && (
          <div className="w-full flex justify-center mt-6">
            <Spinner />
          </div>
        )}
        {!props.isScrolling && !isFetching && hasNextPage ? (
          <>
            <Button
              variant="secondary"
              onClick={() => fetchNextPage()}
              width="w-full"
              size="base"
            >
              Load More
            </Button>
          </>
        ) : null}
      </div>
    </>
  );
}
