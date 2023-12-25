import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Signup from './Screens/Signup';
import Store from './Store';
import { Provider } from 'react-redux';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';

export default function App() {
  return (
    <>
    <Provider store={Store}>
      <StackNavigator />
      <ModalPortal/>
      <StatusBar style="auto" />
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
