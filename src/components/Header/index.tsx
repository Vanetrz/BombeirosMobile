import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Header({
    title,
    subtitle,
    showBack = true,
}: {
    title: string;
    subtitle?: string;
    showBack?: boolean;
}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {showBack && (
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
            )}

            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
            </View>
        </View>
    );
}
