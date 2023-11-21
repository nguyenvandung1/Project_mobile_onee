import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'

const InputField = ({ label, icon, inputType, keyBoardType, fieldButtonLabel, fieldButtonFunction, onchange, valu }) => {
    return (
        <View style={styles.inputContainer}>
            {icon}
            {inputType === 'PassWord' ? (
                <TextInput value={valu} placeholder={label} keyboardType={keyBoardType} secureTextEntry={true} style={styles.textInput} onChangeText={text=>onchange(text)}/>
            ) : (
                <TextInput placeholder={label} keyboardType={keyBoardType} style={styles.textInput} onChangeText={onchange}/>
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