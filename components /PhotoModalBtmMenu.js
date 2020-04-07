import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';

export default PhotoModalBtmMenu = ({ modalBtmMenuVisible, setModalBtmMenuVisibility, translateModal, animatedStyles, isPhotoPortrait }) => {

    // Get ekki notal modal inn í modal með "react-native-modal" .. Þannig er að gera custom transition á <View> ið 
    // Er búinn að skoða myndbönd og lesa allskonar docs og án undantekninga er ógjörningur fyrir mig að skilja hvernig ég 
    // nota sýnidæmin .. fyrir utan léleg docs sýnist mér react-native-reanimated vera fínt library og fann myndaband
    // sem sýnir hvernig á gera einfalt transition þegar componentin renderast. Gerði nákvæmlega eins og myndbandið sýnir 
    // fyrir utan að nota functional componentent. En ég fæ alltaf error varðandi ref. TypeError:null is not an object(evaluating
    //'ref.current.animateNextTransition')

    const ref = useRef();
    //console.log(ref)

    //Þegar ég logga ref-ið þegar ref.current.animateNextTransition(); inn i animate functioinu er ekki til staðar
    //og modalinn er opinn er ref=null en þegar ég loka modalnum fæ objectið .. vandamálið?

    // Pælingin er ss að búa til Transition fasa sem ég klæði svo View-ið í fyrir neðan.

    const transition = (
        <Transition.Together>
            <Transition.In type="slide-left" durationMs={3000} interpolation="easeInOut" />
        </Transition.Together>
    );

    const [showBtmModal, setShowBtmModal] = useState(false);

    const animate = () => {
        setShowBtmModal(!showBtmModal)

        // Fæ errorinn þegar þessi lína er virk
        ref.current.animateNextTransition();
    }

    return (
        <View>
            {/* <TouchableOpacity style={styles.button} onPress={() => setShowBtmModal(!showBtmModal)}> */}
            <TouchableOpacity style={styles.button} onPress={() => animate()}>
                <Text style={styles.buttonTxt} >Press</Text>
            </TouchableOpacity>

            {showBtmModal ?

                //Klæði view-ið í const Transitioning sem tekur propsið transaition = (Transition.Together)fasann
                //Og nota ref svo að við vitum hvað á að transitiona?

                // View-ið sem á transitionast 

                <Transitioning.View
                    style={styles.modalContainer}
                    ref={ref}
                    transition={transition}
                >
                    <TouchableOpacity style={styles.btmMenuBtn} >
                        <Text style={styles.delBtnText}>Eyða mynd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btmMenuBtn}>
                        <Text style={styles.menuText}>Vista mynd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btmMenuBtn} >
                        <Text style={styles.menuText}>Hætta við</Text>
                    </TouchableOpacity>
                </Transitioning.View>
                : null}
        </View>

    )

}

const styles = StyleSheet.create({

    buttonTxt: {
        fontSize: 32,
        color: "black"
    },
    button: {
        marginBottom: 24,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: "beige",

    },

    modalContainer: {
        height: 200,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: 200,
        margin: 0,
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
        bottom: -209,
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
        fontSize: 22,
        fontWeight: "500"
    },
    delBtnText: {
        fontSize: 22,
        color: "#EB5757",
        fontWeight: "500"
    }
})


