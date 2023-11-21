import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import ButtonCustom from '../UI/ButtonCustom'

const PhoneForm = ({ onCancel, onSubmit, buttonLabel, defaultValues }) => {
    // const [inputs, setInputs] = useState({
    //     amount: { value: defaultValues ? defaultValues.amount.toString() : '', isValid: true },
    //     date: { value: defaultValues ? getFormattedDate(defaultValues.date) : '', isValid: true },
    //     description: { value: defaultValues ? defaultValues.description : '', isValid: true },
    // })

    function inputChangeValue(inputIndentifier, enteredValue) {
        // setInputs((currentInput) => {
        //     return {
        //         ...currentInput,
        //         [inputIndentifier]: { value: enteredValue, isValid: true }
        //     }
        // })
    }
    function submitHandler() {
        // const expensesData = {
        //     amount: +inputs.amount.value,
        //     date: new Date(inputs.date.value),
        //     description: inputs.description.value,
        // }
        // const isValiAmount = !isNaN(expensesData.amount) && expensesData.amount > 0
        // const isValiDate = expensesData.date.toString() !== 'Invalid Date'
        // const isValiDescription = expensesData.description.length > 0

        // if (!isValiAmount || !isValiDate || !isValiDescription) {
        //     // Alert.alert('Invalid Input', 'Please check your input Value')
        //     setInputs((currentInput) => {
        //         return {
        //             amount: { value: currentInput.amount.value, isValid: isValiAmount },
        //             date: { value: currentInput.date.value, isValid: isValiDate },
        //             description: { value: currentInput.description.value, isValid: isValiDescription },
        //         }
        //     })
        //     return
        // }
        // onSubmit(expensesData)
    }
    // const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid
    return (
        <ScrollView style={styles.containerInput} showsVerticalScrollIndicator= {false}>
            <Text style={styles.title}>Your Phone</Text>
            <Input style={styles.rowInput}
                // invalid={!inputs.amount.isValid}
                label={'Name'} textInputConfig={{
                    onChangeText: inputChangeValue.bind(this, 'name'),
                    // value: inputs.amount.value,
                }} />
            <Input style={styles.rowInput}
                // invalid={!inputs.amount.isValid}
                label={'Price New'} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeValue.bind(this, 'priceNew'),
                    // value: inputs.amount.value,
                }} />
            <Input style={styles.rowInput}
                // invalid={!inputs.amount.isValid}
                label={'Price Old'} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeValue.bind(this, 'priceOld'),
                    // value: inputs.amount.value,
                }} />
            <Input style={styles.rowInput}
                // invalid={!inputs.amount.isValid}
                label={'Quantity'} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeValue.bind(this, 'quantity'),
                    // value: inputs.amount.value,
                }} />
            <Input style={styles.rowInput}
                // invalid={!inputs.amount.isValid}
                label={'Type Product'} textInputConfig={{
                    onChangeText: inputChangeValue.bind(this, 'typeProduct'),
                    // value: inputs.amount.value,
                }} />
            <Input label={'Product Info'}
                // invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeValue.bind(this, 'productInfor'),
                    // value: inputs.description.value,
                }} />
            {/* {formIsInvalid && <Text style={styles.errorText}>Invalid input value - please check entered data!</Text>} */}
            <View style={styles.buttons}>
                <ButtonCustom style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</ButtonCustom>
                <ButtonCustom style={styles.button} onPress={submitHandler}>{buttonLabel}</ButtonCustom>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        margin: 8
    }
})

export default PhoneForm