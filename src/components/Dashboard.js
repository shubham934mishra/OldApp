import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../utilities/style';
import { NAVIGATION_PROFILE } from '../navigations/routes';
import CustomText from '../globalComponents/CustomText';
import { AppButton } from '../globalComponents/CustomButton';

class Dashboard extends Component {
    onGuestPress = () => {
        this.props.navigation.navigate(NAVIGATION_PROFILE);
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomText>Welcome,
                 {this.props.dataSource.userName}
                </CustomText>

                <SwipeButton
                    disabled={false}
                    swipeSuccessThreshold={70}
                    height={45}
                    width={330}
                    title="Swipe to Continue"
                    titleColor='#fff'
                    onSwipeSuccess={() => {
                        this.onGuestPress();
                    }}
                    thumbIconBackgroundColor="#000" //(Optional)
                    thumbIconBorderColor="#000" //(Optional)
                    railBackgroundColor="#004d40" //(Optional)
                    railBorderColor="#004d40" //(Optional)
                />
                <AppButton
                    stylee={styles.SubmitButtonStyle}
                    activeOpacity={0.6}
                    title='My Profile'
                    underlayColor="#DDDDDD"
                    onPress={this.onGuestPress}
                />


                <AppButton
                    stylee={styles.appButtonContainer}
                    title='My Profile'
                    onPress={this.onGuestPress}
                />

                <TouchableOpacity
                    title='My Profile'
                    onPress={this.onGuestPress}
                ><LinearGradient
                    colors={['#004d40', '#009688']}
                    style={styles.appButtonContainer}
                >
                        <CustomText> Profile</CustomText>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }


}


const mapStateToProps = (state) => {
    const dataSource = state.LoginReducer.data;
    return {
        dataSource
    };
};

export default connect(mapStateToProps, null)(Dashboard);
