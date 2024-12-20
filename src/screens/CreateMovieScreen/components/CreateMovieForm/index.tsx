import React from "react";
import { TextInput, Text } from "react-native";
import { Movie } from "../../types";
import { cs } from "../../styles";

interface CreateMovieFormProps {
    movie: Movie
    setMovie: (el: Movie) => void
    error: any
}

const CreateMovieForm = ({ movie, setMovie, error }: CreateMovieFormProps) => {
    return (
        <>
            <TextInput
                placeholder="Title"
                value={movie.title}
                onChangeText={(text) => setMovie({ ...movie, title: text })}
                style={cs.inputStyle}
            />
            {error && error?.title !== null ? (
                <Text style={cs.errorText}>
                    {error?.title}
                </Text>
            ) : null}
            <TextInput
                placeholder="Year"
                keyboardType="numeric"
                value={movie.year}
                onChangeText={(text) => setMovie({ ...movie, year: text })}
                style={cs.inputStyle}
            />
            {error && error?.year !== null ? (
                <Text style={cs.errorText}>
                    {error?.year}
                </Text>
            ) : null}
            <TextInput
                placeholder="Format (DVD, ...)"
                value={movie.format}
                onChangeText={(text) => setMovie({ ...movie, format: text })}
                style={cs.inputStyle}
            />
            {error && error?.format !== null ? (
                <Text style={cs.errorText}>
                    {error?.format}
                </Text>
            ) : null}
            <TextInput
                placeholder="Actors"
                value={movie.actors}
                onChangeText={(text) => setMovie({ ...movie, actors: text })}
                style={cs.inputStyle}
            />
        </>
    )
}

export default CreateMovieForm