import { View, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ButtonIcon = ({ icon, color, size, onPress }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
    },
    pressed: {
        opacity: 0.75
    }
})
export default ButtonIcon