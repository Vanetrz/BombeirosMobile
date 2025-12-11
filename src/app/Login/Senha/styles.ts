import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "#f0f4f7",
        paddingTop: 100,
    },

    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },

    instruction: {
        textAlign: "center",
        marginBottom: 40,
        color: "#666",
    },

    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
    },

    button: {
        backgroundColor: "#2B65EC",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});