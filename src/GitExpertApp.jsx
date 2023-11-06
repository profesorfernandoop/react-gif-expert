import { useState } from "react";
import { AddCategory,GridGif } from "./components";
export const GitExpertApp = () => {


  const [categories, setCategories] = useState(['Dragon Ball']);

  // La funcion addCategoria es para añadir mediante el botón.
  // Despues en el video lo quita. Yo lo voy a dejar temporalmente
  // porque me estaba liando.
  // Ahora llamaremos a addCategoria, en una property del componente
  // AddCategory a la que llamamos onNewCategory. Escribiremos onNewCategory y lo igualaremos a una funcion.
  // Esa funcion es una property que se recoge en el componente AddCategory.
  // Informacion padre-hijo.

  const onAddCategoria=(newCategory)=>{
    //  categories.push(newCategory);
     // console.log(categories);
     if((categories.findIndex((element)=> element===newCategory))==-1){
         setCategories([newCategory,...categories]);
     }
     
  }
  return (
   <>
      <h1>Bienvenido a la app de búsqueda de Gifs</h1>
      <AddCategory onNewCategory={onAddCategoria}
         //  setCategories={setCategories} . Esto era la version antigua. A mi no me gusto mucho.
      />
      

        {categories.map((category)=><GridGif key={category} 
                                            category={category}/>)}
   </>
  )
}
