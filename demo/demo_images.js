import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Image source={require('./assets/cat-basket.jpg')} style={styles.image} />
            <Text>Hello World!</Text>
            <Image source={require('./assets/dog-yellow-background.jpg')} style={styles.image} />
            <Text>Hello World!</Text>
            <Image source={require('./assets/robot.jpg')} style={styles.image} />

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
    image: {
        height: 200,
        width: 200,
    }
});
