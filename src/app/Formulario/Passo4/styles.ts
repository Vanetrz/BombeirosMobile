import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 21,
        gap: 26,

        justifyContent: "flex-start",
        alignItems: "center",
    },

    progress: {
        alignSelf: "center",
        fontSize: 16,
        marginTop: -20,
        fontWeight: "500",
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
    },

    formGeral: {
        width: "100%",
        gap: 26,
    },

    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderColor: "#D7DEDD",
        borderWidth: 1,

        padding: 22,
        gap: 12,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
    },

    item: {
        fontSize: 14,
        marginBottom: 6,
    },

    label: {
        fontWeight: "500",
        marginBottom: 4,
    },
});
