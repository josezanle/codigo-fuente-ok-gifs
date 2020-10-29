


export const getGifs = async( category ) => {

    // nota: utilizare fetch para la consulta HTTP al endpoint del API de Giphy


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=20&api_key=nTPAFgg6e85GvsefkJz7DlugTbmqZWrD`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}