import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Platform, FlatList } from 'react-native';
import FeedItem from '../../components/ButtonNew/FeedItem';

export function Home() {

    let feedItems = [
        {
            id: '1',
            video: 'https://i.imgur.com/Cnz1CPK.mp4',
            name: '@sujeitoprogramador',
            description: 'Criando o ShortDev do zero com RN',
        },
        {
            id: '2',
            video: 'https://i.imgur.com/E0tK2bY.mp4',
            name: '@henriquesilva',
            description: 'Fala turma, estou aprendendo React Native com sujeito programador',
        },
        {
            id: '3',
            video: 'https://i.imgur.com/mPFvFyX.mp4',
            name: '@sujeitoprogramador',
            description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: "#FFF" }]}>Pra Você</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>

            <FlatList data={feedItems}
                renderItem={({ item }) => <FeedItem data={item} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    labels: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        position: "absolute",
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
        zIndex: 99

    },
    labelText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    }, indicator: {
        backgroundColor: "#fff",
        width: 22,
        height: 2,
        alignSelf: "center"
    }
})