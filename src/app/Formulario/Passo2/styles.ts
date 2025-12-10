import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",

        padding: 21,
        gap: 26,
    },

    progress: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "500",
        marginTop: -20,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
    },

    form: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderColor: "#D7DEDD",
        borderWidth: 1,

        padding: 22,
        gap: 12,
    },

    erro: {
        color: "#FF1F36",
        fontSize: 14,
    }
})