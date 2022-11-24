import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <>
      <h2>{ category }</h2>

      {
        isLoading && <strong>Cargando gifs</strong>
      }

      <div className="card-grid">
        {
          gifs.map(( gif ) =>
            <GifItem
              key={ gif.id }
              { ...gif }
            />
          )
        }
      </div>
    </>
  )

}
