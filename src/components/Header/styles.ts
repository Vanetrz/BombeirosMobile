import { StyleSheet } from "react-native";

export default StyleSheet.create({
    backButton: {
        position: "absolute",
        left: 0,
        padding: 21,
        marginTop: 30,
    },

    textContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 30,
    },

    container: {
        height: 120,
        backgroundColor: "#2B65EC",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
    },

    subtitle: {
        fontSize: 14,
        color: "#FFFFFF",
    }
});