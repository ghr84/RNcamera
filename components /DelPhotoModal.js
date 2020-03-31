import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default DelPhotoModal = ({ delModalVisable, setDelModalVisability, deletePhoto, i }) => {

    return (
        <Modal
            style={styles.modalContainer}
            isVisible={delModalVisable}
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionOutTiming={0}
        >
            <View style={styles.modalHeader}>
                <TouchableOpacity onPress={() => setDelModalVisability(false)}>
                    <Feather style={styles.modalCloseBtn} name="x" size={26} color={"black"} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer} >
                <Text style={styles.bodyText}>
                    Ertu viss um að þú viljir eyða myndinni?
                </Text>
            </View>
            <View style={styles.btnHolder}>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => setDelModalVisability(false)}>
                    <Text style={styles.cancelBtnText}>
                        Hætta við
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmBtn} onPress={() => deletePhoto(i)} >
                    <Text style={styles.confirmBtnText}>
                        Eyða
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal >
    )
}
const styles = StyleSheet.create({

    modalContainer: {
        maxHeight: 170,
        width: "95%",
        justifyContent: "space-between",
        alignSelf: "center",
        backgroundColor: 'white',
        borderRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalHeader: {
        alignSelf: "flex-end",
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    textContainer: {
        paddingHorizontal: 20,
        alignContent: "center"
    },
    bodyText: {
        color: "#333333",
        fontSize: 18,
    },
    btnHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 24,
        marginTop: 28
    },
    cancelBtn: {
        fontSize: 14,
        height: 40,
        width: 144,
        borderRadius: 4,
        borderColor: "#B1B1B1",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelBtnText: {
        fontSize: 17,
        color: "#333333",
    },
    confirmBtn: {
        height: 40,
        width: 144,
        backgroundColor: "#EB5757",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    confirmBtnText: {
        color: "white",
        fontSize: 17,
    },

})