import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'

const InputField = ({ label, icon, inputType, keyBoardType, fieldButtonLabel, fieldButtonFunction }) => {
    return (
        <View style={styles.inputContainer}>
            {icon}
            {inputType == 'PassWord' ? (
                <TextInput placeholder={label} keyboardType={keyBoardType} secureTextEntry={true} style={styles.textInput} />
            ) : (
                <TextInput placeholder={label} keyboardType={keyBoardType} style={styles.textInput} />
            )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: COLORS.primary, fontWeight: 700 }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 30
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
    },
})

export default InputField