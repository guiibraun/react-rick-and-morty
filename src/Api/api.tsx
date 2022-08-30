import axios from "axios";

export const api = {
   getAllCharacters: async (txt:string) => {
      let results = await axios.get(txt)
      return results.data
   }
}