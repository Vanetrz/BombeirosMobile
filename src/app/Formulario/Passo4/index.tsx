import { useNavigation } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from "react-native";
import { Enviar } from "../../../components/Button/Enviar";
import { Voltar } from "../../../components/Button/Voltar";
import { Dropdown } from "../../../components/Dropdown";
import Header from "../../../components/Header";
import { Input } from "../../../components/Input";
import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias";
import { adicionarGeo, criarOcorrencia } from "../../../services/auth";
import { FormProps } from "../../context/ContextoFormulario";
import { styles } from "./styles";

export function Passo4() {
    const navigation = useNavigation();
    const { formData, updateFormData } = useFormOcorrencias();
    const [loading, setLoading] = useState(false);

    // Mapear status do frontend para o backend
    const mapStatusToBackend = (status: string) => {
      switch (status) {
        case 'andamento': return 'ABERTA';
        case 'aberto': return 'ABERTA';
        case 'finalizado': return 'ENCERRADA';
        case 'cancelado': return 'ENCERRADA';
        default: return 'PENDENTE';
      }
    };

    // Mapear categoria do frontend para o backend
    const mapCategoriaToBackend = (categoria: string) => {
      const map: Record<string, string> = {
        'incendio_urbano': 'Incêndio Urbano',
        'incendio_florestal': 'Incêndio Florestal',
        'acidente_transito': 'Acidente de Trânsito',
        'aph': 'Atendimento Pré-Hospitalar',
        'resgate_veicular': 'Resgate Veicular',
        'resgate_altura': 'Resgate em Altura',
        'salvamento_aquatico': 'Salvamento Aquático',
        'produtos_perigosos': 'Produtos Perigosos',
        'desabamento': 'Desabamento',
        'acao_preventiva': 'Ação Preventiva'
      };
      return map[categoria] || categoria;
    };

    const { control, handleSubmit } = useForm<FormProps>({
        defaultValues: formData
    });

    async function finalizarOcorrencia(data: FormProps) {
      setLoading(true);
      try {
        // 1. Preparar dados para o backend
        const ocorrenciaData = {
          tipo: mapCategoriaToBackend(data.categoria || ''),
          dataHora: new Date().toISOString(), // Ou combinar data + hora do form
          viatura: data.viatura,
          equipe: data.equipe,
          descricao: data.descricao,
          clientGeneratedId: `local-${Date.now()}`, // ID temporário para offline
        };

        // 2. Criar ocorrência no backend
        const ocorrencia = await criarOcorrencia(ocorrenciaData);
        
        // 3. Adicionar geolocalização se disponível
        if (data.latitude && data.longitude) {
          await adicionarGeo(
            ocorrencia.id,
            parseFloat(data.latitude),
            parseFloat(data.longitude)
          );
        }

        // 4. Limpar dados do formulário
        updateFormData({});

        Alert.alert(
          "Sucesso!",
          "Ocorrência registrada com sucesso.",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("Home")
            }
          ]
        );

      } catch (error: any) {
        Alert.alert(
          "Erro",
          error.message || "Não foi possível registrar a ocorrência. Tente novamente."
        );
      } finally {
        setLoading(false);
      }
    }

    function salvarAlteracoes(data: FormProps) {
        updateFormData(data);
        alert("Alterações salvas!");
    }

    return (
        <View style={styles.container}>
            <Header title="Confirmação" />  

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Confirmação de dados</Text>
                <Text style={styles.progress}>4/4</Text>

                <View style={styles.formGeral}>
                    {/* Seção de informações básicas*/}
                    <View style={styles.form}>
                        <Text style={styles.sectionTitle}>Informações Básicas</Text>

                        <Input
                            label="Título"
                            formProps={{ control, name: "titulo" }}
                            inputProps={{ editable: true }}
                        />

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
                                { label: "Produtos perigosos", value: "produtos_perigosos" },
                                { label: "Desabamento", value: "desabamento" },
                                { label: "Ação preventiva", value: "acao_preventiva" },
                            ]}
                        />

                        <Dropdown
                          label="Status"
                          formProps={{
                            control,
                            name: "status",
                          }}
                          options={[
                            { label: "Em andamento", value: "andamento" },
                            { label: "Aberto", value: "aberto" },
                            { label: "Finalizado", value: "finalizado" },
                            { label: "Cancelado", value: "cancelado" },
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
                            label="Assinatura"
                            formProps={{ control, name: "assinatura" }}
                            inputProps={{ editable: true }}
                        />

                        {formData.fotos?.length ? (
                        <View style={{ flexDirection: "row", marginTop: 8 }}>
                            {formData.fotos.slice(0, 3).map((uri) => (
                            <Image
                                key={uri}
                                source={{ uri }}
                                style={{
                                width: 64,
                                height: 64,
                                marginRight: 8,
                                borderRadius: 8,
                                }}
                            />
                            ))}
                        </View>
                        ) :
                        <Text style={{ marginTop: 8, fontStyle: "italic", color: "#666" }}>
                            Nenhuma mídia adicionada
                        </Text>}
                    </View>
                </View>
                
                <View style={styles.buttons}>
                    <Voltar 
                      title="Voltar" 
                      onPress={() => navigation.goBack()} 
                      disabled={loading}
                    />
                    <Enviar 
                      title={loading ? "Enviando..." : "Finalizar"}
                      onPress={handleSubmit(finalizarOcorrencia)}
                      disabled={loading}
                    />
                    {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
                </View>
            </ScrollView>
        </View>
    );
}