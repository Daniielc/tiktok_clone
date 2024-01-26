import { View, Text, StyleSheet, Pressable, Dimensions, Alert } from 'react-native'
import Video from 'react-native-video';
import { useRef, useState } from 'react';

const { height: heighScreen } = Dimensions.get("screen")

export default function FeedItem({ data }) {
    const videoRef = useRef(null);
    const [status, setStatus] = useState({});

    const playPauseToggle = () => {
        console.log(videoRef.rate)
    };
    return (
        <Pressable onPress={playPauseToggle}>
            <Video source={{ uri: data?.video }}   // Can be a URL or a local file.
                ref={videoRef}
                style={styles.backgroundVideo}
                resizeMode="cover"
                repeat={true}
                volume={0}
                onPlaybackStatusUpdate={(status) => setStatus(status)} />

        </Pressable>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        width: "100%",
        height: heighScreen,

    }
})