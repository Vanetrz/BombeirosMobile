import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    group: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',

        borderWidth: 1,
        borderColor: '#D7DEDD',
        borderRadius: 8,
    },

    input: {
        backgroundColor: "transparent",
    },

    label: {
        marginBottom: 4,
        fontWeight: '500',
    },

    // erro: {
    //     color: '#DC1637',
    //     marginTop: 5,
    // }
});