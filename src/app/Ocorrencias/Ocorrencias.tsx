import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../components/Button/Nsei";
import OccurrenceCard, { OccurrenceItem } from "../../components/CardOcorrencia";
import Header from "../../components/Header";

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
    return (
        <View style={{ flex: 1 }}>
        <Header title="Minhas ocorrências" />

        <View style={{ padding: 16 }}>
            <Button
            title="Filtrar por mapa"
            variant="ghost"
            onPress={() => navigation.navigate("FilterMap")}
            style={{ marginBottom: 12 }}
            />

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
