import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cs } from './styles';

import { useNavigation } from '@react-navigation/native';
import ButtonDefault from '../UI/ButtonDefault';
import { onLogout } from '../../redux/AuthRedux/authSlice';
import { useReduxDispatch } from '../../store/store';

const BACK_TEXT = '<- Back';
const LOGOUT_TEXT = 'Logout';

interface CustomHeaderProps {
    title: string;
    showLogout?: boolean
    showBackBtn?: boolean
}

const CustomHeader = ({ title, showLogout = false, showBackBtn = false }: CustomHeaderProps) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useReduxDispatch()

    const paddingInsets = insets.top ? insets.top + 10 : 20;

    return (
        <View
            style={[
                showBackBtn ? cs.container : cs.containerTwo,
                {
                    paddingTop: paddingInsets,
                },
            ]}>
            <View>
                {!!showBackBtn &&
                    <>
                        {!showLogout ? (
                            <>
                                <ButtonDefault onPress={() => navigation.goBack()}>
                                    <Text style={cs.textHeader}>
                                        {BACK_TEXT}
                                    </Text>
                                </ButtonDefault>
                            </>
                        ) : (
                            <ButtonDefault onPress={() => dispatch(onLogout())}>
                                <Text style={cs.textHeader}>
                                    {LOGOUT_TEXT}
                                </Text>
                            </ButtonDefault>
                        )}
                    </>
                }
            </View>
            <Text style={cs.textHeader}>
                {title}
            </Text>
            {!!showBackBtn && <ButtonDefault buttoStyles={{ opacity: 0 }} onPress={() => true}>
                <Text style={cs.textHeader}>
                    {BACK_TEXT}
                </Text>
            </ButtonDefault>}
        </View>
    );
};

export default CustomHeader;
