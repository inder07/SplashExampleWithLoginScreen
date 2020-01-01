import React from 'react';
import { StyleSheet, TextInput, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import WebServiceHandler from 'react-native-web-service-handler';


export default class Login extends React.Component {
    showtoast() {
        ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    }

    constructor() {
        super();
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'change',
            this._handleConnectivityChange
        );
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'change',
            this._handleConnectivityChange
        );
    }
    _handleConnectivityChange(status) {
        console.log('*********_handleConnectivityChange: Network Connectivity status *******: ' + status);

    }

    callapi() {

        // fetch('http://crmappapi.shruticreation.com/Resellerwebapi.asmx?op=GetResellerDetails/', {
        //     method: 'POST',
        //     headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
        //     body: JSON.stringify({ 'pKey': 'ymo34dDZ/SgbwfZmDckzjQ==', 'ResellerID': '1552' }),
        // })
        // .then((response) => {
        //     console.log('callapi1: ' + response.json())
        //     this.setState({ data: response })
        // })
        // .catch((error) =>{
        //     console.error('callapi2'+error);
        //   });

        fetch('http://crmappapi.shruticreation.com/Resellerwebapi.asmx?op=GetResellerDetails/', {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
            body: JSON.stringify({ 'pKey': 'ymo34dDZ/SgbwfZmDckzjQ==', 'ResellerID': '1552' }),
        })
            .then(response => response.text()) // Convert to text instead of res.json()
            .then((text) => {
                if (Platform.OS === 'android') {
                    text = text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, ''); // If android , I've removed unwanted chars. 
                }
                return text;
            })
            .then(response => console.log('callapi1: ' + JSON.parse(response)))



            // .then((response) =>  console.log('callapi1: ' + response.json() ))
            // .then((responseJson) => {
            //   this.setState({
            //     data: responseJson,
            //   }, function(){

            //   });

            // })
            .catch((error) => {
                console.error(error);
            });


        //   fetch('http://crmappapi.shruticreation.com/Resellerwebapi.asmx?op=GetResellerDetails/', {
        //     method: 'POST',
        //     headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
        //     body: JSON.stringify({ 'pKey': 'ymo34dDZ/SgbwfZmDckzjQ==', 'ResellerID': '1552' })
        //   .then((response) => response.json())
        //   .then((responseJson) => {

        //     this.setState({
        //       isLoading: false,
        //       dataSource: responseJson.movies,
        //     }, function(){

        //     });

        //   })
        //   .catch((error) =>{
        //     console.error(error);
        //   });
    }


    render() {
        const { replace, navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <Text style={styles.mytextstyle}>LOGO</Text>
                <TextInput style={styles.myTextInput} placeholder={'Username'} paddingLeft={10} ></TextInput>
                <TextInput style={styles.myTextInput} placeholder={'Password'} paddingLeft={10} ></TextInput>
                <TouchableOpacity onPress={() => {
                    replace('HomeActivity');
                }}><Text style={styles.myButton}>Login</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.callapi();
                }}><Text style={styles.myButton}>Get Data</Text></TouchableOpacity>

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
    mytextstyle: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 30,
        color: '#00984D',
        fontWeight: 'bold',
        marginBottom: 60
    },
    myTextInput: {
        width: "80%",
        height: undefined,
        marginTop: 20,
        borderBottomWidth: 0.5,
        borderColor: 'black'

    },
    myButton: {
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#00984D',
        textAlign: 'center',
        color: 'white',
    }

});  