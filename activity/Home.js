import React from 'react';
import { StyleSheet, ToastAndroid, Text, View, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {

    static navigationOptions = () => {
        return {
            header: (
                <View
                    style={{
                        height: 55,
                        backgroundColor: '#00984D',
                        justifyContent: 'center',
                    }}>            
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>
                        Home
              </Text>
                </View>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.navigate('HomeActivity')}>
                    <Text
                        style={{
                            color: 'white',
                        }}>
                        Back
              </Text>
                </TouchableOpacity>
            ),
        };
    };
    showtoastProfile() {
        ToastAndroid.show('Profile', ToastAndroid.SHORT);
    }
    showtoastNotification() {
        ToastAndroid.show('Notification', ToastAndroid.SHORT);
    }
    render() {
        const { replace, navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {navigate('ProfileActivity');}}><Text style={styles.myButton}>Profile</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {navigate('NotificationActivity');}}><Text style={styles.myButton}>Notification</Text></TouchableOpacity>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9FFFC",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: 'center'
    },
    myButton: {
        borderRadius: 10,
        margin: 50,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#00984D',
        textAlign: 'center',
        color: 'white',
    }
});  