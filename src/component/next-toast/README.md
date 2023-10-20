# NextInput

A reusable React Toast component.

## Installation

Install the package using npm:

```bash
npm install @clarktotoro/toast
```
## Setting

in tailwind.config.ts, add content

```bash
content: [
    './node_modules/@clarktotoro/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```
## NextInput Usage

```bash
import { ToastList, useToastStore } from "@clarktotoro/toast";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [setToastMsg] = useToastStore((state) => [state.setToastMsg]);
  const removeToast = (id: string) => {
    setToastMsg((prevToasts) => prevToasts.filter((el) => el.id !== id));
  };
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          const id = uuidv4();
          const item = {
            id,
            bingo: true,
            msg: `it is done!`,
          };
          setToastMsg((pres) => pres.concat(item));
          setTimeout(() => {
            removeToast(id);
          }, 3000);
        }}
      >
        Add Toast
      </button>
      <ToastList />
    </div>
  );
}

export default App;
```