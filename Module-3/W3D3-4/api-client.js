const API_KEY = "***********************************"
const getData = async (url, sourch) => {
    const apiUrl = `https://api.themoviedb.org/3/${url}?api_key=${API_KEY}${sourch}`
    try {
        const response = await fetch(apiUrl, {
            method: "GET"
        });
        const genres = await response.json();
        return genres
    } catch (error) {
        console.log(error);
    }
}