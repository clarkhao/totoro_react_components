import React, { Fragment, FC } from "react";
import { graphqlFetch } from "../../utils";
//hooks
import { DynamicListContext, usePage } from "../next-pagination/dynamicHook";
//components
import Spinner from "../spinner/spinner";
import { DynamicPagination } from "../next-pagination/dynamic";
import Product from "../items/productItem";
import { Button } from "../button/button";
import { FilterContext } from "../fitler/hook";

export type TFetchData = Record<string, any>;

export const initQuery = `#graphql
  query GetProducts ($page: Int!, $cursor: String) {
    products(first: $page, after: $cursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
      edges {
        node {
          id
          title
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                width
                height
                id
              }
            }
          }
        }
      }
    }
  }
 `;

type TClientList = {
  /**
   * url
   */
  url: string;
  /**
   * fromCollections
   */
  fromCollections: boolean;
  /**
   * query
   */
  query?: string;
  /**
   * renderWays
   */
  renderWays?: "pagination" | "infinite";
  /**
   * pageSize
   */
  pageSize?: number;
};

export function GraphqlList({ query = initQuery, ...props }: TClientList) {
  const [data, setData] = React.useState<TFetchData>();
  const [error, setError] = React.useState<Error>();
  const { listState, listDispatch } = usePage();
  const [isFetching, setIsFetching] = React.useState(false);
  const filter = React.useContext(FilterContext);

  React.useEffect(() => {
    return () => {
      setData(undefined);
      listDispatch({ type: "reset", payload: null });
      setError(undefined);
    };
  }, [query]);
  React.useEffect(() => {
    console.log("fetch");
    const controller = new AbortController();
    const signal = controller.signal;
    const index = listState.currentIndex;
    graphqlFetch(
      props.url,
      query,
      { page: 9, cursor: listState.cursors[index - 1] },
      { signal }
    )
      .then((res) => {
        let newData: Record<string, any> = {};
        if (props.renderWays === "infinite") {
          if (props.fromCollections) {
            newData = res.collection;
          } else {
            newData = res;
          }
          setData((prev) => {
            return {
              ...(prev ?? {}),
              products: {
                ...(prev ?? {})?.products,
                edges: (
                  prev ?? { products: { edges: [] } }
                ).products.edges.concat(newData.products.edges),
                pageInfo: newData.products.pageInfo,
              },
            };
          });
          setIsFetching(false);
        } else {
          setData(newData);
        }
        listDispatch({
          type: "record-cursor",
          payload: { [index]: newData.products.pageInfo.endCursor },
        });
      })
      .catch((err: Error) => {
        if (err.name === "AbortError") return;
        console.log(err.message);
        setError(err);
      });
    return () => {
      controller.abort();
    };
  }, [listState.currentIndex, query]);
  const searchProduct = React.useCallback(() => {
    return [...data?.products.edges].filter((el) =>
      (el.node.title as string)
        .toLowerCase()
        .includes(filter?.filterState.search.toLowerCase() ?? "")
    );
  }, [data, filter?.filterState.search]);
  if (!data) {
    return (
      <div className="w-full flex flex-col justify-start items-center gap-6 px-2">
        <div className="w-full grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4">
          {new Array(9).fill(0).map((el, index) => {
            return (
              <div
                role="status"
                className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                key={`skeleton-${index}`}
              >
                <div className="flex items-center justify-center h-56 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (error) {
    return <div>An error occurred: {(error as Error).message}</div>;
  }
  return (
    <div className="w-full flex flex-col justify-start items-center gap-6 px-2">
      <DynamicListContext.Provider value={{ listState, listDispatch }}>
        <div className="grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4">
          {[...searchProduct()].map((el, index) => {
            return (
              <Fragment key={index}>
                <Product item={el.node} />
              </Fragment>
            );
          })}
        </div>
        {props.renderWays === "infinite" ? (
          <>
            {isFetching && (
              <div className="w-full flex justify-center">
                <Spinner />
              </div>
            )}
            {data.products.pageInfo.hasNextPage && !isFetching ? (
              <>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsFetching(true);
                    listDispatch({
                      type: "next-page",
                      payload: data.products.pageInfo.hasNextPage,
                    });
                  }}
                  width="w-full"
                  size="base"
                >
                  Load More
                </Button>
              </>
            ) : null}
          </>
        ) : (
          <DynamicPagination
            isNext={data.products.pageInfo.hasNextPage}
            isPrev={data.products.pageInfo.hasPreviousPage}
            total={3}
          />
        )}
      </DynamicListContext.Provider>
    </div>
  );
}
