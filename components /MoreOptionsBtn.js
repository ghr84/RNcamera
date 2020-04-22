import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons/'

export default MoreOptionsBtn = () => {
    return (
        <View style={styles.optionBtnContainer}>
            <Feather style={styles.modalDelBtn} name="more-horizontal" size={24} color={"#17202A"} />
        </View>
    )
}

const styles = StyleSheet.create({
    optionBtnContainer: {
        width: 28,
        height: 28,
        borderRadius: 50,
        backgroundColor: "white",
        marginTop: 20,
        marginHorizontal: 12,
        justifyContent: "center",
        alignItems: "center"
    },
})
