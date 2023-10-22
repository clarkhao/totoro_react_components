import React from "react";
import { graphqlFetch } from "../../utils";
import { FilterContext, useFilter } from "../fitler/hook";
import { FilterClient } from "../fitler/filterClient";
import { query } from "../fitler/query";
import { GraphqlList, initQuery } from "./list";
//hooks

type TWithFilterList = {
  /**
   * isTopBarFixed?
   */
  isTopBarFixed?: boolean;
};

export function WithFilterList({ ...props }: TWithFilterList) {
  const { filterState, filterDispatch } = useFilter();
  
  const [data, setData] = React.useState<
    Array<{ id: string; title: string }> | undefined
  >(undefined);
  const [error, setError] = React.useState<Error>();
  React.useEffect(() => {
    graphqlFetch("https://mock.shop/api", query)
      .then(async (res) => {
        if (res.collections) {
          setData(
            [{ id: "", title: "All" }].concat(
              res.collections.edges.map((el: Record<string, any>) => {
                return { id: el.node.id, title: el.node.title };
              })
            )
          );
        }
      })
      .catch((err: Error) => {
        console.log(err.message);
        setError(err);
      });
    
  }, []);
  const categoryQuery = React.useMemo(() => {
    const id =
      data
        ?.filter((_, index) => index === filterState.selected)
        .map((el) => el.id)[0] ?? "";
    console.log(id);
    return `#graphql
    query GetProducts ($page: Int!, $cursor: String) {
      collection(id: "${id}") {
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
    }
   `;
  }, [filterState.selected, data]);
  return (
    <>
      <FilterContext.Provider
        value={{
          filterState,
          filterDispatch,
        }}
      >
        <FilterClient items={data} isTopBarFixed={props.isTopBarFixed} />
        {filterState.selected === 0 ? (
          <GraphqlList
            url="https://mock.shop/api"
            renderWays="infinite"
            fromCollections={false}
            query={initQuery}
          />
        ) : (
          <GraphqlList
            url="https://mock.shop/api"
            renderWays="infinite"
            fromCollections={true}
            query={categoryQuery}
          />
        )}
      </FilterContext.Provider>
    </>
  );
}
