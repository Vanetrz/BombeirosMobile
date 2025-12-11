import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import OccurrenceCard, { OccurrenceItem } from "../../components/CardOcorrencia";
import Header from "../../components/Header";
import { styles } from "./styles";

const MOCK: OccurrenceItem[] = [
    {
    id: "1",
    titulo: "Incêndio residencial",
    data: "09/12/2025 18:30",
    status: "ABERTA",
    endereco: "Centro, Jundiaí - SP",
    },
    {
    id: "2",
    titulo: "Acidente de trânsito",
    data: "08/12/2025 22:10",
    status: "EM CURSO",
    endereco: "Vila Arens, Jundiaí - SP",
    },
];

export default function OccurrencesScreen({ navigation }: any) {
    const [statusFilter, setStatusFilter] = useState<string>("todas");

    const filteredData =
    statusFilter === "todas"
        ? MOCK
        : MOCK.filter((oc) => oc.status === statusFilter);


    return (
        <View style={{ flex: 1 }}>
        <Header title="Minhas ocorrências" />

            <View style={{ padding: 16, gap: 12, flex: 1 }}>
                {/* <Button
                title="Filtrar por mapa"
                variant="ghost"
                onPress={() => navigation.navigate("FilterMap")}
                style={{ marginBottom: 12 }}
                /> */}

                <View style={styles.filtro}>
                <Picker
                    selectedValue={statusFilter}
                    onValueChange={(value) => setStatusFilter(value)}
                >
                    <Picker.Item label="Todas" value="todas" />
                    <Picker.Item label="Abertas" value="aberta" />
                    <Picker.Item label="Em andamento" value="andamento" />
                    <Picker.Item label="Finalizadas" value="finalizada" />
                    <Picker.Item label="Canceladas" value="finalizada" />
                </Picker>
                </View>

                <ScrollView>
                {MOCK.map((item) => (
                    <OccurrenceCard
                    key={item.id}
                    item={item}
                    onEdit={() => navigation.navigate("Formulario")} 
                    />
                ))}
                </ScrollView>
            </View>
        </View>
    );
}
