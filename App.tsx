import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import NavigationContainerScreen from './src/navigation/NavigationContainerScreen';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainerScreen />
    </Provider>
  );
}
