import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// Importamos os tipos de navegação e perfil
import { HomeScreenProps, UserProfile } from '../../@types/navigation';
// Usamos Feather para os ícones
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    // Garantimos que o perfil (vindo do login) é do tipo correto
    const profile: UserProfile = (route.params?.profile as UserProfile) || "Convidado";

    const handleLogout = (): void => {
      // Retorna para a tela de Login (finalizando a sessão)
      navigation.replace("Login");
    };

  const handleNewOccurrence = (): void => {
    // NAVEGAÇÃO FUNCIONAL para a tela 'NewOccurrence'
    navigation.navigate('Formulario');
  };
  
  // const handleMyOccurrences = (): void => {
  //   // NAVEGAÇÃO FUNCIONAL para a tela 'MyOccurrences'
  //   navigation.navigate('MyOccurrences');
  // };
  
  // Cor azul marinho escuro dos cards
  const cardColor = '#192a56'; 
  
  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem-vindo, {profile}.</Text>
        <Text style={styles.subtitle}>Selecione a ação desejada no SIA-PE.</Text>

        {/* Card: Nova Ocorrência */}
        <TouchableOpacity 
          style={[styles.card, { backgroundColor: cardColor }]}
          onPress={handleNewOccurrence} // CHAMADA DE NAVEGAÇÃO
        >
          <Feather name="plus" size={30} color="#fff" />
          <Text style={styles.cardText}>Nova ocorrência</Text>
        </TouchableOpacity>
        
        Card: Minhas Ocorrências
        <TouchableOpacity 
          style={[styles.card, { backgroundColor: cardColor }]}
          // onPress={handleMyOccurrences} // CHAMADA DE NAVEGAÇÃO
        >
          <Feather name="file-text" size={30} color="#fff" />
          <Text style={styles.cardText}>Minhas ocorrências</Text>
        </TouchableOpacity>
        
        {/* Botão de Sair/Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default HomeScreen;