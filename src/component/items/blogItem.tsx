//firstName,age,email,image
type TItem = Record<string, any>;
export default function Item({ ...props }: TItem) {
  return (
    <div className="md:max-w-sm">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
              {props.username}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-300">
              {props.firstName}{" "}{props.lastName}
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src={props.image}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500 dark:text-gray-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">Published</dt>
            <dd className="text-xs text-gray-500 dark:text-gray-300">31st June, 2021</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">Reading time</dt>
            <dd className="text-xs text-gray-500 dark:text-gray-300">{props.age} minute</dd>
          </div>
        </dl>
      </a>
    </div>
  );
}
