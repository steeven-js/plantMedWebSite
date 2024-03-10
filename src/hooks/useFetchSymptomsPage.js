import { useState, useEffect } from "react";

const useFetchSymptomsPage = (page) => {
  const [dataSymptomsPage, setDataSymptomsPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = `https://apimonremede.jsprod.fr/api/symptomsWebSite?page=${page}`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setDataSymptomsPage(result);
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
  }, [page]);

  const refetch = () => {
    fetchData();
  };

  return { dataSymptomsPage, isLoading, error, refetch };
};

export default useFetchSymptomsPage;
