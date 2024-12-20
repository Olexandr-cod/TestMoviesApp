import React from "react";
import { Text, View } from "react-native";
import { ActorsType } from "../../../../redux/MoviesRedux/types";
import { colors, positionHelpers } from "../../../../styles";
import ButtonDefault from "../../../../components/UI/ButtonDefault";
import { cs } from "../../styles";

const MOVIE_INFO_TEXT = 'Movie Info'
const DELETE_MOVIE_TEXT = 'Delete movie'

interface MovieInformationProps {
    id: number
    title: string
    year: string
    format: string
    actors: ActorsType[]
    onDelete: () => void
}

const MovieInformation = ({ id, title, year, format, actors, onDelete }: MovieInformationProps) => {
    return (
        <>
            <Text style={[positionHelpers.textCenter, { fontWeight: 'bold', fontSize: 20 }]}>{MOVIE_INFO_TEXT}</Text>
            <View style={positionHelpers.mt20}>
                <Text>Id:  {id}</Text>
                <Text>Title: {title}</Text>
                <Text>Year:  {year}</Text>
                <Text>Format:  {format}</Text>
                <Text>Actors:</Text>
                {
                    actors?.map((item: ActorsType) => {
                        return (
                            <View key={item?.id}>
                                {
                                    item?.name !== '' ? (
                                        <View style={{ padding: 10, margin: 5, backgroundColor: 'silver' }}>
                                            <Text>ID: {item?.id}. Name: {item?.name}</Text>
                                        </View>
                                    ) : null
                                }
                            </View>
                        )
                    })
                }
            </View>
            <ButtonDefault buttoStyles={cs.buttonStyle} onPress={onDelete}>
                <Text style={[positionHelpers.textCenter, { color: colors.white }]}>
                    {DELETE_MOVIE_TEXT}
                </Text>
            </ButtonDefault>
        </>
    )
}

export default MovieInformation