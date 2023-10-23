import React from "react";
const useProgressiveImg = (blur: string, image: string) => {
  const [src, setSrc] = React.useState(blur);
  React.useEffect(() => {
    setSrc(blur);
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setSrc(image);
    };
  }, [blur, image]);
  const blurred = src === blur;
  return [src, blurred];
};
export default useProgressiveImg;
