import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 21,

        // justifyContent: "center",
        // alignItems: "center",
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
        marginBottom: 20,
    },

    form: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderColor: "#D7DEDD",
        borderWidth: 1,

        padding: 22,
        gap: 12,
        marginBottom: 26,
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
