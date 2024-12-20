export interface MovieState {
    loading: boolean;
    moviesData: MoviesType[];
    movieOneData: MovieType[]
    error: Error | null;
}

export type MoviesType = {
    id: number | string;
    title: string;
    year: number | string;
    format: string;
    createdAt: string;
    updatedAt: string;
};

export type ActorsType = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export type MovieType = {
    id: number;
    title: string;
    year: number;
    format: string;
    createdAt: string;
    updatedAt: string;
    actors: ActorsType[]
};



export type MovieBodyType = {
    title: string,
    year: number,
    format: string,
    actors: string[]
}


