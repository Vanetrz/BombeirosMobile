import { useForm } from "react-hook-form"
import { ScrollView, Text, View } from "react-native"
import { styles } from "./styles"

import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias"
import { FormProps } from "../../context/ContextoFormulario"

import { Enviar } from "../../../components/Button/Enviar"
import Header from "../../../components/Header"
import { Input } from "../../../components/Input"

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
            <Header title="Nova ocorrência" />

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Anexos</Text>
                <Text style={styles.progress}>3/4</Text>

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
            </ScrollView>

        </View>
    );
}