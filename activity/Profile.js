import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Profile extends React.Component {

    static navigationOptions = ({ navigation, goBack }) => {
        return {
            title:'Profile' ,
            headerStyle: {
                backgroundColor:'#00984D',  
            },
            headerTitleStyle: {
                color: "white",
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: "center",
                flexGrow: 0.75
              },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text
                        style={{
                            color: 'white',
                            marginLeft: 10,
                        }}>
                        Back
          </Text>
                </TouchableOpacity>
            ),
        };
    };
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.headerText} >Profile</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FFFC',
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#00984D',
        fontWeight: 'bold'
    },
});

