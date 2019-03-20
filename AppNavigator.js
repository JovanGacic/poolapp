import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './src/components/LoginForm';
import Registration from './src/components/Registration';

const AppNavigator = createStackNavigator({
    Login: { screen: LoginForm,
            navigationOptions: { header: null }
    },
    Registration: { screen: Registration
    },
},
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(AppNavigator);
