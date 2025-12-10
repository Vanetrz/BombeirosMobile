import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff', 
        alignItems: 'center', 
    },
    
    logoContainer: {
        flexDirection: 'row',
        marginTop: 80, 
        marginBottom: 30,
    },

    siren: {
        width: 25,
        height: 15,
        backgroundColor: '#dc3545', 
        borderRadius: 999, 
        marginHorizontal: 4,
    },

    sirenMiddle: {
        transform: [{ translateY: 5 }], 
    },

    mainHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },

    subHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 50, 
    },

    loginSection: {
        width: '100%',
        maxWidth: 350, 
        alignItems: 'center',
    },

    promptTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },

    promptSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },

    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },

    button: {
        width: '100%',
        backgroundColor: '#2B65EC', 
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    linkText: {
        color: '#2B65EC',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    }
});