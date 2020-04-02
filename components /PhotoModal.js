import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default PictureModal = ({ modalVisable, modalImage, setModalVisability }) => {

    return (
        <Modal
            style={styles.modalContainer}
            isVisible={modalVisable}
            supportedOrientations={['portrait']}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionOutTiming={0}
        // onBackdropPress={() => setModalVisability(false)}>
        >
            <View style={styles.modalPhotoHeader}>
                <TouchableOpacity onPress={() => setModalVisability(false)}>
                    <Feather style={styles.modalCloseBtn} name="x" size={28} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisability(false)}>
                    <Feather style={styles.modalDelBtn} name="more-horizontal" size={28} color={"white"} />
                </TouchableOpacity>
            </View>
            <View >
                <Image style={styles.modalPhoto} source={{ uri: `data:image/png;base64,${modalImage}` }} />
            </View>
        </Modal >
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        position: "relative",
        height: "100%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        margin: 0,
        backgroundColor: '#17202A',
    },
    modalPhotoHeader: {
        position: "absolute",
        top: 0,
        width: "100%",
        backgroundColor: '#17202A',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalPhoto: {
        alignSelf: "center",
        height: 450,
        width: "100%",
        resizeMode: "contain",
    },
})