import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias";

import { FormProps } from "../../context/ContextoFormulario";
import { useForm } from "react-hook-form";
import { Dropdown } from "../../../components/Dropdown";
import { Input } from "../../../components/Input";
import { Enviar } from "../../../components/Button/Enviar";

export function Passo4() {
const { formData, updateFormData } = useFormOcorrencias();

    // Preenche o formulário com os dados já existentes
    const { control, handleSubmit } = useForm<FormProps>({
        defaultValues: formData
    });

    function salvarAlteracoes(data: FormProps) {
        updateFormData(data);
        alert("Alterações salvas!");
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Confirmação de dados</Text>

            {/* Seção de informações básicas*/}
            <View style={styles.form}>
                <Text style={styles.sectionTitle}>Informações Básicas</Text>

                <Dropdown
                    label="Categoria"
                    formProps={{ control, name: "categoria" }}
                    options={[
                        { label: "Incêndio urbano", value: "incendio_urbano" },
                        { label: "Incêndio florestal", value: "incendio_florestal" },
                        { label: "Acidente de trânsito", value: "acidente_transito" },
                        { label: "Atendimento pré-hospitalar (APH)", value: "aph" },
                        { label: "Resgate veicular", value: "resgate_veicular" },
                        { label: "Resgate em altura", value: "resgate_altura" },
                        { label: "Salvamento aquático", value: "salvamento_aquatico" },
                        { label: "Produtos perigosos", value: "produtos_peligrosos" },
                        { label: "Desabamento", value: "desabamento" },
                        { label: "Ação preventiva", value: "acao_preventiva" },
                    ]}
                />

                <Input
                    label="Data"
                    formProps={{ control, name: "data" }}
                    inputProps={{ editable: true }}
                />

                <Input
                    label="Hora"
                    formProps={{ control, name: "hora" }}
                    inputProps={{ editable: true }}
                />

                <Input
                    label="Equipe"
                    formProps={{ control, name: "equipe" }}
                    inputProps={{ editable: true }}
                />

                <Input
                    label="Viatura"
                    formProps={{ control, name: "viatura" }}
                    inputProps={{ editable: true }}
                />

                <Input
                    label="Descrição"
                    formProps={{ control, name: "descricao" }}
                    inputProps={{
                        editable: true,
                        multiline: true,
                        numberOfLines: 4,
                        style: {
                            height: 100,
                            textAlignVertical: "top",
                        }
                    }}
                />
            </View>

            {/* Seção de localização */}
            <View style={styles.form}>
                <Text style={styles.sectionTitle}>Localização</Text>

                <Input
                    label="Endereço"
                    formProps={{ control, name: "endereco" }}
                    inputProps={{ editable: true }}
                />

                <Input
                    label="Latitude"
                    formProps={{ control, name: "latitude" }}
                    inputProps={{ editable: true }}
                />

                <Input
                    label="Longitude"
                    formProps={{ control, name: "longitude" }}
                    inputProps={{ editable: true }}
                />
            </View>
            
            {/* Seção de anexos */}
            <View style={styles.form}>
                <Text style={styles.sectionTitle}>Anexos</Text>
                <Input
                    label="Exemplo"
                    formProps={{ control, name: "exemplo" }}
                    inputProps={{ editable: true }}
                />
            </View>

            {/* dps adicionar "onPress={finalizar}"" */}
            <Enviar title="Finalizar"/>
        </ScrollView>
    );
}
