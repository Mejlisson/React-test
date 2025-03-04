// Custom hook for fetching data

import { useState, useEffect } from 'react'
import { DisneyCharacter } from "../components/DisplayHook/type/DisplayDisney";

export default function useFetch(url: string) {

  const [data, setData] = useState<DisneyCharacter | null>(null); // exporterar in type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string| null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`)
        }

        const jsonData = await response.json()
        const characters = jsonData.data; //Hämta lista av karaktärer

        //För att välja en random karaktär
        if (characters && characters.length > 0) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            setData(characters[randomIndex]);
          } else {
            throw new Error("No characters found");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

    fetchData()
  }, [url]) // Dependency array with url

  return { data, loading, error };
}