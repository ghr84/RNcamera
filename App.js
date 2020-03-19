import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage, Image, Text } from 'react-native';

// Local imports

import Cam from './MyCam';
import Btn from './Btn';
import PhotoCard from './PhotoCard';
// import SuccessBadge from './SuccessBadge';

export default function App() {

  getImagesFromLocalStore();
  // useEffect(() => {
  getImagesFromLocalStore = async () => {
    console.log("asdf")
    const value = await AsyncStorage.getItem('images');
    const parsedData = JSON.parse(value)
    setDataStorage(parsedData)
  }
  // });
  // Heldur utan um stöðu á myndavél front/back = true/false


  const [cameraStatus, setCameraStatus] = useState(false)

  // Sér um að skipta á milli myndavéla front/back

  handleCameraChange = () => {
    setCameraStatus(!cameraStatus)
  }

  // Heldur utan um local storage gögn/myndir 

  const [imageArray, setImageArray] = useState([]);
  const [dataStorage, setDataStorage] = useState([])

  // useEffect(() => {
  //   const test = async () => {
  //     if (!images) {
  //       console.log("asdf")
  //       const res = await AsyncStorage.getItem('Images');
  //       setImages(res);
  //     }
  //   }
  // }, [images])



  // Tekur mynd - Cam tekur inn fallið sem props svo að myndavéla componentið hafi aðgang að fallinu

  const takePicture = async () => {

    if (camera) {
      const options = { quality: 1, base64: true };

      try {
        const data = await camera.takePictureAsync(options);

        setImageArray([...imageArray, data.base64])

        AsyncStorage.setItem('images', JSON.stringify([...imageArray, data.base64]));


      } catch (error) {
        console.log(error)
      }
    }

  };



  console.log(dataStorage.length)
  return (
    <View style={styles.container}>

      {cameraStatus ? <Cam handleCameraChange={handleCameraChange} takePicture={takePicture} /> : <Btn />}
      {/* {!cameraStatus && <PhotoCard img={img} ></PhotoCard>} */}
      {dataStorage.map(image =>
        <Image style={styles.photoCard} source={{ uri: `data:image/png;base64,${image}` }} />
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
