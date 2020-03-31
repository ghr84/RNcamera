import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default PictureModal = ({ modalVisable, modalImage, setModalVisability }) => {

    return (
        <View style={styles.flexContainer}>
            <Modal
                style={styles.modalContainer}
                isVisible={modalVisable}
                supportedOrientations={['portrait', 'landscape']}
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInTiming={300}
                animationOutTiming={300}
            >
                <View style={styles.modalPhotoHeader}>
                    <TouchableOpacity onPress={() => setModalVisability(false)}>
                        <Feather style={styles.modalCloseBtn} name="x" size={28} color={"black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisability(false)}>
                        <Feather style={styles.modalDelBtn} name="more-horizontal" size={28} color={"black"} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Image style={styles.modalPhoto} source={{ uri: `data:image/png;base64,${modalImage}` }} />
                </View>
            </Modal >
        </View>


    )
}
const styles = StyleSheet.create({
    // flexContainer: {
    //     position: "absolute",
    //     bottom: 20
    // },
    modalContainer: {
        maxHeight: 490,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    modalPhotoHeader: {
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