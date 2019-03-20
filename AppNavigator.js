import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './src/components/LoginForm';

const AppNavigator = createStackNavigator({
    Login: { screen: LoginForm,
            navigationOptions: { header: null }
    },
    
},
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(AppNavigator);
