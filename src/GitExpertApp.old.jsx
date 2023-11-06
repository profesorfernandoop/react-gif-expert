import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

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
         setCategories([...categories,newCategory]);
     }

  }
  return (
   <>
      <AddCategory onNewCategory={onAddCategoria}
         //  setCategories={setCategories} . Esto era la version antigua. A mi no me gusto mucho.
      />
      <button onClick={onAddCategoria}>Add Categoria</button>
      <h1>Welcome to Gift Expert App</h1>
      <ol>
        {categories.map((element)=>{
          return <li key={element}>{element}</li>
        })}
      </ol>
   </>
  )
}
