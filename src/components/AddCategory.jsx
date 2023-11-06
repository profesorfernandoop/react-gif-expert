import { useState } from "react"
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    // Opcion 1 para gestionar el cambio de estado.
    // const onChangeInputValue=(event)=>{
    //     setInputValue(event.target.value);
    // }
    // Opcion 2. Voy a recibir de forma implilcita el event
    // y lo desestructuro para el target.
    const onChangeInputValue=({target})=>{
        setInputValue(target.value);
    }
    const onSubmitHandle=(event)=>{
       event.preventDefault();
       if(inputValue.trim().length<=1) return;
       onNewCategory(inputValue.trim());
       setInputValue('');
    }

  return (

    <form onSubmit={onSubmitHandle}>

        <input
           type="text"
           placeholder="Busqueda de gifs..."
           value={inputValue}
          /* opcion 1 onChange={(event)=>{ onChangeInputValue(event) }}*/
          /* Opcion 2 */
          onChange={ onChangeInputValue}
        />
    </form>

  )
}
