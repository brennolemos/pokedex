import { useEffect, useState, useCallback } from 'react';

const useFetchApi = <T>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setData(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setLoading, url, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    data,
    error,
    fetchData,
  };
};

export default useFetchApi;
