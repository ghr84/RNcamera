import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default PictureModal = ({ modalVisable, modalImage, setModalVisability }) => {

    return (

        <Modal
            style={styles.modalContainer}
            isVisible={modalVisable}
            supportedOrientations={['portrait', 'landscape']}
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={300}
            animationOutTiming={300}
        >
            <TouchableOpacity onPress={() => setModalVisability(false)}>
                <Feather style={styles.modalCloseBtn} name="x" size={32} color={"black"} />
            </TouchableOpacity>
            <View >
                <Image style={styles.modalPhoto} source={{ uri: `data:image/png;base64,${modalImage}` }} />
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: .5,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    modalPhoto: {
        width: "100%",
        height: 255
    },
    modalCloseBtn: {
        alignSelf: "flex-end"
    }
})