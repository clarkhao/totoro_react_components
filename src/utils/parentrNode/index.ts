export const searchParentNode = (
  ele: Element,
  data: { attr: string; value: string },
) => {
  if (ele.getAttribute(data.attr) === data.value) return true;
  else {
    let parent = ele.parentElement;
    while (parent !== null) {
      if (parent.getAttribute(data.attr) === data.value) return true;
      else parent = parent.parentElement;
    }
    return false;
  }
};
