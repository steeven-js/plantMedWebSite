import { useState, useEffect } from "react";

const useFetchPlants = (page) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = `https://apimonremede.jsprod.fr/api/plantsWebSite?page=${page}`;

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
  }, [page]); // Mettez à jour les données lorsque la page change

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchPlants;
