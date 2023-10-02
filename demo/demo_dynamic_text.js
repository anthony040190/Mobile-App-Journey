import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
    const [firstName] = useState('John');
    const [middleName] = useState('Doe');
    const [lastName] = useState('Doee');
    const [age] = useState(20);
    return (
        <View style={styles.container}>
            <Text>I am {firstName} {middleName} {lastName} .My age is {age}.</Text>
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

});
