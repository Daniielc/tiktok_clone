import { View, StyleSheet, Text } from 'react-native';

export function ButtonNew() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 4,
        borderLeftColor: "#1ebfc7",
        borderRightWidth: 4,
        borderRightColor: "#f43071",
        borderRadius: 6
    },
    inner: {
        backgroundColor: "#fff",
        width: 20,
        alignItems: "center"
    }
})