import { useState, useEffect } from "react";

import { Char} from "../../types/Char";
import { api } from "../../Api/api";
import { CharacterOne } from "./Character";

export const Characters = () => {
  const [character, setCharacter] = useState<Char[]>([]);
  const [paginationNext, setPaginationNext] = useState<string>('https://rickandmortyapi.com/api/character')

  const getCharacters = async () => {
      let json = await api.getAllCharacters(paginationNext)
      setCharacter(json.results);
  };

  useEffect(() => {
    getCharacters();
  }, [paginationNext]);


  const handlePaginationNext = async () => {
      let json = await api.getAllCharacters(paginationNext)
      setPaginationNext(json.info.next);
  }
  
  return (
    <div>
      Total de Personagens: {character.length}
      <div className="grid grid-colds-1 md:grid-cols-2 gap-4">
        {character.map((item, index) => (
          <CharacterOne key={index} data={item}/>
        ))}
      </div>
      <button onClick={handlePaginationNext}>Próximo</button>
    </div>
  );
}