import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
profileContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        padding: 20,
        backgroundColor: '#fff',
    },
    appButtonContainer: {
        elevation: 8,
        marginTop: 50,
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    SubmitButtonStyle: {
        alignSelf: 'stretch',
        marginTop: 50,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
welcomeText: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        fontSize: 18,
    },
    nativeText: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        fontSize: 15,
    },
    image: {
        marginBottom: 40,
    },

    inputView: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },

    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        alignSelf: 'center',
        height: 30,
        color: '#000',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    loginBtn: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        alignSelf: 'center'
    }
});

