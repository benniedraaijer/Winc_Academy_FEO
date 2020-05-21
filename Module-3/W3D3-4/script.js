const getDataFromApi = async () => {

    const genres = await getData('genre/movie/list', '');
    genres.genres.forEach((genres) => {
        const genreList = document.createElement('li');
        const genreTitle = document.createTextNode(`genre: ${genres.name} ID: ${genres.id}`);
        genreList.appendChild(genreTitle);
        document.querySelector('.ul').appendChild(genreList);
    });

    const favorite = await getData('find/tt1727824', '&external_source=imdb_id');
    document.querySelector('.favorite').innerHTML = favorite.movie_results[0].title;

    const topRated = await getData('movie/top_rated', '');
    for (let index = 0; index < 10; index++) {
        const element = topRated.results[index];
        const topRatedList = document.createElement('li');
        const topRatedTitle = document.createTextNode(element.title);
        topRatedList.appendChild(topRatedTitle);
        document.querySelector('.top-rated').appendChild(topRatedList);
    };

    const topRatedAction = await getData('discover/movie', '&sort_by=popularity.desc&page=1&with_genres=28');
    topRatedAction.results.forEach((movie) => {
        const topRatedActionList = document.createElement('li');
        const topRatedActionTitle = document.createTextNode(movie.title);
        topRatedActionList.appendChild(topRatedActionTitle);
        document.querySelector('.top-rated-action').appendChild(topRatedActionList);
    });

    const moviesFrom1975 = await getData("discover/movie", "&primary_release_year=1975");
    moviesFrom1975.results.forEach((movie) => {
        const list1975 = document.createElement('li');
        const title1975 = document.createTextNode(movie.title);
        list1975.appendChild(title1975);
        document.querySelector('.movies-1975').appendChild(list1975);
    });
};

getDataFromApi();