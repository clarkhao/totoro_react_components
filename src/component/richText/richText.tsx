import { useRef } from "react";

type TRichText = {};

export function RichText({ ...props }: TRichText) {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    const content = editorRef.current?.innerHTML;
    console.log("Content:", content);
  };

  return (
    <div>
      <div
        ref={editorRef}
        contentEditable={true}
        onInput={handleInput}
        className="p-2 text-sm min-h-[36px] w-[350px] border border-gray-200 dark:text-white"
      />
    </div>
  );
}
