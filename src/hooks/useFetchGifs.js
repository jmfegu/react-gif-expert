import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

  const [ gifs, setgifs ] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const settingGifs = async() => {
    const losGifs = await getGifs(category);
    setgifs(losGifs);
    setisLoading(false);
  }

  useEffect(() => {
    settingGifs();
  }, [])

  return {
    gifs,
    isLoading
  }

}
