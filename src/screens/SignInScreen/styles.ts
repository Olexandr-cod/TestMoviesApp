import { StyleSheet } from "react-native";

export const cs = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    mt40: {
        marginTop: 40
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 30
    },
    buttonSignInStyle: {
        padding: 10,
        marginTop: 20,
        backgroundColor: '#000',
        borderRadius: 8,
        marginHorizontal: 10
    },
    buttonSignUpStyle: {
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
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
        textAlign: 'center',
        marginTop: 20
    }
})