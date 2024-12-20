import React, { useState } from "react";
import FormContainer from "../../components/Layout/FormContainer";
import { Button, View, ScrollView, Text, TextInput } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useReduxDispatch, useReduxSelector } from "../../store/store";
import ButtonDefault from "../../components/UI/ButtonDefault";
import { createMovieAction } from "../../redux/MoviesRedux/MoviesAction";
import { useNavigation } from "@react-navigation/native";
import CreateMovieForm from "./components/CreateMovieForm";
import { colors, positionHelpers } from "../../styles";
import { cs } from "./styles";
import { Movie } from "./types";

const CREATE_MOVIE_TEXT = 'Crete movie'

const CreateMovieScreen = () => {
    const navigation = useNavigation()
    const dispatch = useReduxDispatch()
    const token = useReduxSelector(state => state?.auth?.isToken)
    const { loading, error } = useReduxSelector(state => state?.movies)

    const [movie, setMovie] = useState<Movie>({
        title: '',
        year: '',
        format: '',
        actors: '',
    });

    const createMovie = () => {
        const movieData = {
            title: movie.title,
            year: parseInt(movie.year, 10),
            format: movie.format,
            actors: movie.actors.split(',').map((actor) => actor.trim()),
        };
        dispatch(createMovieAction({ token, movie: movieData, navigation }));
    };

    return (
        <FormContainer>
            <ScrollView>
                <CreateMovieForm movie={movie} setMovie={setMovie} error={error?.error?.fields} />
                <ButtonDefault
                    disabled={loading}
                    loading={loading}
                    activeOpacity={0.6}
                    buttoStyles={cs.buttonStyle}
                    onPress={createMovie}>
                    <Text style={[positionHelpers.textCenter, { color: colors.white }]}>
                        {CREATE_MOVIE_TEXT}
                    </Text>
                </ButtonDefault>
            </ScrollView>
        </FormContainer >
    )
}

export default CreateMovieScreen