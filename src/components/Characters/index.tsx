import { useState, useEffect } from "react";
import { Char} from "../../types/Char";
import { api } from "../../Api/api";
import { CharacterOne } from "./Character";

export const Characters = () => {
  const [character, setCharacter] = useState<Char[]>([]);
  const [paginationNext, setPaginationNext] = useState<string>('https://rickandmortyapi.com/api/character')
  const [loading, setLoading] = useState<boolean>(false)

  const getCharacters = async () => {
      setLoading(true)
      let json = await api.getAllCharacters(paginationNext)
      setCharacter(json.results);
      setLoading(false)
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
      {loading && 
        <div className="text-white bg-black h-screen w-screen absolute flex justify-center items-center text-8xl	" mx-auto>Carregando...</div>
      }

      {!loading && 
        <div className="max-w-screen-xl mx-auto ">
        <h2>Total de Personagens: {character.length}</h2>
          <div className="grid grid-colds-1 md:grid-cols-2 gap-4">

            {character.map((item, index) => (
              <CharacterOne key={index} data={item} />
            ))}
          </div>
          <button onClick={handlePaginationNext}>Próximo</button>

        </div>
      }

    </div>
  );
}