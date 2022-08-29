type Props = {
   status: string,

}

export const Status = ({ status }: Props) => {
   return (
      <>
         {status == "Dead" && (
            <span className="before:content-[''] before:w-4 before:h-4 before:bg-red-900 before:rounded-full before:mr-2">
               {status}
            </span>
         )
         }

         {status == "Alive" && (
            <span className="flex items-center before:content-[''] before:w-4 before:h-4 before:bg-green-900 before:rounded-full before:mr-2">
               {status}
            </span>
         )
         }

         {status == "unknown" && (
            <span className="flex items-center before:content-[''] before:w-4 before:h-4 before:bg-gray-700 before:rounded-full before:mr-2">
               {status}
            </span>
         )
         }
      </>
   )
   
}
  
