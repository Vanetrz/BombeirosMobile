import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { useForm, Controller } from "react-hook-form"
import { useRef } from "react"
import { Picker } from "@react-native-picker/picker";

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootParamList } from "../../../routes/formulario.routes";

import { Input } from "../../../components/Input"
import { Enviar } from "../../../components/Button/Enviar"

export default function Passo1() {
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
    const { control, handleSubmit } = useForm();

    function handleNextStep(data: any) {
        navigation.navigate("passo2");
    }

    const dataAtual = new Date().toLocaleDateString();
    const horaAtual = new Date().toLocaleTimeString().slice(0, 5);
    
    const emailRef = useRef<TextInput>(null);
    const equipeRef = useRef<TextInput>(null);
    const viaturaRef = useRef<TextInput>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                    Nova ocorrência
            </Text>

            <View style={styles.form}>
                <Controller
                    control={control}
                    name="categoria"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                borderRadius: 8,
                                marginBottom: 16,
                                overflow: "hidden",
                            }}
                        >
                            <Picker
                                selectedValue={value}
                                onValueChange={onChange}
                                style={{ height: 50 }}
                            >
                                <Picker.Item label="Selecione a categoria" value="" />
                                <Picker.Item label="Incêndio urbano" value="incendio_urbano" />
                                <Picker.Item label="Incêndio florestal" value="incendio_florestal" />
                                <Picker.Item label="Acidente de trânsito" value="acidente_transito" />
                                <Picker.Item label="Atendimento pré-hospitalar (APH)" value="aph" />
                                <Picker.Item label="Resgate veicular" value="resgate_veicular" />
                                <Picker.Item label="Resgate em altura" value="resgate_altura" />
                                <Picker.Item label="Salvamento aquático" value="salvamento_aquatico" />
                                <Picker.Item label="Produtos perigosos" value="produtos_perigosos" />
                                <Picker.Item label="Desabamento" value="desabamento" />
                                <Picker.Item label="Ação preventiva" value="acao_preventiva" />
                            </Picker>
                        </View>
                    )}
                />

                <View style={styles.dataHora}>
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
                            paddingTop: 12,
                        },
                    }}
                />
            </View>

            <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}