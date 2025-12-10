import React, { useState } from "react";
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { ForgotPasswordScreenProps } from "../../../@types/navigation";

import { styles } from "./styles";

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
    navigation,
    }) => {
    // Variável de estado tipada
    const [email, setEmail] = useState<string>("");

    const handlePasswordReset = (): void => {
        if (!email) {
        Alert.alert("Atenção", "Por favor, insira seu e-mail.");
        return;
        }
        Alert.alert(
        "Sucesso",
        `Se o e-mail ${email} estiver cadastrado, você receberá um link de redefinição.`
        );
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Esqueci a Senha</Text>
        <Text style={styles.instruction}>
            Informe seu e-mail para redefinição de senha.
        </Text>

        <TextInput
            style={styles.input}
            placeholder="Insira o seu e-mail"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        </View>
    );
};

export default ForgotPasswordScreen;
