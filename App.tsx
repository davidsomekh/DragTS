import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  List  from "./Components/List/List";


export default function App() {
  return (
    <View>
     <List/>
    </View>
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
