import { useState, useEffect } from 'react';
import api from './API';

export const useApp = () => {
  const [users, setUsers] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let resultsNumber = 10;

  useEffect(() => {
    setTimeout(() => {
      api
        .get(`/?results=${resultsNumber}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setUsers(data.results);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    }, 1_000);
  }, []);

  return {
    users,
    hasError,
    loading,
    resultsNumber,
  };
};
