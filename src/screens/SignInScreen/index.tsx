import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import FormContainer from "../../components/Layout/FormContainer";
import { DASHBOARD_ROUTES, RootDashboard } from "../../navigation/routes";
import { useReduxDispatch, useReduxSelector } from "../../store/store";
import SignInForm from "./components/SignInForm";
import ButtonDefault from "../../components/UI/ButtonDefault";
import { colors, positionHelpers } from "../../styles";
import { userLoginAction } from "../../redux/AuthRedux/AuthAction";
import { cs } from "./styles";

const SIGNIN_TEXT = 'Sign In';
const SIGNUP_TEXT = 'Sign up';

interface FormData {
    email?: string;
    password?: string;
}

const SignInScreen = () => {
    const navigation = useNavigation<NavigationProp<RootDashboard>>()
    const dispatch = useReduxDispatch()
    const { error, loading } = useReduxSelector(state => state.auth)
    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSignIn = (data: FormData) => {
        const dataLogin = {
            email: data?.email,
            password: data?.password,
        };
        dispatch(userLoginAction(dataLogin));
    };

    return (
        <FormContainer>
            <View style={cs.container}>
                <View style={cs.mt40}>
                    <View style={positionHelpers.alignCenter}>
                        <Text style={cs.mainTitle}>{SIGNIN_TEXT}</Text>
                    </View>
                    <SignInForm
                        control={control}
                        errors={error?.error?.code}
                    />
                    <ButtonDefault
                        buttoStyles={cs.buttonSignInStyle}
                        onPress={handleSubmit(onSignIn)}>
                        <Text style={[positionHelpers.textCenter, { color: colors.white }]}>
                            {SIGNIN_TEXT}
                        </Text>
                    </ButtonDefault>
                    <ButtonDefault
                        disabled={loading}
                        loading={loading}
                        activeOpacity={0.6}
                        buttoStyles={cs.buttonSignUpStyle}
                        onPress={() => navigation.navigate(DASHBOARD_ROUTES.SIGN_UP_SCREEN)}>
                        <Text style={positionHelpers.textCenter}>
                            {SIGNUP_TEXT}
                        </Text>
                    </ButtonDefault>
                </View>
            </View>
        </FormContainer>
    )
}

export default SignInScreen