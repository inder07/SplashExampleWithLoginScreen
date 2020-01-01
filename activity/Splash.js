import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

let timeoutid;

export default class Splash extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.headerText} >LOGO</Text>
            </View>
        );

    }
    state = { navigatenow: false };

    componentDidMount() {
        timeoutid = setTimeout(() => {
            this.setState({ navigatenow: true });
        }, 2000);
    }
    componentWillUnmount() {

        clearTimeout(timeoutid);
    }
    componentDidUpdate() {
        const { replace } = this.props.navigation;

        if (this.state.navigatenow == true) {

            replace('LoginActivity');
        }
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
        fontSize: 50,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#00984D',
        fontWeight: 'bold'
    },

});