import React from "react";
import Button from "./Button";
import {View, Text, StyleSheet} from "react-native";

export default function Numpad() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState(null);

    const handleNumberPress = (buttonValue) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue) => {
        if(result && !secondNumber) {
            setSecondNumber(result)
        }
         else {
            setSecondNumber(firstNumber)
        }
        setOperation(buttonValue);
        setFirstNumber("");
        setResult(null)


    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber('');
        setOperation("");
        setResult(null);
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text
                style={result < 99999 ? [styles.screenFirstNumber, {color: 'rgb(16,96,2)'}] : [styles.screenFirstNumber, {
                    fontSize: 50,
                    color: 'rgb(128, 0, 128)'
                }]}>{result.toString()}</Text>;
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            return <Text style={styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[styles.screenFirstNumber, {fontSize: 60}]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[styles.screenFirstNumber, {fontSize: 40}]}>
                    {firstNumber}
                </Text>
            );
        }
    };

    const getResult = () => {
        switch (operation) {
            case "+": {
                clear();
                let result = parseFloat(secondNumber) + parseFloat(firstNumber)
                const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0);
                if (f(result) > 3) result = result.toPrecision(4);
                setResult(result)
                // setSecondNumber(result)
                console.log(firstNumber)
                break;
            }
            case "-": {
                clear();
                let result = parseFloat(secondNumber) - parseFloat(firstNumber)
                const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0);
                if (f(result) > 3) result = result.toPrecision(4);
                setResult(result)
                break;
            }
            case "*": {
                clear();
                let result = parseFloat(secondNumber) * parseFloat(firstNumber)
                const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0);
                if (f(result) > 3) result = result.toPrecision(4);
                setResult(result)
                break;
            }
            case "/": {
                clear();
                let result = parseFloat(secondNumber) / parseFloat(firstNumber)
                const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0)
                if (f(result) > 3) result = result.toPrecision(4);
                setResult(result)
                break;
            }
            case '^': {
                clear()
                let result = parseFloat(secondNumber) ** parseFloat(firstNumber)
                const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0);
                if (f(result) > 3) result = result.toPrecision(4);
                setResult(result)
                break
            }
            case '%': {
                clear()
                let result = parseFloat(secondNumber) % parseFloat(firstNumber)
                console.log(result)
                const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : 0);
                if (f(result) > 3) result = result.toPrecision(4);
                setResult(result)
                break
            }
            default:
                clear();
                setResult(0);
                break;
        }
    };

    return (
        <View style={styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                    marginBottom: 40
                }}
            >
                <Text style={styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{color: "purple", fontSize: 40, fontWeight: '500'}}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={styles.btnRow}>
                <Button number="C" onPress={clear}/>
                <Button number="^" onPress={() => handleOperationPress("^")}/>
                <Button number="％" onPress={() => handleOperationPress("%")}/>
                <Button number="÷" onPress={() => handleOperationPress("/")}/>
            </View>
            <View style={styles.btnRow}>
                <Button number="7" onPress={() => handleNumberPress("7")}/>
                <Button number="8" onPress={() => handleNumberPress("8")}/>
                <Button number="9" onPress={() => handleNumberPress("9")}/>
                <Button number="×" onPress={() => handleOperationPress("*")}/>
            </View>
            <View style={styles.btnRow}>
                <Button number="4" onPress={() => handleNumberPress("4")}/>
                <Button number="5" onPress={() => handleNumberPress("5")}/>
                <Button number="6" onPress={() => handleNumberPress("6")}/>
                <Button number="-" onPress={() => handleOperationPress("-")}/>
            </View>
            <View style={styles.btnRow}>
                <Button number="1" onPress={() => handleNumberPress("1")}/>
                <Button number="2" onPress={() => handleNumberPress("2")}/>
                <Button number="3" onPress={() => handleNumberPress("3")}/>
                <Button number="+" onPress={() => handleOperationPress("+")}/>
            </View>
            <View style={styles.btnRow}>
                <Button number="." onPress={() => handleNumberPress(".")}/>
                <Button number="0" onPress={() => handleNumberPress("0")}/>
                <Button number="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))}/>
                <Button number="=" onPress={() => getResult()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000001',
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
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 70,
        color: '#747477',
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: '#747477',
        fontWeight: '200',
        alignSelf: "flex-end",
    },

});
