import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundApp: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 70,
        textAlign: 'right',
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 30,
        textAlign: 'right',
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingVertical: 2,
        paddingHorizontal: 10,
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonText : {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: '600',
    }

});

