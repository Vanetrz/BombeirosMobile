import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginScreenProps } from '../../@types/navigation';
import { loginRequest } from '../../services/auth';
import { styles } from './styles';

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (): Promise<void> => {
    if (!email || !password) {
      Alert.alert("Atenção", "Preencha email e senha");
      return;
    }

    setLoading(true);
    try {
      const response = await loginRequest(email, password);
      
      // Mapear role para perfil
      let userProfile: string = 'Operador';
      switch (response.user.role) {
        case 'ADMIN': userProfile = 'Administrador'; break;
        case 'CHEFE': userProfile = 'Chefe'; break;
        case 'OPERADOR': userProfile = 'Operador'; break;
      }

      Alert.alert("Sucesso", `Login realizado! Perfil: ${userProfile}`);
      
      // Navegar para Home com dados do usuário
      navigation.replace('Home', { 
        profile: userProfile,
        userData: response.user
      });
      
    } catch (error: any) {
      Alert.alert("Erro", error.message || "Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.siren} />
        <View style={styles.siren} />
        <View style={styles.siren} />
      </View>

      <Text style={styles.mainHeader}>F</Text>

      <View style={styles.loginSection}>
        <Text style={styles.promptTitle}>Entrar em sua conta</Text>
        <Text style={styles.promptSubtitle}>Insira e-mail e senha cadastrados</Text>

        <TextInput
          style={styles.input}
          placeholder="Email" 
          onChangeText={setEmail} 
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry 
          editable={!loading}
        />

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Continuar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('ForgotPassword')}
          disabled={loading}
        >
          <Text style={styles.linkText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;