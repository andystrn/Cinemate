import React, { useEffect, useState } from 'react'

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${queryTerm}`;

    useEffect(() => {
        const fetchMovies = async () => {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        };
        fetchMovies();
      }, [url])

  return (
    {data}
  )
}
