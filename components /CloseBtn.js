import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons/'


const CloseBtn = props => {

    return (
        <View>
            <TouchableOpacity style={styles.closeBtn} onPress={props.handleCameraChange}>
                <Feather name="x-circle" size={42} color={"white"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    closeBtn: {
        paddingTop: 20,
        paddingRight: 16,
        alignSelf: 'flex-end'
    }

})

export default CloseBtn;