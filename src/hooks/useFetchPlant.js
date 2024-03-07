// useFetchPlant.js

import { useState, useEffect } from "react";

const useFetchPlant = (plantId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = `https://apimonremede.jsprod.fr/api/plants/${plantId}`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setData(result);
    } catch (fetchError) {
      setError(fetchError);
      console.error(fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantId]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchPlant;
