import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default PhotoModal = ({ modalVisable, modalImage, setModalVisability }) => {

    const [imageDim, setImageDim] = useState({ width: 0, height: 0 })

    const isPortrait = () => {
        if (imageDim.width < 2500) {
            return true
        }
        return false
    }

    if (modalImage) {
        Image.getSize(`data:image/png;base64,${modalImage}`, (width, height) => {
            if (width !== imageDim.width) {
                setImageDim({ width, height })
            }
        });
    }
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
                <Image style={isPortrait() ? styles.modalPhotoPortrait : styles.modalPhoto} source={{ uri: `data:image/png;base64,${modalImage}` }} />
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
        zIndex: 1,
        position: "absolute",
        top: 0,
        width: "100%",
        backgroundColor: "transparent",
        paddingTop: 20,
        paddingHorizontal: 4,
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
    modalPhotoPortrait: {
        zIndex: 0,
        alignSelf: "center",
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    }
})