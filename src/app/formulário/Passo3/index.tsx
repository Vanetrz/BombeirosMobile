import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { useForm } from "react-hook-form"
import { useRef } from "react"

import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias"
import { FormProps } from "../../context/ContextoFormulario";

import { Input } from "../../../components/Input"
import { Enviar } from "../../../components/Button/Enviar"

import { useNavigation } from "expo-router"
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import type { RootParamList } from "../../../routes/formulario.routes";

export function Passo3() {
    const navigation = useNavigation();
    const { updateFormData } = useFormOcorrencias()
    const {control, handleSubmit} = useForm<FormProps>();

    function handleNextStep(data: FormProps) {
        updateFormData(data)
        navigation.navigate("passo4");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Anexos</Text>

            <View style={styles.form}>

                <Input 
                    // icon="chevron-down"
                    label="Exemplo"
                    formProps={{
                        control,
                        name: "exemplo",
                    }}
                    inputProps={{
                        placeholder: "Exemplo",
                    }}
                />
            </View>
            
                
            <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}