"use client";

import React from "react";
type StreamState = {
  data: string;
  error: unknown | null;
  controller: AbortController;
}
export function Chunk() {
  const [state, setState] = React.useState<StreamState>({
    data: "",
    error: null,
    controller: new AbortController(),
  });
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const url = "http://localhost:8080/v0/stream";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: state.controller.signal,
        });
        if (!response.ok || !response.body) {
          throw response.statusText;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            setLoading(false);
            break;
          }

          const decodedChunk = decoder.decode(value, { stream: true });
          setState((prevState) => ({
            ...prevState,
            ...{ data: prevState.data + decodedChunk },
          }));
        }
      } catch (err) {
        setLoading(false);
        if (err instanceof Error && err.name !== "AbortError") {
          setState((prevState) => ({ ...prevState, ...{ error: err } }));
        }

        // Handle other errors
      }
    };

    fetchData();
    return () => state.controller.abort();
    /*
    const fetchData = async () => {
      const response = await fetch(url);
      const reader = response.body!.getReader();

      const processChunk = async ({ done, value }: { done: boolean; value: Uint8Array }) => {
        if (done) {
          return;
        }

        const chunk = new TextDecoder().decode(value);
        setReceived(prevData => prevData + chunk);

        // Request the next chunk
        return reader.read().then(processChunk);
      };

      return reader.read().then(processChunk);
    };

    fetchData().catch(error => {
      console.error('Error:', error);
    });
    */
  }, []);
  return (
    <>
      <b>Request Response: {loading && <i>Fetching data...</i>}</b>
      <hr />
      {state.data}
    </>
  );
}

