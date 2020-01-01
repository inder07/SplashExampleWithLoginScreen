import React, { Component } from 'react';
import { header,navigationOptions} from 'react-native';
import { YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './activity/Home';
import Login from './activity/Login'
import Splash from './activity/Splash'
import Profile from './activity/Profile'
import Notification from './activity/Notification'

const RootStack = createStackNavigator(
{
  SplashActivity: { screen: Splash,navigationOptions: {
    header: null
}},
  HomeActivity: { screen: Home },
  ProfileActivity: { screen: Profile },
  NotificationActivity: { screen: Notification },
  LoginActivity: { screen: Login,navigationOptions: {
    header: null
}},
},
{
    initialRouteName: 'SplashActivity',
}

);

// export default class App extends Component {
//   render() {
//     return <RootStack />;
//   }
// }

YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);

export default createAppContainer(RootStack);

