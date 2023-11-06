import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {

    //Convertimos la versión anterior en un hook reutilizable. Usamos useFetchGifs
    
    const [images,setImages]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
   

   const getImages= async ()=>{
      const newImages=await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
   }
 
   useEffect( ()=>{getImages(category)},[]  
   )  
  return {
      images:images,
      isLoading:isLoading
   }
}
