import React from "react";
import { Text, View } from "react-native";
import Button from "../Button/Nsei";

import { styles } from "./styles";

export type OccurrenceItem = {
    id: string;
    titulo: string;
    data: string;
    status: "ABERTA" | "EM CURSO" | "ENCERRADA";
    endereco: string;
};

export default function OccurrenceCard({
    item,
    onEdit,
    }: {
    item: OccurrenceItem;
    onEdit?: (id: string) => void;
    }) {
    return (
        <View style={styles.card}>
        <Text style={styles.title}>{item.titulo}</Text>

        <Text style={styles.info}>
            {item.data} — {item.status}
        </Text>

        <Text style={styles.address}>
            {item.endereco}
        </Text>

        <View style={styles.actions}>
            <Button
            title="Editar"
            variant="ghost"
            onPress={() => onEdit && onEdit(item.id)}
            />
        </View>
        </View>
    );
}
