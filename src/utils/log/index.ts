type TLogger = {
  log: (...data: any[]) => void;
  error: (...data: any[]) => void;
  warn: (...data: any[]) => void;
};

const log = (...data: any[]) => {
  if (process.env.NODE_ENV === "development") {
    const currentDate = new Date(Date.now()).toLocaleTimeString();
    console.log(`${currentDate}|||${data}|||`);
  }
};
const error = (...data: any[]) => {
  if (process.env.NODE_ENV === "development") {
    const currentDate = new Date(Date.now()).toLocaleTimeString();
    console.error(`${currentDate}|||${data}|||`);
  }
};
const warn = (...data: any[]) => {
  if (process.env.NODE_ENV === "development") {
    const currentDate = new Date(Date.now()).toLocaleTimeString();
    console.warn(`${currentDate}|||${data}|||`);
  }
};

export const logger: TLogger = {
  log,
  error,
  warn,
};
