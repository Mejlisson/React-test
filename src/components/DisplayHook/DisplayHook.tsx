import useFetch from "../../hooks/UseFetch";

import {DisneyCharacter} from "../DisplayHook/type/DisplayDisney"

export default function DisplayData(){
    const { data, loading, error } = useFetch("https://api.disneyapi.dev/character");

    if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
		{data && (
		  <>
			<h2>{data.name}</h2>
			<img src={data.imageUrl} alt={data.name} />
			<p>Films: {data.films.join(', ')}</p>
		  </>
		)}
	  </div>
	);
}



/*<div> Denna diven går igenom alla karaktärer och displayar dessa
      {data?.map((character: DisneyCharacter) => (
        <div key={character._id}>
          <h2>{character.name}</h2>
          <img src={character.imageUrl} alt={character.name} />
          <p>Films: {character.films.join(', ')}</p>
        </div>
      ))}
    </div>
*/