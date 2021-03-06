import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';


// Local Imports

import ModalBtmMenu from './PhotoModalBtmMenu';
import CloseBtn from './CloseIconBtn';
import MoreOptionsBtn from './MoreOptionsBtn';

export default PhotoModal = ({ photoModalVisable, modalImage, setPhotoModalVisibility, deletePhoto, imageIndex }) => {

    // Tjekkar ef mynd er portrait og ef fallið skilar true er viðeigandi stílar settir á mynd

    const [imageDim, setImageDim] = useState({ width: 0, height: 0 })

    const IsPhotoPortrait = () => {
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

    // Lokar báðum modals 

    const handleClosingModals = () => {
        setPhotoModalVisibility(false)
        setActivated(false)
    }

    // Btm Modal Animation

    const [activated, setActivated] = useState(false)
    const [upperAnimation, setUpperAnimation] = useState(new Animated.Value(0))

    const btmModalAnimation = () => {
        setActivated(!activated)
    }

    useEffect(() => {
        Animated.timing(upperAnimation,
            {
                toValue: activated ? -200 : 0,
                duration: 300
            }).start()
    }, [activated])

    const animatedStyles = {
        upper: {
            transform: [
                {
                    translateY: upperAnimation
                }
            ]
        }
    }
    return (
        <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={() => setActivated(false)}>
            <Modal
                style={styles.modalContainer}
                isVisible={photoModalVisable}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionOutTiming={0}
                onPress={() => console.log("Yead")}
            >
                <View style={styles.modalPhotoHeader}>
                    <TouchableOpacity onPress={() => handleClosingModals()}>
                        <CloseBtn />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => btmModalAnimation()}>
                        <MoreOptionsBtn />
                    </TouchableOpacity>
                </View>
                <View >
                    <Image style={IsPhotoPortrait() ? styles.modalPhotoPortrait : styles.modalPhoto} source={{ uri: `data:image/png;base64,${modalImage}` }} />
                </View>
                <ModalBtmMenu
                    setActivated={setActivated}
                    setPhotoModalVisibility={setPhotoModalVisibility}
                    animatedStyles={animatedStyles}
                    deletePhoto={deletePhoto}
                    imageIndex={imageIndex}
                    modalImage={modalImage}
                    handleClosingModals={handleClosingModals}
                />
            </Modal>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        zIndex: 10,
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
    },

})