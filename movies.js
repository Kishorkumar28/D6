class movie{
    constructor(title,studio,rating="PG"){
        this.title = title
        this.studio = studio
        this.rating=rating
    }
    static getpg(movies){
        return movies.filter(movie=> movie.rating==="PG")
    }
    
    
    
    }
    const movies = [
        new movie("Movie1", "Studio1", "PG"),
        new movie("Movie2", "Studio2", "PG-13"),
        new movie("Movie3", "Studio3", "PG"),
        new movie("Movie4", "Studio4", "R")
    ]
    const X_Men_Origins=new movie("X-Men-Origins","20th Century Studios", "13+");
    console.log(X_Men_Origins)
    const pgMovies = movie.getpg(movies);
    console.log(pgMovies);