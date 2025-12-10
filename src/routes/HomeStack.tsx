import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../@types/navigation';

// Importa as telas
import FormularioRoutes from "../../src/routes/formulario-routes";
import HomeScreen from '../app/Home';
import Ocorrencias from '../app/Ocorrencias/Ocorrencias';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Este Stack agrupa todas as telas que o usuário acessa após o login.
const HomeStack: React.FC = () => (
    <Stack.Navigator initialRouteName="Home">
        
        {/* A tela Home tem seu próprio layout de cards, então ocultamos o cabeçalho Stack. */}
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ 
            headerShown: false,
            title: "Dashboard", // Título para o menu Drawer
        }}
        />

        <Stack.Screen
            name="Formulario"
            component={FormularioRoutes}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Ocorrencias"
            component={Ocorrencias}
            options={{ title: "Minhas Ocorrências" }}
        />
        
    </Stack.Navigator>
);

export default HomeStack;