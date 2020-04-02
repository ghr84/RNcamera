import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default delPhotoModal = ({ delModalVisable, setDelModalVisability, deletePhoto, index }) => {

    return (
        <Modal
            style={styles.modalContainer}
            isVisible={index === delModalVisable}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionOutTiming={0}
            backdropOpacity={0.5}
            onBackdropPress={() => { setDelModalVisability(false) }}

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
                <TouchableOpacity style={styles.cancelBtn} onPress={() => setDelModalVisability(-1)}>
                    <Text style={styles.cancelBtnText}>
                        Hætta við
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmBtn} onPress={() => { deletePhoto(index) }}>
                    <Text style={styles.confirmBtnText}>
                        Eyða
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    myView: {
        elevation: 100,

    },
    modalContainer: {
        width: "100%",
        justifyContent: "space-between",
        alignSelf: "center",
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: "absolute",
        bottom: 0,
        margin: 0,
    },
    modalHeader: {
        alignSelf: "flex-end",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 18,
        alignContent: "center"
    },
    bodyText: {
        color: "#333333",
        fontSize: 19,
        fontWeight: "400"
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
        width: 158,
        borderRadius: 4,
        borderColor: "#B1B1B1",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelBtnText: {
        fontSize: 17,
        color: "#333333",
        fontWeight: "500"
    },
    confirmBtn: {
        height: 40,
        width: 158,
        backgroundColor: "#EB5757",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    confirmBtnText: {
        color: "white",
        fontSize: 17,
        fontWeight: "500"
    },

})