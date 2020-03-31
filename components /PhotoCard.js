import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons/';
import Modal from 'react-native-modal';

// Local imports

export default Photo = ({ imageArray, deletePhoto, handleModal }) => {

    return (
        <View style={styles.photoCardContainer}>
            {imageArray.map((image, i) =>
                <View key={i}  >
                    <TouchableOpacity onPress={() => handleModal(image)}>
                        <View style={styles.photoCard} >
                            <Image style={styles.photo} source={{ uri: `data:image/png;base64,${image}` }} />
                            <TouchableOpacity style={styles.closeBtn} onPress={() => deletePhoto(i)}>
                                <View >
                                    <Feather name="x" size={26} color={"black"} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    photoCardContainer: {
        marginVertical: 24,
        marginHorizontal: 32,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    photoCard: {
        marginBottom: 32,
        padding: 12,
        borderRadius: 8,
        alignSelf: "flex-start",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    photo: {
        height: 96,
        width: 96,
        resizeMode: "cover"
    },
    closeBtn: {
        position: "absolute",
        top: -18,
        right: -18,
        backgroundColor: "#F0EAEA",
        borderRadius: 20,
        height: 36,
        width: 36,
        alignItems: "center",
        justifyContent: "center"
    },
    modalContainer: {
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 8,
    },
    modalPhoto: {
        height: 275,
        width: 275
    },
    modalCloseBtn: {

    }
});
