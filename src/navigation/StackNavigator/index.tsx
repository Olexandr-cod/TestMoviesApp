import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DASHBOARD_ROUTES } from '../routes';
import { useReduxSelector } from '../../store/store';
import CustomHeader from '../../components/CustomHeader';

// Stack
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import MoviesScreen from '../../screens/MoviesScreen';
import CreateMovieScreen from '../../screens/CreateMovieScreen';
import MovieDetailScreen from '../../screens/MovieDetailScreen';

const Stack = createStackNavigator();

const StackNavigatorContainer = () => {
  const { isAuth } = useReduxSelector(state => state?.auth)

  return (
    <Stack.Navigator initialRouteName={DASHBOARD_ROUTES.SIGN_IN_SCREEN}>
      {
        !isAuth ? (
          <>
            <Stack.Screen
              name={DASHBOARD_ROUTES.SIGN_IN_SCREEN}
              component={SignInScreen}
              options={{
                headerShown: false,

              }}
            />
            <Stack.Screen
              name={DASHBOARD_ROUTES.SIGN_UP_SCREEN}
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={DASHBOARD_ROUTES.MOVIES_SCREEN}
              component={MoviesScreen}
              options={{
                header: () => <CustomHeader title="Movies" showBackBtn={true} showLogout={true} />,
              }}
            />
            <Stack.Screen
              name={DASHBOARD_ROUTES.MOVIE_DETAIL_SCREEN}
              component={MovieDetailScreen}
              options={{
                header: () => <CustomHeader title="Movie Info" showBackBtn={true} showLogout={false} />,
              }}
            />
            <Stack.Screen
              name={DASHBOARD_ROUTES.CREATE_MOVIES_SCREEN}
              component={CreateMovieScreen}
              options={{
                header: () => <CustomHeader title="Create Movie" showBackBtn={true} showLogout={false} />,
              }}
            />
          </>
        )
      }
    </Stack.Navigator>
  );
};

export default StackNavigatorContainer;
