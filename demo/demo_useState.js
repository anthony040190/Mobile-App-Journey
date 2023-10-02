import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  const [firstName] = useState('Anthony');
  const [middleName] = useState('Verde');
  const [lastName] = useState('Magpantay');
  const [age] = useState(33);
  const [instructor, setInstructor] = useState({name: 'Austin', age: 16});

  const btnPress = () => {
    alert('Hello Friend!');
  }

  const handleClick = () => {
    setInstructor({name: 'Kylie', age: 1});
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>I am {firstName} {middleName} {lastName} .My age is {age}.</Text>
      <Text>I am {instructor.name}. My age is {instructor.age}. (Click Me One More Time! Button)</Text>

      <View style={styles.buttonStyle} >
        <Button title='Click Me!' onPress={() => alert('Hi Friend!')} />
      </View>

      <View style={styles.buttonStyle} >
        <Button title='Click Me Again!' onPress={btnPress} />
      </View>

      <View style={styles.buttonStyle} >
        <Button title='Click Me One More Time!' onPress={handleClick} />
      </View>
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
  buttonStyle: {
    marginTop: 20,
  }
});
