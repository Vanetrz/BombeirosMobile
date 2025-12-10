import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import styles, { variantStyles } from "./styles";

type Props = {
    title: string;
    onPress?: () => void;
    variant?: "primary" | "secondary" | "ghost";
    style?: ViewStyle;
};

export default function Button({
    title,
    onPress,
    variant = "primary",
    style,
    }: Props) {
    return (
        <TouchableOpacity
        style={[styles.btn, variantStyles[variant], style]}
        onPress={onPress}
        >
        <Text
            style={[
            styles.txt,
            variant === "ghost" && { color: "#000" }, // cor fixa
            ]}
        >
            {title}
        </Text>
        </TouchableOpacity>
    );
}
