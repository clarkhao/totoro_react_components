import { Counter } from "../next-pagination/counter";
import { DynamicListContext, usePage } from "../next-pagination/dynamicHook";

type TCartItem = {
  /**
   * item
   */
  item: Record<string, any>;
  /**
   * handleRemove
   */
  handleRemove: (id: string) => void;
};

export function CartItem({ ...props }: TCartItem) {
  const { listState, listDispatch } = usePage(props.item.quantity);

  return (
    <DynamicListContext.Provider value={{ listState, listDispatch }}>
      <div className="flex items-center gap-4 w-full">
        <img
          src={props.item.image}
          alt=""
          className="h-16 w-16 rounded object-cover"
        />

        <div className="h-16 flex flex-col justify-between items-start p-2 ">
          <h3 className="text-sm text-gray-900 dark:text-white">
            {props.item.title}
          </h3>
          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600 dark:text-white">
            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">{` ${parseFloat(props.item.price).toFixed(
                2
              )}`}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Counter
            isNext
            isPrev
            total={99}
            range={[1, 99]}
            id={props.item.productId}
          />

          <button
            className="text-gray-600 transition hover:text-red-600 dark:text-white dark:hover:text-brand-primary-light"
            onClick={() => props.handleRemove(props.item.productId)}
          >
            <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </DynamicListContext.Provider>
  );
}
