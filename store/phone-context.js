import { createContext, useReducer } from "react";
import { dataProduct } from "../data/data";

export const PhoneContext = createContext({
    phones: [],
    addPhone: ({ name, priceNew, priceOld, quantity, productInfo, typeProduct }) => { },
    setPhones: (phones) => { },
    updataPhone: (id, { name, priceNew, priceOld, quantity, productInfo, typeProduct }) => { },
    deletePhone: (id) => { },
})
function phonesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{ ...action.payload, id: id }, ...state]
        case 'SET':
            return action.payload
        case 'UPDATA':
            const updatablePhoneIndex = state.findIndex((phone) => phone.id === action.payload.id)
            const updatablephone = state[updatablePhoneIndex]
            const updataItem = [...updatablephone, ...action.payload.data]
            const updatablePhones = [...state]
            updatablePhones[updatablePhoneIndex] = updataItem
            return updatablePhones
        case 'DELETE':
            return state.filter((phone) => phone.id !== action.payload)
        default:
            return state
    }
}
function PhoneContextProvider({ children }) {
    const [phonesState, dispatch] = useReducer(phonesReducer, dataProduct)

    function addPhone(phonesData) {
        dispatch({ type: 'ADD', payload: phonesData })
    }
    function setPhone(phonesData) {
        dispatch({ type: 'SET', payload: phonesData })
    }
    function updataPhone(id, phonesData) {
        dispatch({ type: 'UPDATA', payload: { id: id, data: phonesData } })
    }
    function deletePhone(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    const value = {
        phones: phonesState,
        addPhone: addPhone,
        setPhone: setPhone,
        updataPhone: updataPhone,
        deletePhone: deletePhone,
    }
    return <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
}

export default PhoneContextProvider