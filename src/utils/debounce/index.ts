//every time you disturb, I will stop it
let debounceTimer: number;
const debounce = (callback: () => void, time: number) => {
  clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

//any following nonstop disturb won't stop my first trigger
let throttleTimer: boolean = false;
const throttle = (callback: () => void, time: number) => {
  if (throttleTimer) return;
  throttleTimer = true;
  callback();
  setTimeout(() => {
    //
    throttleTimer = false;
  }, time);
};

export { debounce, throttle };
