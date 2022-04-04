import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../theme/appTheme'
import IButtonCalculator from './IButtonCalculator'

const ButtonCalculator = ({
    label,
    backgroundColor,
    colorLabel,
}: IButtonCalculator) => {

    return (

        <View style={{
            ...styles.boton,
            backgroundColor: backgroundColor,
        }}>
            <Text style={{
                ...styles.botonText,
                color: colorLabel,
            }} >{label}</Text>
        </View>

    )
}

export default ButtonCalculator