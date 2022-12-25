import {Text, View, StyleSheet, TouchableOpacity} from "react-native";


const Button = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
            <View style={styles.block}>
                <Text style={styles.text}>{props.number}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#000001',
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: '#747477',
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,

    },
    text: {
        color: '#9f9fa0',
        fontSize: 30
    }
})

export default Button
