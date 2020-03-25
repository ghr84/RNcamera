import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

// Icons import

import { Ionicons } from '@expo/vector-icons/'

// Expo camera imports

import { Camera } from 'expo-camera';
import { setLightEstimationEnabled } from 'expo/build/AR';

// Local imports 

import TakePicBtn from './TakePicBtn';
import CloseBtn from './CloseBtn';
import SuccessBadge from './SuccessBadge';

const myCamera = ({ handleCameraChange, takePicture, showSuccessBadge, handleSuccessBadgeChange }) => {

    // Badge test

    //const [showSuccessBadge, setShowSuccessBadge] = useState(false);

    // const handleSuccessBadgeChange = () => {
    //     takePicture()
    //     setShowSuccessBadge(!showSuccessBadge)

    // }

    const [flashStatus, setFlashStatus] = useState(Camera.Constants.FlashMode.off);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>

            <Camera style={styles.camera} type={type} flashMode={flashStatus} autoFocus={Camera.Constants.AutoFocus.on}
                ref={ref => {
                    camera = ref;
                }}
            >
                <CloseBtn handleCameraChange={handleCameraChange}></CloseBtn>
                {showSuccessBadge ? <SuccessBadge handleSuccessBadgeChange={handleSuccessBadgeChange} /> : null}
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.icons} onPress={() => {
                        setFlashStatus(

                            // Tvær stöður : Flash auto .. default
                            // Flash off

                            // Flash Off / Flash On / Flash Auto ? 

                            flashStatus === Camera.Constants.FlashMode.auto
                                ? Camera.Constants.FlashMode.off
                                : Camera.Constants.FlashMode.auto
                        )
                    }}>
                        <Ionicons name="ios-flash" size={42} color={"white"} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={takePicture}>
                        <TakePicBtn />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icons}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Ionicons name="ios-reverse-camera" size={42} color={"white"} />
                    </TouchableOpacity>

                </View>
            </Camera>
        </View >
    );
}

const styles = StyleSheet.create({
    height: Platform.OS === 'ios' ? 200 : 100,
    camera: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    bottomContainer: {
        paddingRight: 16,
        paddingLeft: 16,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        position: 'absolute',
        bottom: 0
    },
    closeBtn: {
        paddingTop: 32,
        paddingRight: 16,
        alignSelf: 'flex-end'
    },
    icons: {
        width: 30,
    },
    btnHolder: {
        paddingBottom: 16,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    outerPicBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 72,
        width: 72,
        borderRadius: 50,
        backgroundColor: "white"
    },
    innerPicBtn: {
        padding: 4,
        height: 56,
        width: 56,
        borderRadius: 50,
        backgroundColor: "#2C77F4"
    }

})

export default myCamera;