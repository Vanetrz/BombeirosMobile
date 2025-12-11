import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginScreenProps, UserProfile } from '../../@types/navigation';

import { styles } from './styles';

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  // Variáveis de estado tipadas
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginAttempts, setLoginAttempts] = useState<number>(0); 

    const handleLogin = (): void => {
        if (loginAttempts >= 3) {
        Alert.alert("Bloqueado", "Muitas tentativas falhas. Tente novamente mais tarde.");
        return;
        }

        let userProfile: UserProfile | null = null;
        
        // Lógica de autenticação
        if (username === "admin" && password === "123") {
        userProfile = 'Administrador';
        } else if (username === "chefe" && password === "123") {
        userProfile = 'Chefe';
        } else if (username === "operador" && password === "123") {
        userProfile = 'Operador';
        }

        if (userProfile) {
        Alert.alert("Sucesso", `Login realizado! Perfil: ${userProfile}`);
        setLoginAttempts(0); 
        // Navegação tipada, enviando o parâmetro 'profile'
        navigation.replace('Home', { profile: userProfile }); 
        } else {
        setLoginAttempts(prev => prev + 1); 
        const remaining: number = 3 - (loginAttempts + 1);
        Alert.alert("Erro de Login", `Credenciais inválidas. Tentativas restantes: ${remaining}`);
        }
    };

    return (
        <View style={styles.container}>
        
        <View style={styles.logoContainer}>
            <View style={styles.siren} />
            <View style={styles.siren} />
            <View style={styles.siren} />
        </View>

        <Text style={styles.mainHeader}>Gestor de ocorrências</Text>
        <Text style={styles.subHeader}>Bombeiros - PE</Text>

        <View style={styles.loginSection}>
            <Text style={styles.promptTitle}>Entrar em sua conta</Text>
            <Text style={styles.promptSubtitle}>Insira e-mail e senha cadastrados</Text>

            <TextInput
            style={styles.input}
            placeholder="Email" 
            onChangeText={setUsername} 
            value={username}
            keyboardType="email-address"
            autoCapitalize="none"
            />
            
            <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry 
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Esqueci a senha</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};



export default LoginScreen;