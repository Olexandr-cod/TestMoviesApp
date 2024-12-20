import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import FormContainer from "../../components/Layout/FormContainer";
import { useReduxDispatch, useReduxSelector } from "../../store/store";
import ButtonDefault from "../../components/UI/ButtonDefault";
import { colors, positionHelpers } from "../../styles";
import SignUpForm from "./components/SignUpForm";
import { userRegistrAction } from "../../redux/AuthRedux/AuthAction";
import { cs } from "./styles";

const SIGNUP_TEXT = 'Sign Up';
const SIGNIN_TEXT = 'Sign In';

interface FormData {
    email?: string;
    name?: string
    password?: string;
    confirmPassword?: string;
}

const SignUpScreen = () => {
    const navigation = useNavigation()
    const dispatch = useReduxDispatch()
    const { error, loading } = useReduxSelector(state => state?.auth)

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        },
    });

    const onSignUp = (data: FormData) => {
        const dataRegistr = {
            email: data?.email,
            name: data?.name,
            password: data?.password,
            confirmPassword: data?.confirmPassword
        };
        dispatch(userRegistrAction(dataRegistr));
    };

    return (
        <FormContainer>
            <>
                <ScrollView style={cs.container}>
                    <ButtonDefault onPress={() => navigation.goBack()}>
                        <Text>{`<-- ${SIGNIN_TEXT}`}</Text>
                    </ButtonDefault>

                    <View style={cs.mt40}>
                        <View style={positionHelpers.alignCenter}>
                            <Text style={cs.mainTitle}>
                                {SIGNUP_TEXT}
                            </Text>
                        </View>
                        <SignUpForm
                            control={control}
                            errors={error?.error?.fields}
                        />
                        <ButtonDefault
                            disabled={loading}
                            loading={loading}
                            activeOpacity={0.6}
                            buttoStyles={cs.buttonSignUpStyle}
                            onPress={handleSubmit(onSignUp)}>
                            <Text style={[positionHelpers.textCenter, { color: colors.white }]}>
                                {SIGNUP_TEXT}
                            </Text>
                        </ButtonDefault>
                    </View>
                </ScrollView>
            </>
        </FormContainer>
    )
}

export default SignUpScreen