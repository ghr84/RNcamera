import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons/'

// Local imports

export default SuccessBadge = ({ handleSuccessBadgeChange }) => {
    return (
        <View style={styles.successBadge} >
            <Ionicons name="ios-information-circle-outline" size={30} color={"white"} />
            <Text style={styles.successText}>Myndin þín er aðgengileg á pöntunarskjá.</Text>
            <TouchableOpacity onPress={handleSuccessBadgeChange}>
                <View style={styles.closeBtn} >
                    <Feather name="x" size={24} color={"#06893D"} />
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    successBadge: {
        marginTop: 24,
        marginBottom: 4,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'stretch',
        justifyContent: "space-between",
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
        fontSize: 18,
        // width: "90%",
        fontWeight: "500",
        color: "white",
    },
    closeBtn: {
        // paddingLeft: 8
    }

});
