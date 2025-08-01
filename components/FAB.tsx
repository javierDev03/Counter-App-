import { View, Text, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';

interface Props {
    label: string;
    position?: 'left' | 'right'; //optional prop for positioning

    //methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({
    label,
    onPress,
    onLongPress,
    position = 'right'
}: Props) {
    return (
        <Pressable onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => [styles.button, position === 'right' ? styles.positionRight : styles.positionLeft,
            pressed ? { opacity: 0.7 } : { opacity: 1 }
            ]}>
            <Text style={{ color: 'white', fontSize: 24 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,

        backgroundColor: '#007BFF',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        elevation: 3
    },

    positionRight: {
        right: 20,

    },

    positionLeft: {
        left: 20,
    }

})