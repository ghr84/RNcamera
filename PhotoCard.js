import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons/'

// Local imports


export default Photo = ({ imageArray, deletePhoto }) => {

    const extendCard = () => {

    }

    return (
        <View>
            {imageArray.map((image, i) =>
                <View key={i} style={styles.photoCard} >
                    <Image style={styles.photo} source={{ uri: `data:image/png;base64,${image}` }} />
                    <TouchableOpacity style={styles.closeBtn} onPress={() => deletePhoto(i)}>
                        <View >
                            <Feather name="x" size={26} color={"black"} />
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    photoCard: {
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        padding: 12,
        borderRadius: 8,
        position: "relative",
        alignSelf: "flex-start",
        // width: 100,
        // flexDirection: "row",
        // alignItems: "center",
        // alignSelf: 'stretch',
        // justifyContent: "space-between",
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
        height: 72,
        width: 72,
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
    }

});
