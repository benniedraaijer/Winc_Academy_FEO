const API_KEY = "***********************************"

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try {
        const response = await fetch(apiUrl, {
            method: "GET"
        });
        console.log(response);
        const data = await response.json()
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);

    }
}