import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Image } from 'react-native';

export default PhotoModalBtmMenu = ({ animatedStyles, deletePhoto, modalImage, imageIndex, setPhotoModalVisibility, setActivated }) => {

    // Tjekkar ef mynd er portrait og ef fallið skilar true er viðeigandi stílar settir á btmModal 

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

    const handleCloseModalOnDelete = () => {
        deletePhoto(imageIndex)
        setPhotoModalVisibility(false)
        setActivated(false)
    }


    return (
        <Animated.View style={animatedStyles.upper}>
            <View
                style={IsPhotoPortrait() ? styles.modalContainerPortrait : styles.modalContainer}
            >
                <TouchableOpacity style={styles.btmMenuBtn} onPress={() => handleCloseModalOnDelete()}>
                    <Text style={styles.delBtnText}>Eyða mynd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btmMenuBtn}>
                    <Text style={styles.menuText}>Vista mynd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btmMenuBtn} onPress={() => setActivated(false)} >
                    <Text style={styles.menuText}>Hætta við</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: 200,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: -309,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    modalContainerPortrait: {
        height: 200,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: -201,
        margin: 0,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    btmMenuBtn: {
        flex: 1,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#B3B6B7"
    },
    cancelBtn: {

    },
    menuText: {
        fontSize: 20,
        fontWeight: "500"
    },
    delBtnText: {
        fontSize: 20,
        color: "#EB5757",
        fontWeight: "500"
    }
})


