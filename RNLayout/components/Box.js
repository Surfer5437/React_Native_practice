import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Box({ children, style }) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        // padding: 20,
        // flexGrow:1
    },
    text: {
        ...Platform.select({
            ios: {
                color: "purple",
                fontSize: 24,
                fontStyle: "italic"
            },
            android: {
                color: "blue",
                fontSize: 30
            }
        }),
        fontWeight: "bold",
        textAlign: "center"
    },
});