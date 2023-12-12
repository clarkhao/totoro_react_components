export const graphqlFetch = async (
  url: string,
  query: string,
  variables?: Record<string, any>,
  options?: Record<string, any>,
) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 10 },
    signal: options?.signal,
  });
  return (await res.json()).data;
};
