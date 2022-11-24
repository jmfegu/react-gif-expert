import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState([ 'Dragon Ball' ] );

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories( [ newCategory, ...categories ] )
  }

  return (
    <>

      {/* Título del componente*/}
      <h1> Candelita, busca el gif que quieras</h1>

      {/* Formulario de búsqueda */}
      <AddCategory
        onNewCategory={ onAddCategory }
      />

      {/* Resultado de la búsqueda en listado de gif */}

      {
        categories.map( category =>
          <GifGrid
            key={ category }
            category={ category }
          />
        )
      }

    </>
  )
}
