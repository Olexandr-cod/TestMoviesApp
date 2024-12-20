import React, { useEffect } from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorContainer from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onLogout, setIsAuth, setTokenAction } from '../redux/AuthRedux/authSlice';
import { useReduxDispatch } from '../store/store';
import { getMoviesAction } from '../redux/MoviesRedux/MoviesAction';
import { Platform } from 'react-native';

axios.defaults.baseURL = Platform.OS === 'ios' ? process.env.EXPO_PUBLIC_API_URL : 'http://10.0.2.2:8001/api/v1';

const NavigationContainerScreen = () => {
  const dispatch = useReduxDispatch()

  useEffect(() => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          dispatch(onLogout());
        }
        return Promise.reject(error);
      },
    );

    AsyncStorage.getItem('@token').then(userToken => {
      if (userToken) {
        axios.defaults.headers.Authorization = 'Bearer ' + userToken;
        dispatch(setIsAuth(true));
        dispatch(setTokenAction(userToken))
        dispatch(getMoviesAction(userToken))
      }
    });

  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigatorContainer />
    </NavigationContainer>
  );
};

export default NavigationContainerScreen;
