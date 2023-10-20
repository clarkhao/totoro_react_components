import React from "react";
import { FilterContext, useFilter } from "./hook";

type TFilterWrapper = {
  /**
   * children
   */
  children: React.ReactNode;
};

export function FilterWrapper({ ...props }: TFilterWrapper) {
  const { filterState, filterDispatch } = useFilter();
  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
