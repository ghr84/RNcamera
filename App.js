import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage, Image, Text } from 'react-native';

// Local imports

import Cam from './MyCam';
import Btn from './Btn';
import PhotoCard from './PhotoCard';
// import SuccessBadge from './SuccessBadge';

export default function App() {

  // Heldur utan um stöðu á myndavél front/back = true/false

  const [cameraStatus, setCameraStatus] = useState(false)

  // Sér um að skipta á milli myndavéla front/back

  handleCameraChange = () => {
    setCameraStatus(!cameraStatus)
  }

  // Heldur utan um tekna mynd

  //const [img, setImg] = useState();

  const [localStorageData, setLocalStorageData] = useState([]);

  // Initializa tómt array sem heldur utan hverja mynd/base64 strengina

  const imgArray = []


  // Tekur mynd - Cam tekur inn fallið sem props svo að myndavéla componentið hafi aðgang að fallinu

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 1, base64: true };

      try {
        const data = await camera.takePictureAsync(options);

        imgArray.push(data.base64)

        // Setur imgArray inn í local storage sem streng 

        await AsyncStorage.setItem('images', JSON.stringify(imgArray));


      } catch (error) {
        console.log(error)
      }
    }
    getImagesFromLocalStore()
  };

  getImagesFromLocalStore = async () => {
    const value = await AsyncStorage.getItem('images');
    let parsedData = JSON.parse(value)
    setLocalStorageData(parsedData)
  }



  return (
    <View style={styles.container}>

      {cameraStatus ? <Cam getImagesFromLocalStore={getImagesFromLocalStore} handleCameraChange={handleCameraChange} takePicture={takePicture} /> : <Btn />}
      {/* {!cameraStatus && <PhotoCard img={img} ></PhotoCard>} */}
      {localStorageData.map(image =>
        <Image key={image} style={styles.photo} source={{ uri: `data:image/png;base64,${image}` }} />
      )}
      {/* <Image style={styles.photo} source={{ uri: `data:image/png;base64,${img}` }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({

  // Temp styles f photocard

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
