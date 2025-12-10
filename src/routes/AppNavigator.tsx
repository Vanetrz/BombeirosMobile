// src/navigation/AppNavigator.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/navigation';

import LoginScreen from '../app/Login';
import ForgotPasswordScreen from '../app/Login/Senha';
// IMPORTAMOS O HOMESTACK DIRETAMENTE
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            
            <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
            />

            <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPasswordScreen} 
            options={{ title: 'Esqueci Minha Senha' }}
            />
            
            {/* A ROTA HOME APONTA DIRETAMENTE PARA O HOMESTACK */}
            <Stack.Screen
            name="Home"
            component={HomeStack} 
            options={{ headerShown: false }} 
            />
            
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
