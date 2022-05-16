export const getGifs = async(category: any) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=CQZbjHiBUIA6Pd2nSpoucfVtcIq9Qhly`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map ((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
    return gifs
}