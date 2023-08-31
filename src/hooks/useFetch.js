import { useEffect, useState } from "react";
import { makeRequest } from "@/api/makeRequest";

const useFetch = (url,page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [meta, setMeta] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
        setMeta(res.data.meta);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url,page]);

  return { data, meta, loading, error };
};

export default useFetch;
