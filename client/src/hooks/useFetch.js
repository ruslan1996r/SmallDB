import React from 'react'

export const useFetch = (props) => {
  const { url, options = {} } = props

  // Этот респонс надо будет хранить в Контексте, чтобы можно было его нормально редактировать, удалять, изменять, добавлять в список
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url, options]);
  return { response, error, isLoading };
};