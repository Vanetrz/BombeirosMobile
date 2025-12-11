import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },

    scroll: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",

        padding: 21,
        gap: 26,
    },

    progress: {
        alignSelf: "center",
        fontSize: 16,
        marginTop: -20,
        fontWeight: "500",
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
    },

    formGeral: {
        width: "100%",
        gap: 20,
    },

    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderColor: "#D7DEDD",
        borderWidth: 1,

        width: 350,
        padding: 22,
        gap: 12,
    },

    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between", 
        marginBottom: 300,
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
