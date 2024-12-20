import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { useReduxDispatch, useReduxSelector } from "../../store/store";
import { getMoviesAction, getOneMovieAction } from "../../redux/MoviesRedux/MoviesAction";
import ButtonDefault from "../../components/UI/ButtonDefault";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DASHBOARD_ROUTES, RootDashboard } from "../../navigation/routes";
import MovieItem from "./components/MovieItem";
import { MoviesType } from "../../redux/MoviesRedux/types";
import { cs } from "./styles";
import { colors, positionHelpers } from "../../styles";

const CREATE_MOVIE_TEXT = 'Crete movie'

const MoviesScreen = () => {
    const navigation = useNavigation<NavigationProp<RootDashboard>>()
    const dispatch = useReduxDispatch()
    const token = useReduxSelector(state => state?.auth.isToken)
    const { moviesData, loading } = useReduxSelector(state => state?.movies)

    const RenderMovieCallback = useCallback(({ item }: { item: MoviesType }) =>
        <MovieItem
            userId={item?.id}
            title={item?.title}
            year={item?.year}
            onPress={() => {
                dispatch(getOneMovieAction({ token, id: Number(item?.id) }))
                navigation.navigate(DASHBOARD_ROUTES.MOVIE_DETAIL_SCREEN)
            }}
        />, [navigation]
    );

    const onRefreshCallback = useCallback(() => {
        dispatch(getMoviesAction(token))
    }, [dispatch])

    return (
        <View>
            <ButtonDefault
                buttoStyles={cs.createMovieButton}
                onPress={() => navigation.navigate(DASHBOARD_ROUTES.CREATE_MOVIES_SCREEN)}>
                <Text style={[positionHelpers.textCenter, { color: colors.white }]}>{CREATE_MOVIE_TEXT}</Text>
            </ButtonDefault>
            <FlatList
                data={moviesData}
                keyExtractor={key => key?.id.toString()}
                renderItem={RenderMovieCallback}
                refreshing={loading}
                onRefresh={onRefreshCallback}
            />
        </View>
    )
}

export default MoviesScreen