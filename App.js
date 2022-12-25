import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import Numpad from "./src/Numpad";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>

                <Numpad/>
                <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: "center",
        alignItems: "center",
    },
    btnRow: {
        flexDirection: "row",
        maxWidth: '100%'
    }

});
