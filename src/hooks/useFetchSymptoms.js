import { useState, useEffect } from "react";

const useFetchSymptoms = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = `https://apimonremede.jsprod.fr/api/symptomes`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setSymptoms(result);
    } catch (fetchSymptomsError) {
      setError(fetchSymptomsError);
      console.error(fetchSymptomsError);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log('symptoms', symptoms);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { symptoms, isLoading, error, refetch };
};

export default useFetchSymptoms;
