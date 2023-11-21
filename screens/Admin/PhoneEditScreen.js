import { View, StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
// import { ExpenseContext } from '../store/context/expense-context'
import ButtonIcon from '../../components/UI/ButtonIcon'
import PhoneForm from '../../components/ManagePhone/PhoneForm'
import { PhoneContext } from '../../store/phone-context'
// import OverLayLoading from '../components/UI/OverLayLoading'
const PhoneEditScreen = ({ route, navigation }) => {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const phonesContext = useContext(PhoneContext)
    const edtPhoneId = route.params?.phoneId
    const isEditing = !!edtPhoneId
    console.log(edtPhoneId);
    // const selectExpense = expenseContext.expenses.find((expense) => { return expense.id === edtExpenseId })
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: isEditing ? 'Edit Expense' : 'Add Expense'
    //     })
    // }, [navigation, isEditing])
    async function deleteExpenseHandler() {
        // setIsSubmiting(true)
        // await deleteExpense(edtExpenseId)
        phonesContext.deletePhone(edtPhoneId)
        navigation.goBack()
    }
    function cancelExpenseHandler() {
        navigation.goBack()
    }
    async function confirmExpenseHandler(expensesData) {
        // setIsSubmiting(true)
        if (isEditing) {
            phonesContext.updataPhone(edtPhoneId, expensesData)
            // await updataPhone(edtExpenseId, expensesData)
        } else {
            const id = await storeExpense(expensesData)
            expenseContext.addExpense({ ...expensesData, id: id })
        }
        navigation.goBack()
    }
    // if (isSubmiting) return <OverLayLoading />
    return (
        <View style={styles.container}>
            <PhoneForm onCancel={cancelExpenseHandler} onSubmit={confirmExpenseHandler} buttonLabel={isEditing ? 'Updata' : 'Add'} />
            {isEditing && <View style={styles.deleteContainer}>
                <ButtonIcon icon={'trash'} size={36} color={'white'} onPress={deleteExpenseHandler} />
            </View>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        padding: 24
    },
    deleteContainer: {
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#ddd',
        marginTop: 8,
        paddingTop: 12
    },

})

export default PhoneEditScreen