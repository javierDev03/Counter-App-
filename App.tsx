import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [Count, setCount] = useState(10);

  return (
    <View style={[styles.container]}>
      <Text style={styles.textHuge}>Counter App</Text>
      {/* ++++++This is the counter value ++++++ */}
      <Text style={styles.textHuge}>{Count}</Text>
      {/* ++++++This is the FAB component that we created ++++++ */}
      {/* <Pressable onPress={() => setCount(Count + 1)}
        onLongPress={() => setCount(0)}
        style={styles.button}>
        <Text style={{ color: 'white', fontSize: 24 }}>+1</Text>
      </Pressable> */}
      <FAB label="+1" onPress={() => setCount(Count + 1)} onLongPress={() => setCount(0)} />
      <FAB label="Reset" onPress={() => setCount(0)} position='left' />

      <StatusBar style="auto" />
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

  textHuge: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },



});
