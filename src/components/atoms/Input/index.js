import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 12
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 6
    }
})
