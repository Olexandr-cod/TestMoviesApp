import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { cs } from "../../styles";

interface MovieItemProps {
    userId: string | number
    title: string
    year: string | number
    onPress: () => void
}

const MovieItem = ({ userId, title, year, onPress }: MovieItemProps) => {
    return (
        <TouchableOpacity style={cs.containerMovieItem} onPress={onPress}>
            <Text>ID: {userId}.</Text>
            <Text>Title: {title}</Text>
            <Text>Year: {year}</Text>
        </TouchableOpacity>
    )
}

export default MovieItem