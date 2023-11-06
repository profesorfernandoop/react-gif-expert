// import { getGifs } from "../helpers/GetGifs";
// import { useEffect, useState} from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GridGif = ({ category }) => {



//Convertimos la versión anterior en un hook reutilizable. Usamos useFetchGifs
//    const [images,setImages]=useState([]);
   
//   const getImages= async ()=>{
//      const newImages=await getGifs(category);
//      setImages(newImages);
//   }

//   useEffect( ()=>{getImages(category)},[]  
//   )


  const {images,isLoading}=useFetchGifs(category);
  return (
    <>
      <h1>{category}</h1>
      {
              isLoading &&(<h1>Cargando</h1>)
      }
      
     <div className="card-grid">
         {
          /*  Primera opción para mandar a GifItem el titulo y la imagen de la url a mostrar.
            images.map((image)=> (
               <GifItem key={image.id}
                        title={image.title}
                        url={image.url}
                        />
            )) */
            /* Segunda opcion y mejor: Usamos el operador spread sobre el elemento imag
               Eso hará que se manden todas las propiedades y las podeamos recibir
               desestructurandolas a nuestra necesidad en el componente GifItem.
            */

            images.map((image)=> (
               <GifItem key={image.id}
                        {...image}
                        />
            )) 

         }
      </div>
    </>
  );
};
