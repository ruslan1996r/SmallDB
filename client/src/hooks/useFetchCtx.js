import React from 'react'

import { SmallContext } from "../context/state"

export const useFetchCtx = (props, findConditions) => {
  const { data, setData, isLoading, setLoading, setAlert } = React.useContext(SmallContext)
  const { url, options = {} } = props

  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newOptions = Object.assign(options, findConditions)
        const res = await fetch(url, newOptions);
        const json = await res.json();
        setData(json);
        setLoading(false)
      } catch (error) {
        setAlert(error)
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, options, props, findConditions]);
  return { data, isLoading, error };
};