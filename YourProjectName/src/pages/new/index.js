import { View, StyleSheet, Text } from 'react-native';

export function New() {
    return (
        <View style={styles.container}>
            <Text>Página Nova Video</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})