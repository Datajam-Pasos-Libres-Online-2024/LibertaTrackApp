import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

const Camera = () => {
  const [imageUri, setImageUri] = React.useState(null);

  const handleTakePhoto = async () => {
    const cameraPermission = await requestCameraPermission();
    if (cameraPermission === RESULTS.GRANTED) {
      const options = {
        saveToPhotos: true,
        mediaType: 'photo',
      };

      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          const source = { uri: response.assets[0].uri };
          setImageUri(source.uri);
        } else {
          console.log('No image selected');
        }
      });
    } else {
      console.log('Camera permission denied');
    }
  };

  async function requestCameraPermission() {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);
    return result;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{ backgroundColor: 'black', height: 48, justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 4 }}
        onPress={handleTakePhoto}
      >
        <Text style={{ color: 'white' }}>Take Photo</Text>
      </TouchableOpacity>
      {imageUri && (
        <View style={{ marginTop: 20 }}>
          <Text>Selected Image:</Text>
          <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />
        </View>
      )}
    </View>
  );
};

export default Camera;

// const Camera = () => {
//   return (
//     <View>
//       <CameraComponent />
//       {/* <Text>camara</Text> */}
//     </View>

//   )
// }

// export default Camera;
