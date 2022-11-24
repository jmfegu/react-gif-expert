
export const getGifs = async ( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=Z0r69m6E5c5neBCMbst53HkiTxW5kczX&q=${category}&limit=6`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(gif => (
    {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized.url
    }
  ));

  return gifs;

}