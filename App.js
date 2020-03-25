//Spurningar:
//1. Afhverju þarf ég ekki að taka handlCameraChange fallið inn sem props á Btn componentinn



import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons/'

// Local imports

import Cam from './MyCam';
import Btn from './Btn';
import PhotoCard from './PhotoCard';


export default function App() {

  // Heldur utan um local storage gögn/myndir 

  const [imageArray, setImageArray] = useState([]);

  // Sér um að skipta á milli myndavélar og heimaskjá 

  const [cameraStatus, setCameraStatus] = useState(false);

  handleCameraChange = () => {
    setCameraStatus(!cameraStatus)
  }

  // Sér um að birta success badge þegar mynd er tekinn.

  const [showSuccessBadge, setShowSuccessBadge] = useState(false);

  const handleSuccessBadgeChange = () => {

    setShowSuccessBadge(!showSuccessBadge)

  }

  // Tekur mynd - Cam tekur inn fallið sem props svo að myndavéla componentið hafi aðgang að fallinu

  const takePicture = async () => {

    if (camera) {
      const options = { quality: 1, base64: true };

      try {
        const data = await camera.takePictureAsync(options);

        setImageArray([...imageArray, data.base64])

        AsyncStorage.setItem('images', JSON.stringify([...imageArray, data.base64]));
        setShowSuccessBadge(true)
        //handleSuccessBadgeChange()
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

  // Eyðir mynd - Fall sem eyðir stakri mynd 

  const deletePhoto = async (index) => {
    const images = await AsyncStorage.getItem('images');
    const parsedData = JSON.parse(images)
    parsedData.splice(index, 1);
    AsyncStorage.setItem('images', JSON.stringify(parsedData));
    setImageArray(parsedData);
  }

  return (
    <View style={styles.container}>
      {cameraStatus ? <Cam handleCameraChange={handleCameraChange} takePicture={takePicture} showSuccessBadge={showSuccessBadge} handleSuccessBadgeChange={handleSuccessBadgeChange} /> :
        <View>
          <Btn />
          <PhotoCard imageArray={imageArray} deletePhoto={deletePhoto} />
        </View>}
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
    // padding: 16,
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
