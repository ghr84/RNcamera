//Spurningar:
//1. Afhverju þarf ég ekki að taka handlCameraChange fallið inn sem props á Btn componentinn

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { ScreenOrientation } from 'expo';

// Local imports

import Cam from './Screens/MyCam';
import OpenCamBtn from './components /Btn';
import PhotoCard from './components /PhotoCard';
import PhotoModal from './components /PhotoModal';
import SuccessBadgeModal from './components /SuccessBadgeModal';
import DelPhotoModal from './components /DelPhotoModal'


export default function App() {

  // Læsir appið í portrait mode 

  ScreenOrientation.lockAsync('PORTRAIT');

  // Sér um að skipta á milli myndavélar og heimaskjá 

  const [cameraStatus, setCameraStatus] = useState(false);

  handleCameraChange = () => {
    setCameraStatus(!cameraStatus)
  }

  // successBadge modal virkni

  const [showSuccessBadge, setShowSuccessBadge] = useState(false);

  const handleSuccessBadgeChange = () => {
    setShowSuccessBadge(false)
  }

  // Cam comp tekur inn fallið sem props svo að myndavéla componentið hafi aðgang að fallinu

  // Heldur utan um local storage gögn/myndir 

  const [imageArray, setImageArray] = useState([]);

  const takePicture = async () => {

    if (camera) {
      const options = { quality: 1, base64: true };
      try {
        const data = await camera.takePictureAsync(options);
        setImageArray([...imageArray, data.base64])
        AsyncStorage.setItem('images', JSON.stringify([...imageArray, data.base64]));

        // Birtir success badge

        setShowSuccessBadge(!showSuccessBadge)

        // Kallar í fall eftir 3.5 sec sem fjarlægjir success banner

        setTimeout(() => {
          handleSuccessBadgeChange()
        }, 2000)

      } catch (error) {
        console.log(error)
      }
    }
  };

  // Fall sem sækjir myndir frá local storage sem streng og parsar svo strengnum í array 

  useEffect(() => {
    getImagesFromLocalStore = async () => {
      const value = await AsyncStorage.getItem('images');
      const parsedData = JSON.parse(value)
      setImageArray(parsedData || [])
    }
    getImagesFromLocalStore();
  }, []);

  // Eyðir stakri mynd 

  const deletePhoto = async (index) => {
    const images = await AsyncStorage.getItem('images');
    const parsedData = JSON.parse(images)
    parsedData.splice(index, 1);
    AsyncStorage.setItem('images', JSON.stringify(parsedData));
    setImageArray(parsedData);
    setDelModalVisability(false)
  }

  // Höndlar birtingu á photo modal

  const [modalVisable, setModalVisability] = useState(false);
  const [modalImage, setModalImage] = useState()

  // Höndlar birtingu á delete photo modal

  const [delModalVisable, setDelModalVisability] = useState(false);

  // Heldur utan PhotoModal Virkni 

  const handleModal = (image) => {
    setModalImage(image)
    setModalVisability(true)
  }

  return (
    <View style={styles.container} >
      {cameraStatus ? <Cam handleCameraChange={handleCameraChange} takePicture={takePicture} handleSuccessBadgeChange={handleSuccessBadgeChange} /> :
        <View>
          <OpenCamBtn />
          <PhotoCard imageArray={imageArray} deletePhoto={deletePhoto} handleModal={handleModal} setDelModalVisability={setDelModalVisability} />
        </View>}
      <PhotoModal modalImage={modalImage} modalVisable={modalVisable} setModalVisability={setModalVisability} />
      <SuccessBadgeModal showSuccessBadge={showSuccessBadge} />
      <DelPhotoModal delModalVisable={delModalVisable} setDelModalVisability={setDelModalVisability} deletePhoto={deletePhoto} />
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
    height: 60,
    width: 60,
  },

  // Temp styles f photocard

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "brown",
    height: 80,
    width: 120,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "white"
  }
});
