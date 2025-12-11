import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { ScrollView, Text, View } from "react-native"
import { styles } from "./styles"

import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias"
import { FormProps } from "../../context/ContextoFormulario"

import { Enviar } from "../../../components/Button/Enviar"
import { Voltar } from "../../../components/Button/Voltar"
import Header from "../../../components/Header"
import { Input } from "../../../components/Input"
import MediaPicker from "../../../components/MediaPicker"

import { useNavigation } from "expo-router"
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import type { RootParamList } from "../../../routes/formulario.routes";

export function Passo3() {
    const navigation = useNavigation();
    const { updateFormData, formData } = useFormOcorrencias()
    const [fotos, setFotos] = useState<string[]>(formData?.fotos || []);
    const {control, handleSubmit} = useForm<FormProps>();

    function handleNextStep(data: FormProps) {
        updateFormData(data);
        navigation.navigate("passo4");
    }

    return (
        <View style={styles.container}>
            <Header title="Nova ocorrência" />

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Anexos</Text>
                <Text style={styles.progress}>3/4</Text>

                <View style={styles.form}>
                    <MediaPicker value={fotos} onChange={setFotos} />

                    <Input 
                        // icon="chevron-down"
                        label="Assinatura"
                        formProps={{
                            control,
                            name: "assinatura",
                        }}
                        inputProps={{
                            placeholder: "Assinatura do responsável",
                        }}
                    />
                </View>
                
                <View style={styles.buttons}>
                    <Voltar title="Voltar" onPress={() => navigation.goBack()} />
                    <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
                </View>
            </ScrollView>

        </View>
    );
}