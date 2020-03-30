import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons/'

export default Btn = () => {

    return (
        <View>
            <TouchableOpacity onPress={handleCameraChange}>
                <View style={styles.btn} >
                    <Feather name="camera" size={24} color={"white"} />
                    <Text style={styles.text}>Taka mynd</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        backgroundColor: "#2C77F4",
        padding: 16,
        margin: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "white",
        paddingLeft: 8,
    }
});
