import { useEffect, useState } from "react";

export function useFetch<T>(
  endpoint: string,
  options?: {
    method: "GET";
    body: null;
  }
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<null | T>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint, options);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
    update: setData,
  };
}
