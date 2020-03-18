import React from 'react';
import { StyleSheet, View } from 'react-native';


const TakePicBtn = () => {

    return (
        <View style={styles.btnHolder}>
            <View style={styles.outerPicBtn}>
                <View style={styles.innerPicBtn}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnHolder: {
        flex: 1,
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

export default TakePicBtn
