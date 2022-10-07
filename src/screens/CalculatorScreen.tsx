import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import ButtonCalculator from '../components/buttonCalculator/ButtonCalculator';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.smallResult} > 50</Text>
            <Text style={styles.result} > 1,500.00</Text>

            {/* Seccion de botones */}
            <View style={styles.rows} >
                <ButtonCalculator
                    label={"C"}
                    backgroundColor={"#9B9B9B"}
                    colorLabel={"black"}
                />

                <ButtonCalculator
                    label={"+/-"}
                    backgroundColor={"#9B9B9B"}
                    colorLabel={"black"}
                />

                <ButtonCalculator
                    label={"del"}
                    backgroundColor={"#9B9B9B"}
                    colorLabel={"black"}
                />

                <ButtonCalculator
                    label={"/"}
                    backgroundColor={"#FF9427"}
                    colorLabel={"white"}
                />

            </View>
        </View>
    )
}

export default CalculatorScreen
