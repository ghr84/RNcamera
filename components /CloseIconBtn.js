import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons/'

export default CloseIconBtn = () => {
    return (
        <View style={styles.closeBtnContainer}>
            <View style={styles.closeIconBckgrnd}>
                <Ionicons style={styles.modalCloseBtn} name="ios-close" size={32} color={"#17202A"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    closeBtnContainer: {
        marginTop: 20,
        marginHorizontal: 12,
    },
    closeIconBckgrnd: {
        width: 28,
        height: 28,
        backgroundColor: "white",
        position: "relative",
        borderRadius: 50,
    },
    modalCloseBtn: {
        position: "absolute",
        right: "28%",
        bottom: -5.3
    }
})
