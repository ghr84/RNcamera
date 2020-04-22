import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default delPhotoModal = ({ deletePhotoModalVisible, setDeletePhotoModalVisible, deletePhoto, index }) => {

    return (

        <View style={styles.container}>
            <Modal
                style={styles.modalContainer}
                isVisible={index === deletePhotoModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionOutTiming={0}
                backdropOpacity={0.5}
                swipeDirection={"down"}
                swipeThreshold={50}
                onSwipeComplete={() => { setDeletePhotoModalVisible(false) }}
                onBackdropPress={() => { setDeletePhotoModalVisible(false) }}
            >
                <View style={styles.dragModalDiv}></View>
                <View style={styles.textContainer} >
                    <Text style={styles.bodyText}>
                        Ertu viss um að þú viljir eyða myndinni?
                    </Text>
                </View>
                <View style={styles.btnHolder}>
                    <TouchableOpacity style={styles.confirmBtn} onPress={() => { deletePhoto(index) }}>
                        <Text style={styles.confirmBtnText}>
                            Eyða
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => setDeletePhotoModalVisible(-1)}>
                        <Text style={styles.cancelBtnText}>
                            Hætta við
                    </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        alignSelf: "center",
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: "absolute",
        top: 429,
        margin: 0,
    },
    dragModalDiv: {
        height: 5,
        width: 72,
        alignSelf: "center",
        backgroundColor: "lightgrey",
        margin: 8,
        borderRadius: 8,
    },
    textContainer: {
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 8,
        alignContent: "center",

    },
    bodyText: {
        textAlign: "center",
        color: "#333333",
        fontSize: 20,
        fontWeight: "400"
    },
    titleText: {
        color: "#333333",
        fontSize: 20,
        fontWeight: "bold"
    },
    btnHolder: {
        height: 142,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 40,
        marginTop: 28
    },
    cancelBtn: {
        fontSize: 14,
        height: 46,
        width: "100%",
        borderRadius: 4,
        borderColor: "#B1B1B1",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelBtnText: {
        fontSize: 18,
        color: "#333333",
        fontWeight: "500"
    },
    confirmBtn: {
        height: 48,
        width: "100%",
        backgroundColor: "#EB5757",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    confirmBtnText: {
        color: "white",
        fontSize: 19,
        fontWeight: "500"
    },

})