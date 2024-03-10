import { useState, useEffect } from "react";

const useFetchSymptom = (symptomId) => {
  const [symptom, setSymptom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = `https://apimonremede.jsprod.fr/api/symptomes/${symptomId}`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setSymptom(result);
    } catch (fetchSymptomError) {
      setError(fetchSymptomError);
      console.error(fetchSymptomError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symptomId]);

  const refetch = () => {
    fetchData();
  };

  return { symptom, isLoading, error, refetch };
};

export default useFetchSymptom;
