import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
        color: "#fff",
        fontWeight: "600",
    },
});

// Cores diretas
export const variantStyles = {
    primary: { backgroundColor: "#007bff" },
    secondary: { backgroundColor: "#6c757d" },
    ghost: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#d1d1d1",
    },
};

export default styles;
