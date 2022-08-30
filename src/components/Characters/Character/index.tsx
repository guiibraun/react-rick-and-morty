import { Char } from '../../../types/Char'
import {Status} from '../../shared/StatusAndSpecies'

type Props = {
   data: Char
}

export const CharacterOne = ({data}: Props) => {
   return (
      <div className="flex flex-col md:flex-row gap-4 items-center text-left md:rounded-md bg-gray-800 text-white">
         <img src={data.image} alt={data.name} className="md:rounded-md grow w-screen md:w-auto" />
         <div className="flex flex-col items-stretch w-10/12 p-3 text-center md:text-left">
            <div className="font-extrabold text-2xl">{data.name}</div>
            <div className="flex items-center justify-center md:justify-start">
               <Status status={data.status} species={data.species} />
            </div>
            <div>{data.gender}</div>
         </div>
      </div>
   )
}