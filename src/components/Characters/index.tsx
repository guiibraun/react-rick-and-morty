import { useState, useEffect } from "react";
import { Status } from "../shared/StatusAndSpecies";
import { Char, Pagination } from "../../types/Char";

export const Characters = () => {
  const [character, setCharacter] = useState<Char[]>([]);
  const [pagination, setPagination] = useState<string>('https://rickandmortyapi.com/api/character')

  const getCharacters = async () => {
    try {
      let resolve = await fetch(pagination);
      let result = await resolve.json();
      setCharacter(result.results);
    } catch (e) {
      alert("erro");
    }
  };

  useEffect(() => {
    getCharacters();
  }, [pagination]);


  const handlePagination = async () => {
    try {
      let resolve = await fetch(pagination);
      let result = await resolve.json();
      setPagination(result.info.next);
    } catch (e) {
      alert("erro");
    }
  }

  return (
    <div>
      Total de Personagens: {character.length}
      <div className="grid grid-colds-1 md:grid-cols-2 gap-4">
        {character.map((item, index) => (
          <div key={index} className="flex flex-row gap-4 items-center text-left rounded-md bg-gray-800 text-white">
            <img src={item.image} alt={item.name} className="rounded-md" />
            <div className="flex flex-col items-stretch w-10/12	p-3">
              <div className="font-extrabold text-2xl">{item.name}</div>
              <div className="flex items-center">
                <Status status={item.status} species={item.species}/>
              </div>
              <div>{item.gender}</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePagination}>Próximo</button>
    </div>
  );
}