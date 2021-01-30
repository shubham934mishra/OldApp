
//@flow
import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import { getLoginData } from '../actions/LoginAction';
import { NAVIGATION_DASHBOARD } from '../navigations/routes';
import { styles } from '../utilities/style';
import { CustomTextInput } from '../globalComponents/CustomTextInput';
import { AppButton } from '../globalComponents/CustomButton';

const mapStateToProps = (state) => {
    const dataSource = state.LoginReducer.data;
    return {
        dataSource
    };
};

const mapDispatchToProps = (dispatch) => ({
    callService: (loginObj) => dispatch(getLoginData(loginObj)),
});


class LoginPage extends Component {

    state = {
        userName: '',
        password: '',
        device: '',
    };

    onGuestPress = () => {
        const loginObj = {
            userName: this.state.userName,
            password: this.state.password,
            device: this.state.device
        };
        this.props.callService(loginObj);
        this.props.navigation.navigate(NAVIGATION_DASHBOARD);
    }

    render() {
        return (
            <View style={styles.container}>

                <CustomTextInput
                    testID={'TextInput'}
                    label='User Name'
                    style={styles.TextInput}
                    ipOnChangeText={userName => this.setState({ userName })}
                />

                <CustomTextInput
                    testID={'TextInputPass'}
                    style={styles.TextInput}
                    label="Password"
                    ipOnChangeText={password => this.setState({ password })}
                />

                <AppButton
                    testID='loginButton'
                    stylee={styles.loginBtn}
                    onPress={this.onGuestPress}
                    title='LOGIN'
                />
            </View>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
