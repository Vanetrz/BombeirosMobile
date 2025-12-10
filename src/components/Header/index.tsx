import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Header({
    title,
    subtitle,
    }: {
    title: string;
    subtitle?: string;
    }) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
    );
}
