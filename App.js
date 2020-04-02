//Spurningar:
//1. Afhverju þarf ég ekki að taka handlCameraChange fallið inn sem props á Btn componentinn
//2. Er good practice að nota alltaf func components en ekki class
//3. PhotoModal.js afhverju þegar ég nora onBackDropPress={()=>{setModalVis..(false)}} kemur error

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { ScreenOrientation } from 'expo';

// Local imports

import Cam from './Screens/MyCam';
import OpenCamBtn from './components /Btn';
import PhotoCard from './components /PhotoCard';
import PhotoModal from './components /PhotoModal';
import SuccessBadgeModal from './components /SuccessBadgeModal';

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

  const [delModalVisable, setDelModalVisability] = useState(-1);

  // Heldur utan PhotoModal Virkni 

  const handleModal = (image) => {
    setModalImage(image)
    setModalVisability(true)
  }

  return (
    <View style={styles.container} >
      {cameraStatus ? <Cam handleCameraChange={handleCameraChange}
        takePicture={takePicture}
        handleSuccessBadgeChange={handleSuccessBadgeChange} /> :
        <View>
          <OpenCamBtn />
          <PhotoCard imageArray={imageArray}
            deletePhoto={deletePhoto}
            handleModal={handleModal}
            setDelModalVisability={setDelModalVisability}
            delModalVisable={delModalVisable}
          />
        </View>}
      <PhotoModal modalImage={modalImage}
        modalVisable={modalVisable}
        setModalVisability={setModalVisability} />

      <SuccessBadgeModal showSuccessBadge={showSuccessBadge} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
