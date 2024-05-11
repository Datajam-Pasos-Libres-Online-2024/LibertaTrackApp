import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

class CameraApp extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
        >
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={{ flex: 0, alignSelf: 'center', margin: 20 }}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
}


const Camera = () =>{
    return(
        <CameraApp/>
    )
}

export default Camera;
