import { GlobalContext } from 'App';
import { useState, useEffect, useContext } from 'react';
import { getSearch } from '../api';

function useFetch() {
  const { setKeywords } = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState();

  const getWord = async () => {
    setLoading(true);

    const data = await getSearch();
    setKeywords(data);

    setLoading(false);
  };

  useEffect(() => {
    getWord();
  }, [query]);

  return { loading, query, setQuery };
}

export default useFetch;
