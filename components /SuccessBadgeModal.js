import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons/'
import Modal from 'react-native-modal';

export default SuccessBadgeModal = ({ showSuccessBadge }) => {
    return (
        <Modal
            style={styles.badgeModalContainer}
            isVisible={showSuccessBadge}
            backdropOpacity={0}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            animationInTiming={550}
            animationOutTiming={400}
        >
            <Ionicons style={styles.infoIcon} name="ios-information-circle-outline" size={30} color={"white"} />
            <Text style={styles.successText}>Myndin þín er aðgengileg á pöntunarskjá.</Text>
        </Modal>
    );
}

const styles = StyleSheet.create({
    badgeModalContainer: {
        borderRadius: 4,
        maxHeight: 60,
        marginTop: 24,
        marginBottom: 4,
        marginLeft: 8,
        marginRight: 8,
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",

        backgroundColor: "#6FCF97",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    successText: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
    },
    infoIcon: {
        marginTop: 4
    }

});