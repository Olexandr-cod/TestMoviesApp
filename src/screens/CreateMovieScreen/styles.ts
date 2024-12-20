import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const cs = StyleSheet.create({
    buttonStyle: {
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: colors.black,
        borderColor: colors.black,
        marginHorizontal: 10
    },
    inputStyle: {
        marginTop: 15,
        marginHorizontal: 10,
        padding: 13,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'silver',
        backgroundColor: 'silver'
    },
    errorText: {
        color: 'red', 
        marginLeft: 10
    },
})