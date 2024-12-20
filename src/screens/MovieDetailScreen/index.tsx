import React, { useCallback } from "react";
import { ScrollView, View, Text } from "react-native";
import { useReduxDispatch, useReduxSelector } from "../../store/store";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import MovieInformation from "./components/MovieInformation";
import { positionHelpers } from "../../styles";
import { deleteMovieAction } from "../../redux/MoviesRedux/MoviesAction";
import { useNavigation } from "@react-navigation/native";

const MovieDetailScreen = () => {
    const navigation = useNavigation()
    const dispatch = useReduxDispatch()
    const token = useReduxSelector(state => state?.auth.isToken)
    const { movieOneData, loading } = useReduxSelector(state => state?.movies)

    const onDelete = useCallback(() => {
        if (movieOneData?.id) {
            dispatch(deleteMovieAction({ token, id: Number(movieOneData?.id), navigation }))
        }
    }, [])


    return (
        <ScrollView>
            {!loading ? (
                <MovieInformation
                    id={movieOneData?.id}
                    title={movieOneData?.title}
                    year={movieOneData?.year}
                    format={movieOneData?.format}
                    actors={movieOneData?.actors}
                    onDelete={() => onDelete()}
                />
            ) : (
                <View style={positionHelpers.mt20}>
                    <LoadingIndicator />
                </View>
            )
            }
        </ScrollView>
    )
}

export default MovieDetailScreen