import { useRef } from "react"
import { useForm } from "react-hook-form"
import { ScrollView, Text, TextInput, View } from "react-native"
import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias"
import { styles } from "./styles"

import { useNavigation } from "@react-navigation/native"
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import type { RootParamList } from "../../../routes/formulario.routes";

import { Enviar } from "../../../components/Button/Enviar"
import { Dropdown } from "../../../components/Dropdown"
import Header from "../../../components/Header"
import { Input } from "../../../components/Input"
import { FormProps } from "../../context/ContextoFormulario"

export function Passo1() {
    const { updateFormData } = useFormOcorrencias()
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm<FormProps>();

    function handleNextStep(data: FormProps) {
        updateFormData(data)
        navigation.navigate("passo2");
    }

    const dataAtual = new Date().toLocaleDateString();
    const horaAtual = new Date().toLocaleTimeString().slice(0, 4);
    
    const equipeRef = useRef<TextInput>(null);
    const viaturaRef = useRef<TextInput>(null);
    const descricaoRef = useRef<TextInput>(null);

    return (
        <View style={styles.container}>
            <Header title="Nova ocorrência" />

            <ScrollView contentContainerStyle={styles.scroll} >
                <Text style={styles.title}>Informações básicas</Text>
                <Text style={styles.progress}>1/4</Text>

                <View style={styles.form}>


                    <Dropdown
                        label="Categoria"
                        formProps={{
                            control,
                            name: "categoria",
                        }}
                        options={[
                            { label: "Selecione a categoria", value: "" },
                            { label: "Incêndio urbano", value: "incendio_urbano" },
                            { label: "Incêndio florestal", value: "incendio_florestal" },
                            { label: "Acidente de trânsito", value: "acidente_transito" },
                            { label: "Atendimento pré-hospitalar (APH)", value: "aph" },
                            { label: "Resgate veicular", value: "resgate_veicular" },
                            { label: "Resgate em altura", value: "resgate_altura" },
                            { label: "Salvamento aquático", value: "salvamento_aquatico" },
                            { label: "Produtos perigosos", value: "produtos_perigosos" },
                            { label: "Desabamento", value: "desabamento" },
                            { label: "Ação preventiva", value: "acao_preventiva" },
                        ]}
                    />

                    <View style={styles.dataHora}>
                        <View style={styles.inputPequeno}>
                            <Input
                                label="Data"
                                formProps={{
                                    control,
                                    name: "data",
                                }}
                                inputProps={{
                                    value: dataAtual,
                                    editable: false,
                                }}
                            />
                            </View>
                        <View style={styles.inputPequeno}>
                            <Input
                                label="Hora"
                                formProps={{
                                    control,
                                    name: "hora",
                                }}
                                inputProps={{
                                    value: horaAtual,
                                    editable: false,
                                }}
                            />
                        </View>
                    </View>

                    <Input
                        label="Equipe"
                        formProps={{
                            control,
                            name: "equipe",
                        }}
                        inputProps={{
                            placeholder: "Ex: Equipe 03",
                            onSubmitEditing: () => viaturaRef.current?.focus(),
                            returnKeyType: "next"
                        }}
                        ref={equipeRef}
                    />

                    <Input
                        label="Viatura"
                        formProps={{
                            control,
                            name: "viatura",
                        }}
                        inputProps={{
                            placeholder: "Ex: ABT-23 / AR-12",
                            returnKeyType: "next"
                        }}
                        ref={viaturaRef}
                    />

                    <Input
                        label="Descrição"
                        formProps={{
                            control,
                            name: "descricao",
                        }}
                        inputProps={{
                            placeholder: "Descreva a ocorrência",
                            multiline: true,
                            numberOfLines: 4,
                            style: {
                                height: 100,
                                textAlignVertical: "top",
                                fontSize: 14,
                            },
                            returnKeyType: "next"
                        }}
                        ref={descricaoRef}
                    />
                </View>

                <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
            </ScrollView>
        </View>
    );
}